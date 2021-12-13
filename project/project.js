let money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

let addData = {
    budjet : money,
    timeData : time,
    expenses : {},
    optimonalExpenses : {},
    income : [],
    savings : false,
};

for (let i = 0; i < 2; i++) {
    let a = prompt ("Введите обязательную статью расходов в этом месяце?"),
        b = prompt ("Во сколько обойдется?");
    addData.expenses [a] = b;
}

let moneyOneDay = alert("Ежедневный бюджет: " + money/30);

console.log(money);
console.log(addData);
console.log(time);
