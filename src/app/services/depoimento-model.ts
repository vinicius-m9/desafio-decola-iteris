export class DepoimentoModel {
  name: string;
  age: number;
  text: string;

  constructor (name: string = '', age: number = 0, text: string = '') {
    this.name = name;
    this.age = age;
    this.text = text;
  }
}
