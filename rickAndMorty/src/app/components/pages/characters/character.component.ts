import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Character } from '@app/shared/interface/character.interface';

@Component({
  selector: 'app-character',
  template: `
    <div class="card">
      <div class="image">
        <a [routerLink]="['/character-details', character.id]">
          <img
            [src]="character.image"
            [alt]="character.name"
            class="card-img-top"
          />
        </a>
      </div>
      <div class="card-inner">
        <div class="header">
          <a [routerLink]="['/character-details', character.id]">
            <h2 class="text-name">{{ character.name | slice : 0 : 15 }}</h2>
          </a>
          <h4 class="text-info">{{ character.gender }}</h4>
          <h4 class="text-info">{{ character.status }}</h4>
          <h4 class="text-info">{{ character.created | date }}</h4>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterComponent {
  @Input() character: Character;
}
