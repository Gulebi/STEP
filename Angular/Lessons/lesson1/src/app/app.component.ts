import { Component } from "@angular/core";
import { ITodo } from "src/types";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent {
    public title: string = "lesson1";

    public selected: ITodo | undefined;

    public setSelected(todo: ITodo) {
        this.selected = todo;
    }

    public todoList: ITodo[] = [
        {
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: false,
        },
        {
            userId: 1,
            id: 2,
            title: "quis ut nam facilis et officia qui",
            completed: false,
        },
        {
            userId: 1,
            id: 3,
            title: "fugiat veniam minus",
            completed: false,
        },
    ];
}
