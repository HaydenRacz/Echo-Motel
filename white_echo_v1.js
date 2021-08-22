var dailyPrice=0, room=0, checkedAddItems;
var totalCost=0;

function updateRoom() {
	room= this.dataset.name;
	dailyPrice= this.dataset.price;
	alert(room);
	alert(dailyPrice);
	window.scrollTo(0, document.getElementById("roomInformation").offsetTop - 40);
	document.getElementById("roomOutput").innerHTML=room;
	document.getElementById("priceOutput").innerHTML= "$"+dailyPrice;
	checkInputs(dailyPrice,room);
}

function updateBooking() {
	var addItems = document.getElementsByClassName('addCheck');
	//this collects all my additional items checkboxes and stores them in an object array
	checkedAddItems = []; //empty list to add the selected additional items to 
	var addCost = 0; //holds the cost of the checkboxes 
	for (var i = 0; i < addItems.length; i++) {
		if (addItems[i].checked) {
			checkedAddItems.push(' ' + addItems[i].value);
			alert(checkedAddItems);
			addCost += Number(addItems[i].dataset.price);
			alert(addCost);
		}
	}
	var checkInDate = document.getElementById("checkInDate").value;
	var numberNights = document.getElementById("numberNights").value;
	alert("number nights" + numberNights);
	alert("check in date" + checkInDate);
	totalCost = addCost + dailyPrice*numberNights;
	alert("total cost"+ totalCost);
	document.getElementById("dateOutput").innerHTML=checkInDate;
	document.getElementById("totalOutput").innerHTML="$"+totalCost;
	document.getElementById("nightsOutput").innerHTML=numberNights;
	document.getElementById("extrasOutput").innerHTML=checkedAddItems;
}

function checkInputs(numberNights){
	alert("in the checkinputs function");
	if (numberNights == "" || document.getElementById("numberNights").validity.rangeOverflow ||
	document.getElementById("numberNights").validity.rangeUnderflow){
		alert("You need to enter number correct number of nights");
		return; //stops the function from running = put an inline message output div
		
	}
	
//write if statements to check names aganist patterns
var firstName=document.getElementById("firstNameInput").value;
var lastName=document.getElementById("lastNameInput").value;
var cellphone=document.getElementById("cellphoneInput").value;
var email=document.getElementById("emailInput").value;
alert(firstName + lastName + cellphone + email);
//writes if statements here to check inpyuts are not null and patterns mismatch for excellence
}


//creating variables to check the date select is only a present date
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth();
var yyyy = 	today.getFullYear();
if (dd < 10) {
	dd = "0" + dd;
}
if (mm < 10) {
	mm = "0" + mm;
}
today = yyyy + '-' + mm + "-" + dd;
document.getElementById("checkInDate").setAttribute("min", today);

var allinputs = document.getElementsByClassName('addCheck');
for(var i = 0; i < allinputs.length; i++) {
	allinputs[i].addEventListener('input', updateBooking);
}

var roomInputs = document.getElementsByClassName('roomCard');
for (i = 0; i < roomInputs.length; i++) {
	roomInputs[i].addEventListener('click', updateRoom);
}



function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


