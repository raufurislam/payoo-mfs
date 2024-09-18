// console.log("Button clicking file added");
// document.getElementById('button-login').addEventListener('click', function(){})
// 1kothai --> kar jaigai add kora hobe --> ki add kora hobe --> add hoile ki hobe
// document
//   .getElementById("button-login")
//   .addEventListener("click", function () {});

// form submite reloading the page

// step 1: set event handler
document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    // step 2: prevent default behavior (prevent reloading browser)
    event.preventDefault(); // <---- bejal to beginers
    console.log("login btn clicked");
    // step 3: get the phone number
    const phoneNumber = document.getElementById("phone-number").value;
    console.log(phoneNumber);
  });
