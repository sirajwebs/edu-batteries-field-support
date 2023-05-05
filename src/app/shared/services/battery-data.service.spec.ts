import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { BatteryDataService } from './battery-data.service';

describe('BatteryDataService', () => {
  let service: BatteryDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(BatteryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
