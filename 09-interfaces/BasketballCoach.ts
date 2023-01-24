import { Coach } from "./Coach";

export class BasketballCoach implements Coach{

    getDailyWorkout(): string {
        return "Hit the basket 100 times."
    }
}