import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  //Con input se recibe las propiedades provenientes del componente padre
  @Input()
  public characterList: Character[] = [{
    name: "Trunk",
    power: 10
  }
  ]
  @Output()
  public onDeleteCharacter : EventEmitter<string> = new EventEmitter();

  DeleteCharacter(id?  : string):void{
    //TODO: Emitir el ID del personaje
    if(!id){
      return;
    }
    console.log(id);
    this.onDeleteCharacter.emit(id);
  }
}
