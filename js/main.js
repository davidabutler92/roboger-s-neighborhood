//UI logic
$(document).ready(function() {
  $("#robogersForm").submit(function(event) {
    event.preventDefault();
    const userInput = $("#userInput").val();
    console.log(userInput);


//Business logic
const numbers = userInput => {
  const array = [];
  for(let i = 0; i <= userInput; i++) {
    arrayInput = i
    if(arrayInput.toString().includes("3")) {
      array.push("won't yu be my neighbor?");
    }
  }
}
console.log(newNumbers);
  });
});