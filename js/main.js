//Business logic
  const calNums = userInput => {
    const array = [];
    for(let i = 0; i <= userInput; i++) {
      arrInput = i;
      if(arrInput.toString().includes("3")) {
          array.push("won't you be my neighbor");
      } else if(arrInput.toString().includes("2")) {
          array.push("boop");
      } else if(arrInput.toString().includes("1")) {
          array.push("beep");
      } else {
        array.push(arrInput);
      }
    }
    //return array after looping
    return(array);
  }
  
$(function() { 
  $("input[name='userInput']").on('input', function(e) { 
      $(this).val($(this).val().replace(/[^0-9]/g, '')); 
  }); 
}); 

//UI logic
$(document).ready(function() {
  $("#robogersForm").submit(function(event) {
    event.preventDefault();
    const userInput = $("#userInput").val();
    const userResults = calNums(userInput);
    $("#results").text(userResults);
    $("#container-1").hide();
    $("#results").show();
  });
});