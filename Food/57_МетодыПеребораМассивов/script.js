"use strict";

 const names = ['ivan', 'masha', 'lox', 'petya']

 const newNames = names.filter((name) => {
   return name.length < 5;
 });

 console.log(newNames);