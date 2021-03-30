export class Todo {
  name: string;
  done: boolean;

  constructor(pName: string = '', pDone: boolean = false) {
    this.name = pName;
    this.done = pDone;
  }
}
