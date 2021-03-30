import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxSortableModule } from 'ngx-sortable';
import {FormsModule} from '@angular/forms';
import { RemoveFocusToButtonDirective } from './directives/remove-focus-to-button.directive';

@NgModule({
  declarations: [
    AppComponent,
    RemoveFocusToButtonDirective
  ],
  imports: [
    BrowserModule,
    NgxSortableModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
