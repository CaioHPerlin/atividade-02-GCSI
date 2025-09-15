export class Equipment {
  constructor(
    public name: string,
    public type: string,
    public attack: number,
    public defense: number,
    public magic: number
  ) {}

  displayStats() {
    console.log(`Equipment: ${this.name}`);
    console.log(`Type: ${this.type}`);
    console.log(`Attack: ${this.attack}`);
    console.log(`Defense: ${this.defense}`);
    console.log(`Magic: ${this.magic}`);
  }
}
