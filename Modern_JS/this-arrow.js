function Invoice(subTotal) {
    this.taxRate = 0.06;
    this.subTotal = subTotal;
  
    this.total = setInterval(() => {
      console.log((this.taxRate * this.subTotal) + this.subTotal);
      // console.log(this);
    }, 2000);
  }
  
  const inv = new Invoice(200);
  inv.total();




//Exercise:
function SavingCalc(paycheck) {
    this.percent = 0.30;
    this.paycheck = paycheck;
  
    this.deposit = function() {
      return (this.percent * this.paycheck);
    };
  }
  
  const piggyBank = new SavingCalc(2000);
  piggyBank.deposit();
  