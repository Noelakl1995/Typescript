"use strict";
//const runnerJohn = new Runner('Jonh');
//const lazyJonh  = new Lazy('John');
Object.defineProperty(exports, "__esModule", { value: true });
exports.FPSGame = void 0;
// Implementando a classe FPSGame que utiliza a interface iGame com FPSControls
var FPSGame = /** @class */ (function () {
    function FPSGame(title, platform, controls) {
        this.title = title;
        this.platform = platform;
        this.controls = controls;
    }
    return FPSGame;
}());
exports.FPSGame = FPSGame;
// Definindo o objeto gameControls com o tipo FPSControls
var gameControls = {
    W: 'up',
    A: 'left',
    S: 'down',
    D: 'right'
};
// Inicializando uma nova instância de FPSGame
var myFPSGame = new FPSGame("Action Shooter", "PC", gameControls);
