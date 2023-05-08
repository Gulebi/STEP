import { Component, Input } from "@angular/core";
import { ITodo } from "src/types";

@Component({
    selector: "app-detail",
    templateUrl: "./detail.component.html",
    styleUrls: ["./detail.component.css"],
})
export class DetailComponent {
    @Input() detailData: ITodo | undefined;
}
