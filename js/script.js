function submit(){

    var bill = document.getElementById('bill-total').value;
    

    var totalNumberOfPeople = document.getElementById('total-people').innerText;

    var finalCost = bill/totalNumberOfPeople;
    finalCost = finalCost.toFixed(2);

    document.getElementById('total-cost').innerHTML = "£" + finalCost;
}

function plus(){

    document.getElementById("total-people").innerHTML = parseInt(document.getElementById("total-people").innerHTML)+1;
}

function minus(){

    document.getElementById("total-people").innerHTML = parseInt(document.getElementById("total-people").innerHTML)-1;
}

function clearButton(){
    
    var reset = document.getElementById('clear-btn');

    var totalCost = document.getElementById('total-cost').innerHTML = "£0.00";

    var bill = document.getElementById('bill-total').value = '';
}
