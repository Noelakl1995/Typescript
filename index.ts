//const runnerJohn = new Runner('Jonh');
//const lazyJonh  = new Lazy('John');

//runnerJohn.move();
//runnerJohn.greetings();

//lazyJonh.move();
//lazyJonh.greetings();


export type FPSControls = {
    W: 'up';
    A: 'left';
    S: 'down';
    D: 'right';
}

export interface iGame<T> {
    title: string;
    platform: string;
    controls: T;
}


export class FPSGame implements iGame<FPSControls> {
    title: string;
    platform: string;
    controls: FPSControls;

    constructor(title: string, platform: string, controls: FPSControls) {
        this.title = title;
        this.platform = platform;
        this.controls = controls;
    }
}


const gameControls: FPSControls = {
    W: 'up',
    A: 'left',
    S: 'down',
    D: 'right'
};

const myFPSGame = new FPSGame("Action Shooter", "PC", gameControls);
