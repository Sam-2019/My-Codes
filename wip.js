function myFunction() { 
  document.getElementById("demo").innerHTML = "Hello JavaScript!";
}


document.getElementById("innerhaste").innerHTML = "Hello Script!";

function rateShow(){
var rate = [0.065, 0.065, 0.060041, 0.062861, 0.0570, 0.0570, 0.045539, 0.045936, 0.046222, 0.046435];

var period = [3, 6, 12, 18, 24, 30, 36, 42, 48, 54];

var selectedperiod = document.getElementById("tenure1");

var rate_display = document.getElementById("rateoutput");
    
let showperiod = parseFloat(selectedperiod.value);
    switch(showperiod) {
      case period[0]:
            rate_display.innerHTML = (rate[0]);
            break;
       case period[1]:
            rate_display.innerHTML = (rate[1])
            break;
        case period[2]:
            rate_display.innerHTML = (rate[2])
            break;
        case period[3]:
            rate_display.innerHTML = (rate[3])
            break;
        case period[4]:
            rate_display.innerHTML = (rate[4])
            break;
        case period[5]:
            rate_display.innerHTML = (rate[5])
            break;
        case period[6]:
            rate_display.innerHTML = (rate[6])
            break;
        case period[7]:
            rate_display.innerHTML = (rate[7])
            break;
        case period[8]:
            rate_display.innerHTML = (rate[8])
            break;
        case period[9]:
            rate_display.innerHTML = (rate[9])
            break;
        default:
            rate_display.innerHTML = (rate[10] );}
}

function reset() {
document.getElementById("tenure1").value = '';
    
document.getElementById("rateoutput").innerHTML = 0;
}

function calculate(){
var loanAmount = document.getElementById("amount");
var selectedperiod = document.getElementById("tenure1");
var rate_display = document.getElementById("rateoutput");
    
var monthlyPayment = document.getElementById("monthlyDeduc");
    
var amount = parseFloat(loanAmount.value);
var duration = parseFloat(selectedperiod.value);
var rate = 0.065;

var pmt1 = (1/rate);
var pmt2 = (1/(rate*Math.pow((1+rate),duration)));

var PMT = ((amount)/(pmt1 - pmt2));
    
monthlyPayment.innerHTML = (PMT).toFixed(2);
}



       