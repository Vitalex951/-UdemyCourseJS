// функция конструкторы
class User {
    constructor(name, id) {    this.name = name;
    this.id = id;
    this.human = true;
    }
    hello () {
        console.log(`Hello! ${this.name}`);
    }  
    exit() {
    console.log(`Пользователь ${this.name} ушел`);
    }
}

let Ivan = new User('Ivan', 25);
let Alex = new User('Alex', 20);


console.log(Ivan);
console.log(Alex);

Ivan.exit();



