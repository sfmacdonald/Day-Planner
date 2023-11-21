$(document).ready(function() {

// Select hours via jQuery
var select = $("#hours");

// Function to add hours to the dropdown using jQuery
function addHours() {
  for (var i = 0; i < 24; i++) {
    var hour = (i < 10) ? "0" + i : i;
    var ampm = (i < 12) ? "AM" : "PM";
    var displayHour = (i % 12 === 0) ? "12:00 " + ampm : (i % 12) + ":00 " + ampm;
    select.append($("<option>").val(hour).text(displayHour));
  }
}

// Call the function to add hours - commented out for future state
// addHours();

// Get current date using Day.js
var now = dayjs();
console.log('Now:', now);

// Function to display formatted date using jQuery
function displayFormattedDate() {
  // Format the date
  var formattedDate = now.format("MM-DD-YYYY HH:mm:ss");
  console.log("Formatted Date:", formattedDate);

  // Update the content of the span element with the formatted date using jQuery
  $("#formattedDateValue").text(formattedDate);
}

// Call the function to display formatted date
displayFormattedDate();
});


$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //

 // Function to apply the past, present, or future class
 function updateHourlyClasses() {
  // Get the current hour using Day.js
  const currentHour = dayjs().hour();

  // Loop through each time block
  const timeBlocks = document.querySelectorAll('.time-block');
  timeBlocks.forEach((timeBlock) => {
    // Extract the hour from the time block id
    const blockHour = parseInt(timeBlock.id.split('-')[1]);

    // Remove existing classes
    timeBlock.classList.remove('past', 'present', 'future');

    // Add the appropriate class based on the comparison
    if (blockHour < currentHour) {
      timeBlock.classList.add('past');
    } else if (blockHour === currentHour) {
      timeBlock.classList.add('present');
    } else {
      timeBlock.classList.add('future');
    }
  });
}

// Call the function on page load
updateHourlyClasses();

// Function to update time block classes based on the current hour
function updateBlocks() {
  var currentHour = new Date().getHours();

  // Loop through each time block
  document.querySelectorAll('.time-block').forEach(function (block) {
      var blockHour = parseInt(timeBlock.id.split('-')[1]);

      // Add the appropriate class based on the time
      if (blockHour < currentHour) {
          block.classList.add('past');
      } else if (blockHour === currentHour) {
          block.classList.add('present');
      } else {
          block.classList.add('future');
      }
  });
}

// Call the function when the page loads
window.addEventListener('load', updateBlocks);




    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
  // Function to retrieve user input from local storage and set textarea values
function retrieveAndSetUserInput() {
  $('.time-block').each(function () {
      var timeBlockId = $(this).attr('id');
      var userInput = localStorage.getItem(timeBlockId);

      // Set the textarea value with the retrieved user input
      $(this).find('.description').val(userInput);
  });
}    


  });