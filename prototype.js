function validateAndCalculate(event) {
    event.preventDefault()
    const meternum = document.getElementById("meternum").value;
    const prevread = parseFloat(document.getElementById("prevread").value);
    const currread = parseFloat(document.getElementById("currread").value);
    const cost =  parseFloat(document.getElementById("costkwh").value);

    let meternumfield = document.getElementById("meternum");
    let prevreadfield = document.getElementById("prevread");
    let currreadfield = document.getElementById("currread");
    let costfield = document.getElementById("costkwh");

    meternumfield.style.border = "";
    prevreadfield.style.border = "";
    currreadfield.style.border = "";
    costfield.style.border = "";
    
    const meterRegex = /^[A-Za-z]{4}[0-9]{4}$/; //pattern of the meter number
    

    //check if meternum does not follow the patter 4 letters and 4 numbers
    if (!meterRegex.test(meternum) || meternum.length > 8) {
        alert("Please input a valid meter number. Follow the specified format for the meternum: 4 Letters + 4 Numbers; eg. abcd1234");
        meternumfield.style.border = "2px solid red";
        return;
    }

    //check if previous read value is valid; must not be empty, not negative, 5 digits, must be less than current reading, 
    if (prevread == "" || prevread < 0 || prevread.length > 5 || prevread > currread || isNaN(prevread)) {
        alert("Please input a valid numerical value for the previous reading; must not be less than 0; must be less than current reading; 5 digits only");
        prevreadfield.style.border = "2px solid red";
        return;
    }

    //check if current reading value is valid
    if (currread == "" || currread < 0 || currread.length > 5 || isNaN(currread)) {
        alert("Please input a valid numerical value for the current reading; must not be less than 0; must be less than current reading; 5 digits only");
        currreadfield.style.border = "2px solid red";
        return;
    }

    //check if cost value is valid
    if (cost == "" || cost <= 0 || isNaN(cost)) {
        alert("Please input a valid numerical value for the cost; must not be 0 or negative");
        costfield.style.border = "2px solid red";
        return;
    }

    //calculations
    var monthlyconsumpt = currread-prevread;
    var totalcost = cost*parseFloat(monthlyconsumpt);

    //display the answers
    document.getElementById("monthlycons").value = monthlyconsumpt + " kWh";  
    document.getElementById("totalcost").value = totalcost.toFixed(2) + " PHP";  
    document.getElementById("calculate").disabled = true; //user has to clear first before calculating again

}

//function to clear input fields
function clearfields(event) {
    document.getElementById("calculate").disabled = false; //allow user to calculate again

    let meternumfield = document.getElementById("meternum");
    meternumfield.style.border = "";
    meternumfield.value = "";

    let prevreadfield = document.getElementById("prevread");
    prevreadfield.style.border = "";
    prevreadfield.value = "";

    let currreadfield = document.getElementById("currread");
    currreadfield.style.border = "";
    currreadfield.value = "";

    let costfield = document.getElementById("costkwh");
    costfield.style.border = "";
    costfield.value = "";

    let monthlyfield = document.getElementById("monthlycons");
    monthlyfield.style.border = "";
    monthlyfield.value = "";

    let totalcostfield = document.getElementById("totalcost");
    totalcostfield.style.border = "";
    totalcostfield.value = "";
    
}