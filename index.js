function scuberGreetingForFeet(feet) {
  // Write your c[ode here!

  let res = "";

  if (feet <= 400) {
    return "This one is on me!";
  } else if (feet > 2000 && feet < 2500) {
    res = "I will gladly take your thirty bucks.";
    return res
  } else if (feet > 2500) {
    res = "No can do.";

    return res;
  }
}

function ternaryCheckCity(city) {
  // Write your code here!
  var res = (city == "NYC" )? "Ok, sounds good." : "No go.";

  return res;
}

function switchOnCharmFromTip(tip) {
  // Write your code here!
  var res = "";
  switch(tip){
    case "generous":
      res = "Thank you so much.";
      break;

    case 'not as generous':
      res = "Thank you."
      break

      default:
        res = "Bye."    
      
  }
     return res;  

}

function addFive(someNumber) {
  //Everything I want my function to do I put inside these curly braces
  //In this example, let's say I want my function, addFive, to add 5 to
  //any number I pass in (someNumber), but only IF the number is greater
  //than zero:
  let result;
  if (someNumber > 0) {
    result = someNumber + 5;
  }
  //at the end, if I want my function to return something, I need to state it:
  return result;
}
