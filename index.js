function takeANumber (line,person) {
  var waitingposition = line.length + 1
  line.push(person)
  return "Welcome, "+ person + ". You are number " + waitingposition + " in line."
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    var first = katzDeliLine.shift()
    return "Currently serving " + first
  }
}

function currentLine (katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    var string = "The line is currently: "
    var counter 
    for ( counter = 0 ; counter < katzDeliLine.length ; counter ++){
      string = string + ", " + counter + ". " + katzDeliLine.shift()
    }
     
    return "Currently serving " + first
  }
}