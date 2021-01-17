import { Player } from './../players.service';
import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({ name: 'searchByName' })
export class SearchByNamePipe implements PipeTransform {


  transform(players: Player[], searchText: string) {

    return players.filter(player => player.Name.toUpperCase().indexOf(searchText.toUpperCase())>-1);
    
  }
}