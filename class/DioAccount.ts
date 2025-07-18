export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (depositValue:number): void => {
    if (this.validateStatus()) {
      this.balance = depositValue
      console.log('Voce depositou')
    }
  }

  withdraw = (withdrawValue:number): void => {
     if (this.validateStatus() && this.balance >withdrawValue) {
      this.balance = this.balance - withdrawValue
      console.log('Voce sacou')
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  getStatus = (): boolean => {
    return this.validateStatus()
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
