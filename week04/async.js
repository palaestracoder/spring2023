async function getDataWithAsync() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data has been resolved');
      }, 3000);
    });
  }
  
  (async () => {
    const data = await getDataWithAsync();
    console.log(data);
  })();


