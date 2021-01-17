import { Player } from './players.service';
import { Injectable } from '@angular/core';

@Injectable()
export class PlayerListServiceGlobal {
  selectPlayers: Player[]=[];
}