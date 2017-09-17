function coin_change(num){
  dict={'quaters':25, 'dime':10, 'nickel':5, 'penny':1}
  var new_dict={'quaters':0, 'dime':0, 'nickel':0, 'penny':0}
  result['quaters']=num % dict['quaters']
  num-= menu ['quaters']*result['quaters']
  result['dime']=num % dict['dime']
  num-= menu ['dime']*result['dime']
  result['nickel']=num % dict['nickel']
  num-= menu ['nickel']*result['nickel']
  result['penny']=num % dict['penny']
  num-= menu ['penny']*result['penny']
  return result;
}
x=99;
console.log();
