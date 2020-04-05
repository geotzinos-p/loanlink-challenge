import { TestBed } from '@angular/core/testing';
import { ThermostatsService } from './thermostat.service';
import { CoreModule } from '@core/core.module';
import { of } from 'rxjs';
import { IThermostatDto } from './thermostat.interface';
import { httpInterceptProviders } from '../interceptors';

describe('ThermostatsService', () => {
  let service: ThermostatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule],
      providers: [httpInterceptProviders]
    });
    service = TestBed.inject(ThermostatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should request thermostats', () => {
  //   const getThermostats: IThermostatDto[] = [{
  //     "id": "98969442",
  //     "title": "90 m² Dach neu eindecken, Material benötigt",
  //     "zip_code": "10115",
  //     "city": "Berlin",
  //     "thumbnail": "//placekitten.com/150/150",
  //     "attachments": [
  //       "//placekitten.com/300/200",
  //       "//placekitten.com/200/400",
  //       "//placekitten.com/250/250"
  //     ],
  //     "counter": {
  //       "messages_total": 4,
  //       "messages_unread": 1
  //     },
  //     "is_awarded": false,
  //     "categories": [
  //       {
  //         "id": "41"
  //       },
  //       {
  //         "id": "58"
  //       }
  //     ],
  //     "state": "active",
  //     "description": "Eum accusata erroribus ei, te usu homero nostrud. Sed te tractatos dissentiet, id saperet luptatum forensibus est. His idque tibique periculis ut, quis principes consulatu ad per. Impedit periculis voluptaria mel eu, periculis intellegat incorrupte his an, ex vis adhuc saepe habemus.\r\n\r\n\r\nEi vel exerci eripuit apeirian. Mei ei partiendo consetetur honestatis. Eam et percipit argumentum. Indoctum sapientem nec ut, ea vel wisi equidem. Pro meliore elaboraret no. Habemus contentiones ne vix, simul audire pro at, ludus vidisse ei mei. Eum alia concludaturque cu, nam veri utinam ea. No cetero commune placerat nam.",
  //     "end_date": "2018-10-31T14:14:32+01:00",
  //     "created_at": "2018-10-01T14:14:32+02:00"
  //   }]
  //   spyOn(service.http, 'get').and.returnValue(
  //     of(getThermostats)
  //   );

  //   service.getThermostats();

  //   expect(service.http.get).toHaveBeenCalledWith(service.thermostatsUrl);
  // });
});
