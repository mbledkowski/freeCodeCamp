function checkCashRegister(price, cash, cid) {
  let status
  let change = []
  let moneyToWithdraw = cash - price
  let posibilities = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  }
  let cidProcessed = []
  let anyCashAfter = false

  // Fills up "cidProcessed"; 2d array - all possible units; 1st - the name of the unit to its value, 2nd - number of these units in drawer
  for (let i = 0; i < cid.length; i++){
    cidProcessed.push([posibilities[cid[i][0]], (cid[i][1] / posibilities[cid[i][0]]).toFixed()])
  }

  // Check how many of certain currency unit fits into moneyToWithdraw, substracts that value from moneyToWithdraw and put it into "change" array
  for (let i = 0; i < 9; i++){
    let valueToAdd = 0 // value to push into array
    while (cidProcessed[8-i][1] > 0){
      if (cidProcessed[8-i][0] <= moneyToWithdraw){
        valueToAdd = Number((valueToAdd + cidProcessed[8-i][0]).toFixed(2))
        moneyToWithdraw = (moneyToWithdraw - cidProcessed[8-i][0]).toFixed(2)
        cidProcessed[8-i][1]--
      } else {
        break
      }
    }
    anyCashAfter = (cidProcessed[8-i][1]) > 0 ? true : (anyCashAfter == true) ? true : false
    change.push([Object.keys(posibilities).find(key => posibilities[key] === cidProcessed[8-i][0]), valueToAdd])
  }

  status = (moneyToWithdraw > 0)? "INSUFFICIENT_FUNDS" : (anyCashAfter == 0)? "CLOSED" : "OPEN"
  

  let changeClone = change
  change = []

  if (status === "OPEN"){
    for (let i=0; i<9; i++){
      if(changeClone[i][1] > 0){
        change.push(changeClone[i])
      }
    }
  } else if (status === "CLOSED") {
    for (let i=0; i<9; i++){
        change.push(changeClone[8-i])
    }
  }

  return {"status": status, "change": change}
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
