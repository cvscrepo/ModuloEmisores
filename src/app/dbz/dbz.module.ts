import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { dbzComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';



@NgModule({
  declarations: [dbzComponent, ListComponent, AddCharacterComponent],
  imports: [
    CommonModule,
    FormsModule

  ],
  exports: [
    dbzComponent
  ]
})
export class DbzModule { }
