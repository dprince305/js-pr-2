let month = 8;

let monthPrint = document.getElementById("month").innerHTML = month;

let message = document.getElementById("msg");
switch (month) {
    case 11:
    case 12:
    case 1:
    case 2:
        message.innerHTML = ("Winter")
        break;
    case 3:
    case 4:
    case 5:
    case 6:
        message.innerHTML = ("Summer")
        break;
    case 7:
    case 8:
    case 9:
    case 10:
        message.innerHTML = ("Monsoon")
        break;
    default:
        message.innerHTML = ("Invalid Month")
        break;
}