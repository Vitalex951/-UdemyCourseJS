let startBtn = document.getElementById('start'),
budgetValue = document.getElementsByClassName('budget-value')[0],
daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
expensesValue = document.getElementsByClassName('expenses-value')[0],
optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
incomeValue = document.getElementsByClassName('income-value')[0],
monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],
levelValue = document.getElementsByClassName('level-value')[0];

expensesItem = document.getElementsByClassName("expenses-item"),
expensesBtn = document.getElementsByTagName('button')[0],
optionalexpensesBtn = document.getElementsByTagName('button')[1],
countBudgetBtn = document.getElementsByTagName('button')[2],
optionalexpensesItem = document.querySelectorAll(".optionalexpenses-item"),
chooseIncome = document.querySelector(".choose-income"),
savings = document.querySelector("#savings"),
chooseSum = document.querySelector(".choose-sum"),
choosePercent = document.querySelector(".choose-percent"),
yearValue = document.querySelector('.year-value'),
monthValue = document.querySelector('.month-value'),
dayValue = document.querySelector('.day-value');
incomeItem = document.querySelector('.choose-income');

let money, time;

console.log(levelValue);
console.log(optionalexpensesItem);

expensesBtn.addEventListener('click', function () {
  let sum = 0;

  for (let i = 0; i < expensesItem.length ; i++) {
    let a = expensesItem[i].value,
      b = expensesItem[++i].value;

    if (
      typeof (a) === "string" &&
      typeof (a) != null &&
      typeof (b) != null &&
      a != '' &&
      b != '' &&
      a.length < 50
    ) {
      appData.expenses[a] = b;
      sum += +b;
    } else {
      console.log('Done');
      i--;
    }
  }
  expensesValue.textContent = sum;
});

optionalexpensesBtn.addEventListener('click', function() {
  for (let i = 0; i < optionalexpensesItem.length; i++) {
    let opt = optionalexpensesItem[i].value;
    appData.optimonalExpenses[i] = opt;
    optionalexpensesValue.textContent += appData.optimonalExpenses[i] + " ";
  }
});

countBudgetBtn.addEventListener('click', function() {
  if(appData.budjet != undefined) {

    appData.moneyPerDay = (appData.budjet / 30).toFixed();
  daybudgetValue.textContent = appData.moneyPerDay;

  if (appData.moneyPerDay <= 100) {
    levelValue.textContent = "Минимальный уровень достатка";
  } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay <= 2000) {
    levelValue.textContent ='Средний уровень достатка';
  } else if (appData.moneyPerDay > 2000) {
    levelValue.textContent ="Высокий уровень достатка";
  } else {
    levelValue.textContent ="Ошибка";
  }
} else {
  daybudgetValue.textContent = "Произошла ошибка";
}
});

incomeItem.addEventListener('input', function () {
  let items = incomeItem.value;
  appData.income = items.split(', ');
  incomeValue.textContent = appData.income;
});


 startBtn.addEventListener('click', function() {
  time = prompt("Введите дату в формате YYYY-MM-DD", "");
  money = +prompt("Ваш бюджет на месяц?", "");


  while (isNaN(money) || money == '' || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
  appData.budjet = money;
  appData.timeData = time;
  budgetValue.textContent = money.toFixed();
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth() +1;
  dayValue.value = new Date(Date.parse(time)).getDate();
 });

checkSavings.addEventListener('click', function() {
  if (appData.savings == true) {
    appData.savings = false;
  } else {
    appData.savings = true;
  }
})

chooseSum.addEventListener('input', function() {
  if (appData.savings)
})

let appData = {
  budjet: money,
  timeData: time,
  expenses: {},
  optimonalExpenses: {},
  income: [],
  savings: false,
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

/* 
    appData.income.forEach(function (item, i, arr) {
      alert("Способы доп. заработка: " + (i + 1) + ": " + item);
    });
  } */
}
