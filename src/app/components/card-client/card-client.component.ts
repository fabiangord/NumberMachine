import { Component } from '@angular/core';
import { LogicMachineService } from 'src/app/services/logic-machine.service';

@Component({
  selector: 'app-card-client',
  templateUrl: './card-client.component.html',
  styleUrls: ['./card-client.component.css']
})
export class CardClientComponent {

  public numberClient!:number

  constructor(public LogicMachine:LogicMachineService){

  }

  play(){
    this.LogicMachine.play(this.numberClient)
  }

}