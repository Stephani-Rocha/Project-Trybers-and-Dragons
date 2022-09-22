import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType: EnergyType;
  static instance = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.instance += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Mage.instance;
  }
}

export default Mage;
