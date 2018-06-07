


  var functOnes = function(onesInput) {
    if (onesInput === "0") {
      return ("");
    }
    else if (onesInput === "1") {
      return ("I");
    }
    else if (onesInput === "2") {
      return ("II");
    }
    else if (onesInput === "3") {
      return ("III");
    }
    else if(onesInput === "4") {
      return ("IV");
    }
    else if(onesInput === "5") {
      return ("V");
    }
    else if(onesInput === "6") {
      return ("VI");
    }
    else if(onesInput === "7") {
      return ("VII");
    }
    else if(onesInput === "8") {
      return ("VIII");
    }
    else if(onesInput === "9") {
      return ("IX");
    }
}


  var functTens = function(tensInput) {
    if (tensInput === undefined) {
      return ("");
    } else if (tensInput === "0") {
      return ("");
    } else if (tensInput === "1") {
      return ("X");
    }
    else if (tensInput === "2") {
      return ("XX");
    }
    else if (tensInput === "3") {
      return ("XXX");
    }
    else if(tensInput === "4") {
      return ("XL");
    }
    else if(tensInput === "5") {
      return ("L");
    }
    else if(tensInput === "6") {
      return ("LX");
    }
    else if(tensInput === "7") {
      return ("LXX");
    }
    else if(tensInput === "8") {
      return ("LXXX");
    }
    else if(tensInput === "9") {
      return ("XC");
    }

};

  var functHundreds = function(hundredsInput) {
    if (hundredsInput === undefined) {
      return ("");
    }
    if (hundredsInput === "0") {
      return ("");
    }
    else if (hundredsInput === "1") {
      return ("C");
    }
    else if (hundredsInput === "2") {
      return ("CC");
    }
    else if (hundredsInput === "3") {
      return ("CCC");
    }
    else if(hundredsInput === "4") {
      return ("CD");
    }
    else if(hundredsInput === "5") {
      return ("D");
    }
    else if(hundredsInput === "6") {
      return ("DC");
    }
    else if(hundredsInput === "7") {
      return ("DCC");
    }
    else if(hundredsInput === "8") {
      return ("DCCC");
    }
    else if(hundredsInput === "9") {
      return ("CM");
    }

};

  var functThousands = function(thousandsInput) {
    if (thousandsInput === undefined) {
      return ("");
    }
    if (thousandsInput === "0") {
      return ("");
    }
    else if (thousandsInput === "1") {
      return ("M");
    }
    else if (thousandsInput === "2") {
      return ("MM");
    }
    else if (thousandsInput === "3") {
      return ("MMM");
    }
    else {
      alert("Please enter a number below 3,999");
    }

};







$(document).ready(function(){

  $("#userInput").submit(function(event) {
    event.preventDefault();
    var arabicNumeral = $("#number").val();
    var splitNumber = arabicNumeral.split("");
    var backendSplitNumber = splitNumber
    var onesInput = splitNumber.pop();
    var tensInput = splitNumber.pop();
    var hundredsInput = splitNumber.pop();
    var thousandsInput = splitNumber.pop();

    var ones = functOnes(onesInput);
    var tens = functTens(tensInput);
    var hundreds = functHundreds(hundredsInput);
    var thousands = functThousands(thousandsInput);

    var output = (thousands + hundreds + tens + ones)

    alert(output);
    // functTens();
    // functHundreds();
    // functThousands();
    // alert(functOnes);
    });


});

// var functFour
// var functFivetoEight
// var functNine
