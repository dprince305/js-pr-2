let units = 300;

let amt, totalAmt, surCharge;

if(units<=50){
  amt  = units*1;
}
else if(units <=150){
  amt = units * 2;
}
else if(units <=250){
  per = (3 / 100) * 20;
    amt = (units * 3) + per;
}
else if(units>250){
  per = (4 / 100) * 20;
  amt = (units * 4) + per;
}

surCharge = amt * 0.20;
totalAmt = amt + surCharge;

document.getElementById('user').innerHTML = "User :-Prince Dholariya";
document.querySelector('.tbill').innerHTML = "Total units : " + units;
document.querySelector('.bill').innerHTML = "Bill : " + totalAmt;