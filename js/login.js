// console.log("Button clicking file added");
// document.getElementById('button-login').addEventListener('click', function(){})
// 1kothai --> kar jaigai add kora hobe --> ki add kora hobe --> add hoile ki hobe
// document
//   .getElementById("button-login")
//   .addEventListener("click", function () {});

// form submite reloading the page

// step 1: set event handler
// document
//   .getElementById("button-login")
//   .addEventListener("click", function (event) {
//     // step 2: prevent default behavior (prevent reloading browser)
//     event.preventDefault(); // <---- bejal to beginers
//     // console.log("login btn clicked");
//     // step 3: get the phone number and pin number
//     const phoneNumber = document.getElementById("phone-number").value;
//     const pinNumber = document.getElementById("pin-number").value;
//     console.log(phoneNumber, pinNumber);
//     // step 4: validate phone and pin
//     // this is not the perfect way (temporary)
//     if (phoneNumber === "5" && pinNumber === "1234") {
//       console.log("You're logged in");
//     }
//     // allow user to use the website
//     else {
//       alert("Wrong phone number or pin");
//     }
//   });

document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // get phone number and pin
    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    // console.log(phoneNumber, pinNumber);

    // bad way to validate
    if (phoneNumber === "01812150681" && pinNumber === "3265") {
      console.log("You're logged in");
      window.location.href = "home.html";
    } else {
      alert("Wrong phone number or pin");
    }
  });
