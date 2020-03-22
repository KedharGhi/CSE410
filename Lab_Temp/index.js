function ConvertCtoF(degreesCelsius) {
	var result = degreesCelsius * 9/5 + 32;
	return result;
    // Your code here
}

function ConvertFtoC(degreesFahrenheit) {
	var far = (degreesFahrenheit - 32) * 5/9;
	return far;
    // Your code here
}

function bodyLoaded() {

	// This function controls the click event of convert button.
	
	var empty = "";
	document.getElementById("ConvertButton").addEventListener("click", function () {
	
	var fahr = document.getElementById("FInput").value;
	var cel= document.getElementById("CInput").value;

	if (cel == empty && fahr == empty) {
		document.getElementById("ErrDiv").innerHTML = "Field cannot be empty.";
		document.getElementById("ErrDiv").style = "color:orange";
	}

	else {
		

		if (cel == empty) { 
			if (isNaN(fahr)) {
				document.getElementById("ErrDiv").innerHTML = fahr + " is not a number";
				document.getElementById("ErrDiv").style = "color:red";
		}
			else {

				document.getElementById("ErrDiv").innerHTML = empty;
				document.getElementById("CInput").value = ConvertFtoC(parseFloat(fahr));

			}

		}

		else {
			if (isNaN(cel)) {
				document.getElementById("ErrDiv").innerHTML = cel + " is not a number";
				document.getElementById("ErrDiv").style = "color:red";
			}

		else {

				fahr = ConvertCtoF(parseFloat(cel));
				document.getElementById("ErrDiv").innerHTML = empty;
				document.getElementById("FInput").value = fahr;

			}

		}
		if (fahr < 32) {
			document.getElementById("WeatherImage").src = "cold.gif";
		}

		else if (fahr >= 32 && fahr <= 50) {
			document.getElementById("WeatherImage").src = "cool.gif";
		}

		else if (fahr > 50) {
			document.getElementById("WeatherImage").src = "warm.gif";

		}

	}

});
	document.getElementById("FInput").addEventListener("input", clearCel);
function clearCel() {
	document.getElementById("CInput").value = empty;
}

document.getElementById("CInput").addEventListener("input", clearFahr);

function clearFahr() {
	document.getElementById("FInput").value = empty;
}

	// Your code here
}
window.onload = function(){
	document.body.addEventListener('onload', bodyLoaded());
}


