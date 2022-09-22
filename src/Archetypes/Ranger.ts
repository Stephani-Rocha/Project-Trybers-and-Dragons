import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  static instance = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.instance += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Ranger.instance;
  }
}

export default Ranger;