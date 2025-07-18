import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SavingAccount } from './class/SavingAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Italo', 10)
console.log(PeopleAccount)
peopleAccount.getName()
peopleAccount.deposit(10)
peopleAccount.getBalance()
peopleAccount.getStatus()
peopleAccount.withdraw(10)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.getName()
companyAccount.deposit(15)
companyAccount.getBalance()
companyAccount.getStatus()
companyAccount.withdraw(10)
companyAccount.getLoan(5000)
console.log(companyAccount)

const savingAccount: SavingAccount =  new SavingAccount('balanco', 22)
savingAccount.getName()
savingAccount.deposit(15)
savingAccount.savingDeposit(15)
savingAccount.getBalance()
savingAccount.getStatus()
savingAccount.withdraw(10)
console.log(savingAccount)