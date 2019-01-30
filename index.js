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
    return "Currently servind " + first
  }
}
