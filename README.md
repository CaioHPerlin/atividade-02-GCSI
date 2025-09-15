# RPG Equipment System

This project demonstrates the implementation of the Builder Design Pattern for an RPG equipment system. The system allows the creation of various types of equipment, such as swords and shields, with customizable attributes like attack, defense and magic.

## Features

- **Builder Design Pattern**: Simplifies the creation of complex objects by separating the construction process from the representation.
- **Customizable Equipment**: Create equipment with specific attributes and slots.
- **Director Class**: Provides predefined configurations for common equipment types.

## Classes

### `Equipment`

Represents the equipment with the following attributes:

- `type`: The type of equipment (e.g., Sword, Shield).
- `attack`: Attack value of the equipment.
- `defense`: Defense value of the equipment.
- `magic`: Magic value of the equipment.

### `EquipmentBuilder`

A concrete builder class that provides methods to set attributes for the `Item` class.

### `EquipmentDirector`

A director class that uses the builder to create predefined equipment configurations, such as:

- `constructSword`
- `constructShield`

## Usage

1. Create an instance of `EquipmentBuilder`.
2. Use `EquipmentDirector` to construct predefined equipment or customize your own using the builder methods.
3. Call `displayStats` on the created equipment to view its attributes.

## Example

```typescript
const builder = new EquipmentBuilder();
const director = new EquipmentDirector(builder);

const sword = director.constructSword();
sword.displayStats();

const shield = director.constructShield();
shield.displayStats();
```

## Requirements

- Node.js
- TypeScript

## License

This project is licensed under the MIT License.
