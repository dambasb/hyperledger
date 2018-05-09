import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.acme.sample{
   export class Sensor extends Asset {
      teamID: string;
      teamName: string;
      sensorTemp: number;
      thermostatTemp: number;
      recommendation: string;
   }
   export class SetSensorTemp extends Transaction {
      gauge: Sensor;
      newSensorValue: number;
   }
   export class ChangeThermostatTemp extends Transaction {
      thermostat: Sensor;
      newThermostatValue: number;
   }
   export class CompareWeather extends Transaction {
      recommend: Sensor;
      outsideTemp: number;
      feelsLike: number;
   }
// }
