import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../interface/character.interface';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  searchCharacters(query = '', page = 1) {
    return this.http.get<Character[]>(
      `${environment.apiCharacter}/?name=${query}&page=${page}`
    );
  }

  getDetails(id: number) {
    return this.http.get<Character>(`${environment.apiCharacter}/${id}`);
  }
}
