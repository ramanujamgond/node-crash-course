// Global object

console.log(global);

// setTimeOut interval

setTimeout(() => {
    console.log("Run after three seconds");
}, 3000);

setInterval(() => {
    console.log("Run in every 2000 seconds");
}, 2000)

console.log(__dirname);
console.log(__filename);