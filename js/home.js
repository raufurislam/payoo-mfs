// console.log("Home added");
/***
 * step 1: add event handler
 * prevent page reload after form submit
 *
 * step 2: get add money to be added to the account balance
 */

// add money btn inside the form
// document
//   .getElementById("btn-add-money")
//   .addEventListener("click", function (event) {
//     //   prevent page reload after page submit
//     event.preventDefault();
//     // console.log("money and button click");

//     // step 2: get money added to the account
//     const addMoneyInput = document.getElementById("input-addd-money").value;
//     console.log(addMoneyInput);

//     // get the pin number provided
//     const pinNumberInput = document.getElementById("inupt-pin-number").value;
//     console.log(pinNumberInput);
//     // step 3: verify pin Number (wrong way to validate the pin number)
//     if (pinNumberInput === "3265") {
//       console.log("adding money to your account");
//       // step 4: get the current balance
//       const balance = document.getElementById("account-balance").innerText;
//       console.log(typeof balance);

//       // step 5: add addMoneyInput with balance
//       const addMoneyNumber = parseFloat(addMoneyInput);
//       const balanceNumber = parseFloat(balance);
//       const newBalance = addMoneyNumber + balanceNumber;
//       console.log(newBalance);
//       // Step 6: update the balance in the ui/dom
//       document.getElementById("account-balance").innerText = newBalance;
//     } else {
//       alert("failed to add money! Please try again.");
//     }
//   });

// ----------------------------------------------------
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addMoneyInput = document.getElementById("input-addd-money").value;
    console.log(addMoneyInput);
    const pinNumberInput = document.getElementById("inupt-pin-number").value;
    console.log(pinNumberInput);

    if (pinNumberInput === "3265") {
      console.log("adding money to your account");
      const balance = document.getElementById("account-balance").innerText;

      const addMoneyNumber = parseFloat(addMoneyInput);
      const balanceNumber = parseFloat(balance);
      const newBalance = addMoneyNumber + balanceNumber;
      console.log(newBalance);

      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("failed to add money! Please try again.");
    }
  });
