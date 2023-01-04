// Grab currrent day via day.js, format date and insert into top of the calendar
var dayOfWeek = dayjs().format('dddd');
$("#currentDay").text(dayOfWeek);
// Grab currrent full date via day.js, format date and insert into top of the calendar
var fullDate = dayjs().format('MM/DD/YYYY');
$("#currentFullDate").text(fullDate);

var currentHour = dayjs().hour();
console.log(currentHour);

var theHiddenHour = document.getElementById("h8").textContent;
console.log(theHiddenHour);

// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the content of a hidden element to the current current hour. 
$('.theHiddenHour').each(function(){
  var divHour = parseInt(this.textContent);
  var parentDiv = $(this).parent();
  console.log(parentDiv);
  if (divHour < currentHour) {
    console.log(this.textContent + "Has past");
    parentDiv.addClass("past");
  } else if (divHour == currentHour) {
    console.log(this.textContent + "Is Present");
    parentDiv.addClass("present");
  }else {
    console.log(this.textContent + "Is in the Future");
    parentDiv.addClass("future");
  }
})

var save8 = document.querySelector("#save8");
console.log(save8);

function saveEntry() {
var saveButtonValue = $(this).prev().val();
console.log("This is saveEntry text: " + saveButtonValue);
localStorage.setItem("save8", JSON.stringify(saveButtonValue));
}

function retrieveEntry8() {
  var retrievedData = JSON.parse(localStorage.getItem("save8"));
  console.log("This is my retrieved entry: " + retrievedData);
  document.querySelector("#text8").innerHTML = retrievedData;

}

retrieveEntry8();
save8.addEventListener("click", saveEntry);



// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  
  
});

