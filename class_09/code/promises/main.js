// // Creating Promises

// var myPromise = new Promise(function(resolve, reject) {
//   resolve("This task has finished running");
// });

// myPromise.then(function() {
//   // console.log("The promise was fulfilled");
// });

// function createPromise() {
//   return new Promise(function(resolve, reject) {
//     resolve("The promise was fulfilled");
//   });
// }

// createPromise().then(function(successMessage) {
//   console.log(successMessage);
// });

// function delay(timeInMS) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve("I waited some amount of time for you");
//     }, timeInMS);
//   });
// }

// delay(1000).then(function(data) {
//   console.log(data);
// });

function makeAPIRequest() {
  return new Promise(function(resolve, reject) {
    window.setTimeout(function() {
      // resolve("We got the data back for you");
      reject("Something went wrong");
      // Handle an error - Say "Something went wrong"
    }, Math.random() * 3000);
  });
}

// makeAPIRequest()
//   .then(function(message) {
//     console.log(message);
//   })
//   .catch(function(errorMsg) {
//     console.log(errorMsg);
//   });

// function giveEmployeePhone() {
//   return new Promise(function(resolve, reject) {
//     var generous = true;
//     if (generous === true) {
//       resolve("Here is your phone");
//     } else {
//       reject("Sorry, we didn't get you a phone");
//     }
//   });
// }

// giveEmployeePhone()
//   .then(function(message) {
//     console.log(message);
//   })
//   .catch(function(errorMessage) {
//     console.log(errorMessage);
//   });

function getAllUsers() {
  var brothers = ["Groucho", "Harpo", "Chico"]; // Come from an API

  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (Math.random() <= 0.5) {
        resolve(brothers);
      } else {
        reject("Sorry, the API request failed");
      }
    }, 1000);
  });
}

function displayUsers(users) {
  document.body.innerHTML = users;
}

function handleError(error) {
  document.body.innerHTML = error;
}

document.body.innerHTML = "Loading...";

// getAllUsers()
//   .then(displayUsers)
//   .catch(handleError);

navigator.getBattery().then(function(data) {
  var message = `Your battery is at ${data.level * 100}%`;
  console.log(message);
});
