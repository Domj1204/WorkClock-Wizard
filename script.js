$(function () {
    // Display Current Day
  $('#currentDay').text(dayjs().format('dddd, MMMM D'));

  // Added Click Listener for the Save Buttons
  $('.saveBtn').click(function () {
    // Get the ID of the parent time block
    var timeBlockId = $(this).parent().attr('id');
    // Get the event text from the sibling textarea
    var eventText = $(this).siblings('.description').val();
    // Save the event text to local storage with the time block ID
    localStorage.setItem(timeBlockId, eventText);
    console.log("Event saved for " + timeBlockId + ": " + eventText);
  });

  // Applied Past, Present, Future Classes
  var currentHour = dayjs().hour();
  $('.time-block').each(function () {
    // Get the hour number from the time block ID
    var blockHour = parseInt($(this).attr('id').replace('hour-', ''));
    // Add class based on whether the block hour is past, present, or future
    if (blockHour < currentHour) {
      $(this).addClass('past');
      console.log("Past time block: " + $(this).attr('id'));
    } else if (blockHour === currentHour) {
      $(this).addClass('present');
      console.log("Present time block: " + $(this).attr('id'));
    } else {
      $(this).addClass('future');
      console.log("Future time block: " + $(this).attr('id'));
    }
  });

  // Load Saved Events
  $('.time-block').each(function () {
    // Get the ID of the time block
    var timeBlockId = $(this).attr('id');
    // Retrieve the saved event text from local storage
    var savedEvent = localStorage.getItem(timeBlockId);
    // If there is a saved event, set it as the value of the textarea
    if (savedEvent) {
      $(this).find('.description').val(savedEvent);
      console.log("Loaded saved event for " + timeBlockId + ": " + savedEvent);
    }
  });
  });
  
  