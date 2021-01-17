import { PlayerListServiceGlobal } from './../globalPlayersList.service';
import { Observable } from 'rxjs';
import { configure, Player, PlayersListService } from './../players.service';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * @title Table with filtering
 */


@Component({
  selector: 'players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {


  avatar:string="Avatar";

  heading:string[] =["Name","Price","Bet","Avatar","Level","Lost","Win"];

  players: Player[]=[];
  searchData:string="";
  
  selectedPlayer : any[]=[];

  posts:Promise<Player[]>;

  canPlay:boolean=false;

  config = {
    itemsPerPage: 9,
    currentPage: 1,
    totalItems: this.players.length,
  };

  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = true;
  public responsive: boolean = true;
  public labels: any = {
      previousLabel: '<',
      nextLabel: '>',
  };

  constructor(private service: PlayersListService, private http: HttpClient, private listed: PlayerListServiceGlobal){
   this.posts  = service.getPlayers();
  
    this.getSelected()
  }

  onPageChange(event : any){
    this.config.currentPage = event;
  }

 
  
  ngOnInit(): void {
    
    this.posts.then(data => this.players=data);
  }

  
  getSelected(){

    this.listed.selectPlayers = this.players.filter( player => {
      return player.isSelected;
    });
    this.selectedPlayer = this.players.filter( player => {
      return player.isSelected;
    });
    if(this.selectedPlayer.length==9){
      this.canPlay=true;
    }
    else{
      this.canPlay=false;
    }
  }
  
}


