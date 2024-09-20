// document
//   .getElementById("btn-cash-out")
//   .addEventListener("click", function (event) {
//     event.preventDefault();
//     console.log("Cash btn clicked");

//     const cashOut = document.getElementById("input-cash-out").value;
//     const cashoutNumber = parseFloat(cashOut);
//     const pinNumber = document.getElementById("inupt-cash-out-pin").value;
//     console.log(cashOut, pinNumber);

//     // wrong way to varify pin
//     if (pinNumber === "3265") {
//       const balance = document.getElementById("account-balance").innerText;
//       const balanceNumber = parseFloat(balance);

//       // reduce the balance
//       const newBalance = balanceNumber - cashoutNumber;

//       //   update the ui
//       document.getElementById("account-balance").innerText = newBalance;
//     } else {
//       alert("failed to cash out. please try again");
//     }
//   });

document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const cashOut = document.getElementById("input-cash-out").value;
    const cashoutNumber = parseFloat(cashOut);
    const pinNumber = document.getElementById("inupt-cash-out-pin").value;
    console.log(cashOut, pinNumber);

    if (pinNumber === "3265") {
      console.log("cash out succes");

      const balance = document.getElementById("account-balance").innerText;
      const balanceNumber = parseFloat(balance);

      const newBalance = balanceNumber - cashoutNumber;

      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("failed to cash out");
    }
  });
