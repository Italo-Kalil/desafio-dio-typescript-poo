import { DioAccount } from "./DioAccount";

export class SavingAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  savingDeposit = (depositValue: number): void => {
    const rending = 10;
    this.deposit(depositValue + rending);
  };
}
