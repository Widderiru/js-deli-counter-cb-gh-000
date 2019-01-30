function takeANumber (line,person) {
  var waitingposition = line.length + 1
  line.push(person)
  return "Welcome, "+ person + ". You are number " + waitingposition + " in line."
}
