abstract class Person{
    constructor(public name: string){ }

    greetings() {
        console.log(`Eu me chamo ${this.name}`);
      }

    abstract move() : void;
}