import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';


console.log(uuid());
@Injectable({providedIn: 'root'})

export class DbzService {

  public character: Character[] = [{
    id : uuid(),
    name: "Krillin",
    power: 1000
  },
  {
    id : uuid(),
    name: "Goku",
    power: 9500
  }
  ];

  AddCharacter(character: Character): void {

    const newCharacter: Character= {
      id: uuid(),
      ...character
    }
    this.character.push(newCharacter);
  }

  deleteCharacterById(id : string){
    this.character = this.character.filter(character => character.id !== id);
  }

}
