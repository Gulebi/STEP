import { Component, VERSION } from "@angular/core";
import { map, skip, take, filter, delay, Subject, skipWhile, takeWhile, debounceTime } from "rxjs";

@Component({
    selector: "my-app",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent {
    public log: string[] = [];
    private _btn2Counter = 0;
    public button1Click$: Subject<string> = new Subject<string>();
    public button2Click$: Subject<number> = new Subject<number>();

    constructor() {
        this.button1Click$.pipe().subscribe((value) => this.log.push(value.toString()));

        // task 1
        // this.button2Click$
        //     .pipe(
        //         delay(2000),
        //         map((val) => val * 10)
        //     )
        //     .subscribe((value) => this.log.push(value.toString()));

        // task 2
        // this.button2Click$
        //     .pipe(
        //         delay(2000),
        //         map((val) => val * 10),
        //         take(5)
        //     )
        //     .subscribe((value) => this.log.push(value.toString()));

        // task 3
        // this.button2Click$
        //     .pipe(
        //         delay(2000),
        //         map((val) => val * 10),
        //         map((val) => val + val / 10),
        //     )
        //     .subscribe((value) => this.log.push(value.toString()));

        // task 4
        // this.button2Click$
        //     .pipe(
        //         delay(2000),
        //         map((val) => val * 10),
        //         map((val) => val + val / 10),
        //         take(4)
        //     )
        //     .subscribe((value) => this.log.push(value.toString()));

        // task 5
        // this.button2Click$
        //     .pipe(
        //         delay(2000),
        //         skipWhile((val) => val < 3),
        //         takeWhile((val) => val <= 5),
        //         map((val) => val * 10)
        //     )
        //     .subscribe((value) => this.log.push(value.toString()));

        // task 6
        // this.button2Click$
        //     .pipe(
        //         delay(2000),
        //         filter((val) => val % 2 === 0),
        //         map((val) => val * 10)
        //     )
        //     .subscribe((value) => this.log.push(value.toString()));

        // task 7
        // this.button2Click$
        //     .pipe(debounceTime(2000))

        //     .subscribe((value) => this.log.push(value.toString()));
    }

    button1Click() {
        this.button1Click$.next(new Date().toISOString());
    }

    button2Click() {
        this.button2Click$.next(this._btn2Counter++);
    }
}
