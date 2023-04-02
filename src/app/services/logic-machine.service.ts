import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class LogicMachineService {

  public numberMachine!:number
  public numberRangeMax:number = 100 
  public numberRangeMin:number = 0
  public mostrar:number = 0

  constructor() { }

  play(numberCliente:number){
    this.numberMachine = Math.floor(Math.random() * (this.numberRangeMax - this.numberRangeMin) + this.numberRangeMin); 
    console.log(this.numberMachine)

    switch(true){
      case (this.numberMachine < numberCliente):
        this.numberRangeMin = this.numberMachine
        this.mostrar = 1
        console.log('el numero es mayor')
        break
        case (this.numberMachine > numberCliente):
          this.numberRangeMax = this.numberMachine
          this.mostrar = 2
          console.log('el numero es menor')
        break
        case (this.numberMachine === numberCliente):
          this.mostrar = 3
        console.log('Adivinaste')
        break
        default:
          console.log('no funciona')
    }

  }
}

