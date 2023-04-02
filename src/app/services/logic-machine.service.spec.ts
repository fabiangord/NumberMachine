import { TestBed } from '@angular/core/testing';

import { LogicMachineService } from './logic-machine.service';

describe('LogicMachineService', () => {
  let service: LogicMachineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogicMachineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
