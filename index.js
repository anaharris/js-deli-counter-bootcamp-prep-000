function takeANumber(katzDeliLine) {
  var numInLine = katzDeliLine.length + 1;
  var  message = "Welcome. You are number " + numInLine + " in line.";
  katzDeliLine.push(numInLine);
  return message;
}

function nowServing(katzDeliLine) {
  var customer = katzDeliLine[0];
  katzDeliLine.shift();
  if (katzDeliLine.length > 1) {
    return "Currently serving customer number " + customer + ".";  
  }
  else return "There is nobody waiting to be served!";
}

function currentLine(line) {
  var n = line.length;
  var array = [];
  if (n < 1) {
    return "The line is currently empty.";
  }
  else {
    return `There are ${n} customers in line.`;
  }
}