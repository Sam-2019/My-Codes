var ourDiv = document.getElementById("our-div");
var newParagraph = document.createElement("span");
var copy

var rate = [6.5, 6.5, 6.0041, 6.2861, 5.70, 5.70, 4.5539, 4.5936, 4.6222, 4.6435];

var period = [3, 6, 12, 18, 24, 30, 36, 42, 48, 54];

var loanAmount = document.getElementById("amount");
var selectedperiod = document.getElementById("tenure1");
var monthlyPayment = document.getElementById("monthlyDeduc");




function rateShow(){
let showperiod = parseFloat(selectedperiod.value);
    switch(showperiod) {
case period[0]:
     copy = document.createTextNode(rate[0]);
            break;
case period[1]:
             copy = document.createTextNode(rate[1])
            break;
case period[2]:
             copy = document.createTextNode(rate[2])
            break;
case period[3]:
             copy = document.createTextNode(rate[3])
            break;
case period[4]:
             copy = document.createTextNode(rate[4])
            break;
case period[5]:
             copy = document.createTextNode(rate[5])
            break;
case period[6]:
             copy = document.createTextNode(rate[6])
            break;
case period[7]:
             copy = document.createTextNode(rate[7])
            break;
case period[8]:
             copy = document.createTextNode(rate[8])
            break;
case period[9]:
             copy = document.createTextNode(rate[9])
            break;
        default:
             copy = document.createTextNode(rate[10]);}
    
 newParagraph.appendChild( copy );
ourDiv.appendChild( newParagraph );   
}

function calculate(){

let showperiod = parseFloat(selectedperiod.value);
    switch(showperiod) {
case period[0]:
            return copy = (rate[0]);
case period[1]:
            return copy = (rate[1]);
default:
            return copy = (rate[2]);
}
    

    
var amount = parseFloat(loanAmount.value);
var duration = parseFloat(selectedperiod.value);
var rate = parseFloat(copy.value) / 100;
    
    
    
var pmt1 = (1/rate);
var pmt2 = (1/(rate*Math.pow((1+rate),duration)));

var PMT = ((amount)/(pmt1 - pmt2));
    
monthlyPayment.innerHTML = (PMT).toFixed(2);
    
}

function reset() {
document.getElementById("tenure1").value = '';
document.getElementById("rateoutput").innerHTML = 0
document.getElementById("monthlyDeduc").innerHTML = '';
document.getElementById("our-div").innerHTML = '';
}