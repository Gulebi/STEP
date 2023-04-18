import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ImageBackground } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";
import { StatusBar } from "expo-status-bar";

export default function App() {
    const [products, setProducts] = useState([]);
    const [url, setUrl] = useState("");
    const [title, setTitle] = useState("");

    const addProduct = () => {
        setProducts((state) => [{ image: url, title }, ...state]);
        setUrl("");
        setTitle("");
    };

    const deleteProduct = (id) => {
        setProducts((state) => state.filter((item) => item.id !== id));
    };

    const ProductsCard = ({ data }) => {
        return (
            <View style={styles.card}>
                <View>
                    <Image source={{ uri: data.image }} resizeMode="contain" style={styles.cardImage} />
                    <Text>{data.title}</Text>
                </View>

                <TouchableOpacity style={styles.deleteButton} onLongPress={() => deleteProduct(data.id)}>
                    <Text style={styles.colorWhite}>Delete</Text>
                </TouchableOpacity>
            </View>
        );
    };

    useEffect(() => {
        (async () => {
            const res = await axios.get("https://fakestoreapi.com/products");

            setProducts(res.data);
        })();
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <ImageBackground source={{ uri: "https://images.unsplash.com/photo-1464802686167-b939a6910659?w=600" }}>
                <View style={styles.controls}>
                    <TextInput
                        style={styles.input}
                        placeholder="Url"
                        placeholderTextColor="#ffffff"
                        value={url}
                        onChangeText={(value) => setUrl(value)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Title"
                        placeholderTextColor="#ffffff"
                        value={title}
                        onChangeText={(value) => setTitle(value)}
                    />
                    <TouchableOpacity style={styles.button} onPress={addProduct}>
                        <Text style={styles.colorWhite}>Add</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            <FlatList
                data={products}
                numColumns={2}
                columnWrapperStyle={styles.listWrapper}
                horizontal={false}
                renderItem={({ item }) => <ProductsCard data={item} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    controls: {
        padding: 10,
        flexDirection: "row",
        gap: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: "#bababa",
        borderStyle: "solid",
        flex: 1,
        paddingHorizontal: 8,
        color: "#ffffff",
    },
    button: {
        borderWidth: 1,
        borderColor: "#bababa",
        borderStyle: "solid",
        paddingHorizontal: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    listWrapper: {
        gap: 10,
        backgroundColor: "#fff",
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    card: {
        flex: 1,
        padding: 10,
        gap: 8,
        minHeight: 200,
        justifyContent: "space-between",
    },
    cardImage: {
        height: 150,
        width: "100%",
    },
    deleteButton: {
        padding: 8,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "darkred",
    },
    colorWhite: {
        color: "#ffffff",
    },
});
