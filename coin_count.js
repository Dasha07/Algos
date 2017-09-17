function coinChange(num) {
   var result = {'quarter': 0, 'Dime':0, 'Nickel':0, 'Penny':0};
   menu = { 'quarter': 25, 'Dime':10, 'Nickel':5, 'Penny':1 };
   for (key in menu) {
       while (num >= menu[key]) {
           result[key] += 1
           num=num-menu[key]
       }
   }
   return result;
}

x = 99;

console.log(coinChange(x));
