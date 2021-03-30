import { Component } from '@angular/core';
import {Todo} from './models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TodoApp';
  inputDefaultParams: Todo;
  itemsFiltered: Todo[];
  items: Todo[];
  tabOption = 1; // 1: All, 2: Active, 3: Completed
  isDark: boolean = true;
  constructor() {
    this.items = [
      new Todo('Complete online JavaScript course', true),
      new Todo('Complete Todo App on Frontend Mentor', true),
      new Todo('Job around the park 3x', false),
      new Todo('10 minutes meditation', false),
      new Todo('Read for 1 hour', false),
    ];
    this.showData(this.tabOption);
    this.inputDefaultParams = new Todo();
  }

  listSorted($event: any) {
    let itemsFiltered = [];

    switch (this.tabOption) {
      case 1:
        this.items = $event;
        break;
      case 2:
        itemsFiltered = this.items.filter(value => {
          return value.done === false;
        });
        break;
      case 3:
        itemsFiltered = this.items.filter(value => {
          return value.done === true;
        });
        break;
    }


    if (this.tabOption > 1) {
      for (const item of itemsFiltered) {
        const index = this.items.findIndex(e => e.name === item.name);
        this.items.splice(index, 1);
      }

      this.items.push(...$event);
    }


  }

  checked(item: Todo) {
    item.done = !item.done;
  }

  keyEnter() {
    if (this.inputDefaultParams.name != ''){
      this.items.push(this.inputDefaultParams);
      this.inputDefaultParams = new Todo();
    }

    this.showData(this.tabOption);
  }

  itemleft() {
   const itemLeft = this.items.filter(value => {
      return value.done === false;
    });
   const cant = itemLeft.length;
   if ( cant > 1){
     return `${cant} items left`;
   }
   return `${cant} item left`;
  }

  showData(pTabOption: number) {
    this.tabOption = pTabOption;

    switch (this.tabOption) {
      case 1:
        this.itemsFiltered = this.items;
        break;
      case 2:
        this.itemsFiltered = this.items.filter(value => {
          return value.done === false;
        });
        console.log(this.itemsFiltered);
        break;
      case 3:
        this.itemsFiltered = this.items.filter(value => {
          return value.done === true;
        });
        break;
    }
  }

  clearCompleted() {
   const itemsToDelete = this.items.filter(value => {
      return value.done === true;
    });
   for (const item of itemsToDelete){
      const index = this.items.findIndex(e => e.name === item.name);
      this.items.splice(index, 1);
    }
   this.showData(this.tabOption);
  }

  deleteItem(item: Todo) {
    const index = this.items.findIndex(e => e.name === item.name);
    this.items.splice(index, 1);
  }

  switchDarkTheme() {
    this.isDark = !this.isDark;
  }
}
