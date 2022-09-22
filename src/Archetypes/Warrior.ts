import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  static instance = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior.instance += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Warrior.instance;
  }
}

export default Warrior;