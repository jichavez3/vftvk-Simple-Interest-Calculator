function compute()
{
    // p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    // Calculate interest
    var interest = principal * years * rate/100;
    
    // Get the final year in the future
    var year = new Date().getFullYear()+parseInt(years);

    // Display the results
    document.getElementById("result").innerHTML="If you deposit "+
    "<span class='highlight'>"+principal+"</span>"+
    ",\<br\>at an interest rate of "+
    "<span class='highlight'>"+rate+"</span>"+
    "%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"
    
}

// Function to read the range slider value and display it in the span
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
        