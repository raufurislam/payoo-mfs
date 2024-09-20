/**
 * 1. Add event listener to the add money btn (form submit)
 * make sure to preventDefault() so that page doesn't reloads
 *
 * 2. get the money user wants to add
 * also, get the pin number provided
 *
 * 3. verify the pin number. for, wrong pin number ==> failed to add
 * for right pin number allowed to add the number to the account balance
 *
 * 4. get the current balance
 *
 * 5.add money to be added with the current balance
 *
 * 6. display/update the balance in the DOM/UI
 *
 */

document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("added the event handler");

    // get money and the pin number
    const addMoney = document.getElementById("input-add-money").value;
    const addMoneyNumber = parseFloat(addMoney);
    const pinNumber = document.getElementById("inupt-pin-number").value;
    // console.log(addMoney, pinNumber);

    if (pinNumber === "3265") {
      const balance = document.getElementById("account-balance").innerText;
      // console.log(balance);
      const balanceNumber = parseFloat(balance);
      // new balance
      const newBalance = balanceNumber + addMoneyNumber;

      // update the dom with updated balance
      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("Failed to add money. Please try again later");
    }
  });
