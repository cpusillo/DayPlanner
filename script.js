$(document).ready(function () {
    // Declare our time and date variables using moment.js
    var todaysDate = moment().format('MMM Do YYYY');
    var timeNow = moment().format('hh:mm a');
    var timeCompare = moment().format("H");
    var times = [9, 10, 11, 12, 13,14,15,16,17];

    // Store our necessary DOM elements to variables.
    var currentDayEl = $("#currentDay");
    var timeBlocks = $(".timeBlocks");
    var saveBtn = $(".saveBtn");    
    var timeLiEl = $("li");  
    var inputArea = $(".inputArea");
    
    for(var i = 0; i < timeLiEl.length; i++){
        if(timeCompare == times[i]){
            inputArea[i].style.backgroundColor = "#ff7675";
        }
        if(timeCompare < times[i]){
            inputArea[i].style.backgroundColor = "#55efc4";
        }
    };
    
    // Place our current date in the jumbotron in the UI.
    currentDayEl.text(todaysDate);

    // Define what clicking the saveBtn does.
    $("ul").on("click", ".saveBtn", function (event) {
        event.preventDefault();
        var inputBox = ($(this).prev().val());
        console.log(inputBox);
    });

});