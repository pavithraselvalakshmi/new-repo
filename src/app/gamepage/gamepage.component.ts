import { PlayerListServiceGlobal } from './../globalPlayersList.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'gamepage',
  templateUrl: './gamepage.component.html',
  styleUrls: ['./gamepage.component.css']
})
export class GamepageComponent implements OnInit {


  listOfPlayers : any[]=[];
  opposingBet:number=0;
  winner: boolean=true;
  constructor(private route: ActivatedRoute, private listedPlayer: PlayerListServiceGlobal) { }

  ngOnInit(): void {
    this.listOfPlayers=this.listedPlayer.selectPlayers;
    this.opposingBet=Math.floor((Math.random()*10)+1);


    for(var i=0;i<this.listOfPlayers.length;i++){
      if(this.listOfPlayers[i].Bet == this.opposingBet)
      {
        this.listOfPlayers[i].Price *= 2;
        this.listOfPlayers[i].isWinning=true;
      }
    }
    
  }

}
