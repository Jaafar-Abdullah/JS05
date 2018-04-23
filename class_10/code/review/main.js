function getUsers() {
  var users = ["Bill", "Jill", "Gill"];
  return new Promise(function(resolve, reject) {
    // resolve(users);
    reject("Could not get the users");
  });
}

getUsers()
  .then(function(users) {
    console.log(users);
  })
  .catch(function(errorMessage) {
    console.warn(errorMessage);
  });
