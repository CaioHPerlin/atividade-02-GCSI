// Builder Design Pattern Example for an RPG Equipment System

import { EquipmentBuilder } from "./equipment-builder";
import { EquipmentDirector } from "./equipment-director";

const builder = new EquipmentBuilder();
const director = new EquipmentDirector(builder);

const sword = director.constructSword();
sword.displayStats();

const shield = director.constructShield();
shield.displayStats();
