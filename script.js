    // Variables creation
    let isHide = false;
    let isDark = false;
    let buttonValue = "Show zero";
    // Default color to hide-show zero buttom
    isHide ? document.getElementById("hidzero").style.backgroundColor = "green":document.getElementById("hidzero").style.backgroundColor = "red";
    isDark ? document.getElementById("darkmode").style.backgroundColor = "green" : document.getElementById("darkmode").style.backgroundColor = "red";

    // Hide zero function
    function hideZero(){
        isHide ? document.getElementById("hidzero").style.backgroundColor = "red":document.getElementById("hidzero").style.backgroundColor = "green"; // Defining the color for the button
        isHide = !isHide;   // Changing the isHide variable to its opposite
        cmt(); // Restarting the math table
    }

    function darkMode(){
        isDark = !isDark;
        if(isDark){
            document.getElementById("darkmode").style.backgroundColor = "green"
            document.body.style.backgroundColor = "black"
            document.body.style.color = "white";
            document.getElementById("res").style.backgroundColor = "rgba(20, 20, 94, 0.5)";

        }
        else{   
            document.getElementById("darkmode").style.backgroundColor = "red";
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
            document.getElementById("res").style.backgroundColor = "lightyellow";
        }
    }

    function cmt(){
        let num = document.getElementById("num").value ? document.getElementById("num").value:0;  // Num variable recieves the value of the num input number, if its nothing then it's definite with a zero
        document.getElementById("result").innerHTML = "";
        for(isHide?i=1:i=0; i<=10; i++){ // Create the math table
            document.getElementById("result").innerHTML += `<p id='result'> ${num} * ${i} = ${num*i} </p>`;
        }
    }
    cmt();