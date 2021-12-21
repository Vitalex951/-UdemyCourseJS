let money, time;

function start() {
  money = +prompt("Ваш бюджет на месяц?", "");
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

  while (isNaN(money) || money == '' || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
}
/* start(); */

let appData = {
  budjet: money,
  timeData: time,
  expenses: {},
  optimonalExpenses: {},
  income: [],
  savings: true,
  chooseExpenses: function () {
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
  },

  detectDayBudget: function () {
    appData.moneyPerDay = (appData.budjet / 30).toFixed();
    alert("Ежедневный бюджет:" + appData.moneyPerDay);
  },

  detectLevel1: function () {
    if (appData.moneyPerDay <= 100) {
      alert("Минимальный уровень достатка");
    } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay <= 2000) {
      alert('Средний уровень достатка');
    } else if (appData.moneyPerDay > 2000) {
      return alert("Высокий уровень достатка");
    } else {
      alert("Ошибка");
    }
  },

  checkSavings: function () {
    if (appData.savings == true) {
      let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt('Под какой процент?');

      appData.monthIncome = (save / 100 / 12 * percent).toFixed(2);
      alert(`Доход в месяц с вашего депозита: ${appData.monthIncome}`);
    }
  },

  chooseOptExpenses: function () {
    for (let t = 1; t < 4; t++) {
      let OptExpenses = prompt("Статья необязательных расходов?");
      appData.optimonalExpenses[t] = OptExpenses;
    }
  },

  chooseIncome: function () {
    for (let i = 0; i < 1; i++) {
      let items = prompt('Что принесет дополнительный доход? (перечислите через запятую)', '');
      console.log(isNaN(items));
      if (isNaN(items) && items !== "" && items !== null) {
        appData.income = items.split(', ');
        appData.income.push(prompt('Может что-то еще?'));
        appData.income.sort();
      } else {
        i--;
      }
    };
    appData.income.forEach(function (item, i, arr) {
      alert("Способы доп. заработка: " + (i + 1) + ": " + item);
    })
  }

  /* chooseIncome: function () {
        for (let i = 0; i < 1; i++) {
          let items = prompt('Что принесет дополнительный доход (Пенечисли через запятую)', '');
    
          if ((typeof (items)) === 'string' && items != '' && (typeof (items)) != null) {
            appData.income = items.split(', ');
            appData.income.push(prompt('Что может что-то еще?'));
            appData.income.sort();
            appData.income.forEach(function (item, i, income) {
              let n = i + 1;
              console.log(n + ' - Способ доп. заработка: ' + item);
            });
          } else {
            i--;
          }
        }
      } */
};

/* for (let key in appData) {
    console.log('Наша программа включает в себя данные:' + key + ': ' + appData[key]);
  }; */


/* appData.chooseExpenses();
appData.detectDayBudget();
appData.detectLevel1();
appData.checkSavings();
appData.chooseOptExpenses(); */
appData.chooseIncome();