let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();

let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optimonalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце?", ''),
            b = prompt("Во сколько обойдется?", '');
        if (
            typeof (a) === "string" &&
            typeof (a) != null &&
            typeof (b) != null &&
            a != '' &&
            b != '' &&
            a.length < 50
        ) {
            appData.expenses[a] = b;
        } else {
            console.log('Done');
            i--;
        }
    }
}
chooseExpenses();

/* let i = 0;
while (i < 2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце?", ''),
        b = prompt("Во сколько обойдется?", '');
    if (
        typeof (a) === "string" &&
        typeof (a) != null &&
        typeof (b) != null &&
        a != '' &&
        b != '' &&
        a.length < 50
    ) {
        appData.expenses[a] = b;
    } else {
        console.log('Done');
        i--;
    }
    i++;
} */


/* let i = 0;
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце?", ''),
        b = prompt("Во сколько обойдется?", '');
    if (
        typeof (a) === "string" &&
        typeof (a) != null &&
        typeof (b) != null &&
        a != '' &&
        b != '' &&
        a.length < 50
    ) {
        appData.expenses[a] = b;
    } else {
        console.log('Done');
        i--;
    }
    i++;
}
while (i<2);
 */


function detectDayBudget() {
    appData.moneyPerDay = (appData.budjet / 30).toFixed();
    alert("Ежедневный бюджет:" + appData.moneyPerDay);
}
detectDayBudget();

console.log(appData.moneyPerDay);

function detectLevel1() {
    if (appData.moneyPerDay <= 100) {
        alert("Минимальный уровень достатка");
    } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay <= 2000) {
        alert('Средний уровень достатка');
    } else if (appData.moneyPerDay > 2000) {
        return alert("Высокий уровень достатка");
    } else {
        alert("Ошибка");
    }
}
detectLevel1();

console.log(money + "money");
console.log(time + "time");

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt('Под какой процент?');

        appData.monthIncome = (save / 100 / 12 * percent).toFixed(2);
        alert(`Доход в месяц с вашего депозита: ${appData.monthIncome}`);
    }
}

checkSavings();

function chooseOptExpenses() {
    for (let t = 1; t < 4; t++) {
        let OptExpenses = prompt("Статья необязательных расходов?");
        appData.optimonalExpenses[t] = OptExpenses;
    }
}

chooseOptExpenses()
console.log(appData.optimonalExpenses);
console.log(appData);

