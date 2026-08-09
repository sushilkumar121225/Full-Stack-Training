// callback hell to promise

const myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Task Completed Successfully");
    } else {
        reject("Task Failed");
    }
});

myPromise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });