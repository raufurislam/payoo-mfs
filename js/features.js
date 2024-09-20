document
  .getElementById("btn-show-cash-out")
  .addEventListener("click", function () {
    console.log("Show cashout btn click");

    // show cashout btn clicked
    document.getElementById("cash-out-form").classList.remove("hidden");

    // hide the add money form
    document.getElementById("add-money-form").classList.add("hidden");
  });

//   Show add money form hide the cashout form
document
  .getElementById("btn-show-add-money")
  .addEventListener("click", function () {
    console.log("add money btn");

    // show add money btn
    document.getElementById("add-money-form").classList.remove("hidden");

    document.getElementById("cash-out-form").classList.add("hidden");
  });
