const getData = new Promise(
  
  (resolve, reject) => {
    setTimeout(() => {
      resolve('Data has been resolved');
    }, 3000);
  }
  
  );
  
  getData.then(data => {
    console.log(data);
  }).catch(error => {
    console.error(error);
  });


  myPromise
  .then(firstResultCallback)
  .then(secondResultCallback)
  .then(thirdResultCallback)
  .catch(errorHandlerFn)

  

