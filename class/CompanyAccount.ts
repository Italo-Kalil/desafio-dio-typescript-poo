import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (loanValue:number): void => {
    if (this.getStatus()) {
      this.deposit(loanValue)
      console.log('Voce pegou um empréstimo')
    } else {
      console.log('A empresa não possui um status positivo para empretimos')
    }
  }
}
