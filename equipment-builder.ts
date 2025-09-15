import { Equipment } from "./equipment";

export class EquipmentBuilder {
  private name: string = "";
  private type: string = "";
  private attack: number = 0;
  private defense: number = 0;
  private magic: number = 0;

  setName(name: string): this {
    this.name = name;
    return this;
  }

  setType(type: string): this {
    this.type = type;
    return this;
  }

  setAttack(attack: number): this {
    this.attack = attack;
    return this;
  }

  setDefense(defense: number): this {
    this.defense = defense;
    return this;
  }

  setMagic(magic: number): this {
    this.magic = magic;
    return this;
  }

  build(): Equipment {
    return new Equipment(
      this.name,
      this.type,
      this.attack,
      this.defense,
      this.magic
    );
  }
}
