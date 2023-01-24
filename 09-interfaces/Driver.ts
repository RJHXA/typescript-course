import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";
import { BasketballCoach } from "./BasketballCoach";

let myCricketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();
let myBasketballCoach = new BasketballCoach();

let theCoaches: Coach[] = []

theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);
theCoaches.push(myBasketballCoach);

for (let tempCoach of theCoaches) {
    console.log(tempCoach.getDailyWorkout())
}