import { Component } from '@angular/core';
import { LogicMachineService } from 'src/app/services/logic-machine.service';

@Component({
  selector: 'app-card-machine',
  templateUrl: './card-machine.component.html',
  styleUrls: ['./card-machine.component.css']
})
export class CardMachineComponent {

  constructor(public LogicMachine:LogicMachineService){

  }

}
