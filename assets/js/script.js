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

  // Add click event listener to the save button
  $('.saveBtn').on('click', function() {
    // Get the "hour-x" id of the time-block
    var timeBlockId = $(this).closest('.time-block').attr('id');

    // Use the id as the key when saving the description in local storage
    var description = $(this).siblings('.description').val();
    localStorage.setItem(timeBlockId, description);

  });
});

// Call the function to add dropdown with hours to change start time - commented out for future state
// addHours();

// Get current date using Day.js
var now = dayjs();
console.log('Now:', now);

// Function to display formatted date using jQuery
function displayFormattedDate() {
  // Format the date
  var formattedDate = now.format("MM-DD-YYYY HH:mm:ss");
  console.log("Formatted Date:", formattedDate);

  // Update content of the span element with formatted date using jQuery
  $("#formattedDateValue").text(formattedDate);
}

// Call the function to display formatted date
displayFormattedDate();

  // Function to retrieve user input from local storage and set textarea values
  function retrieveAndSetUserInput() {
    $('.time-block').each(function () {
        var timeBlockId = $(this).attr('id');
        var userInput = localStorage.getItem(timeBlockId);
  
        // Display retrieved user input in textarea
        $(this).find('.description').val(userInput);
    });
  }    
  
  retrieveAndSetUserInput();

 // Function to apply the past, present, or future class
 function updateHourlyClasses() {
  // Get the current hour using Day.js
  var currentHour = dayjs().hour();

  // Loop through each time block
  var timeBlocks = document.querySelectorAll('.time-block');
  timeBlocks.forEach((timeBlock) => {
    // Extract the hour from the time block id
    var blockHour = parseInt(timeBlock.id.split('-')[1]);

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
  var currentHour = dayjs().hour();

  // Loop through each time block
  document.querySelectorAll('.time-block').forEach(function (block) {
      var blockHour = parseInt(block.id.split('-')[1]);

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
