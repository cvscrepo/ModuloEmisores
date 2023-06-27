import { Component } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'IronMan';
  public age: number = 45;


  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {

    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name = this.name === "Spiderman" ? "IronMan": "Spiderman";
  }

  changeAge():void{
    this.age = this.age === 25 ? 45 : 25;
  }

  reset(): void{

    this.age = 45;
    this.name = "IronMan";
    // document.querySelectorAll('h1')!.forEach(element => {
    //   element.innerHTML = '<h1>Desde Angular</h1>'
    // })
  }
}
