//UI logic
$(document).ready(function() {
  $("#robogersForm").submit(function(event) {
    event.preventDefault();
    const userInput = $("#userInput").val();
    // console.log(userInput);


//Business logic
  const calNums = userInput => {
    const array = [];
    for(let i = 0; i <= userInput; i++) {
      arrInput = i;
      if(arrInput.toString().includes("3")) {
        array.push("won't you be my neighbor");
      } else if(arrInput.toString().includes("2")) {
        array.push("boop");
      }
    }
    console.log(array);
    
  }

    const userResults = calNums(userInut);
    console.log(userResults);
  });
});