import { Equipment } from "./equipment";
import { EquipmentBuilder } from "./equipment-builder";

export class EquipmentDirector {
  constructor(private builder: EquipmentBuilder) {}

  constructSword(): Equipment {
    return this.builder
      .setName("Excalibur")
      .setType("Sword")
      .setDefense(100)
      .setMagic(5)
      .build();
  }

  constructShield(): Equipment {
    return this.builder
      .setName("Dragon Crest Shield")
      .setType("Shield")
      .setAttack(5)
      .setDefense(50)
      .setMagic(10)
      .build();
  }
}
