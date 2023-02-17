let count = 0;

// this starts the timer
timer = setInterval(function() {
  count++;
  console.log(count);
}, 1000);

// this stops the timer after 5 seconds
setTimeout(function() {
  clearInterval(timer);
}, 5000);

