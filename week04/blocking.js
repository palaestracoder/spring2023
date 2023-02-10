function blockingFunction(callback) {
    setTimeout(function() {
      console.log("Blocking function has completed");
      callback();
    }, 5000);
  }
  
  console.log("Start of program");
  blockingFunction(function() {
    console.log("Completion callback has been called");
  });
  console.log("End of program");

  