const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve("Do something"), 1000)
      : reject(new Error("Test Error"));
  });
};

const doSomething = async () => {
  const someting = await doSomethingAsync();
  console.log("doSomething -> someting", someting);
};

console.log("Before 1");
doSomething();
console.log("After 1");

const anotherFunction = async () => {
    try{
        const something = await doSomethingAsync()
        console.log("anotherFunction -> something", something)
    }catch(error){
        console.log(error)
    }
};

console.log("Before 2");
anotherFunction();
console.log("After 2");