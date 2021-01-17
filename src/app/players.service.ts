import { HttpClient, HttpClientModule } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


export interface Player {
    Name: string;
    Price: string;
    Bet: string;
    Avatar: string;
    isSelected:boolean;
    Level:number;
    Lost:number;
    Win:number;
    isWinning:boolean;
    [key: string] : any;
  }
  

export interface configure{
  Name: string;
    Price: string;
    Bet: string;
    ["Profile Image"]: string;
}
  
  
@Injectable()

export class PlayersListService{
    
    
    configURL: string='https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json';


    constructor(private http: HttpClient){
     
        
    }
    

    async getPlayers(){


      let players = new Array<Player>();
      
      await this.http.get<configure[]>(this.configURL).toPromise().then((data: any) => {

        for(var i=0;i<data.length;i++){
          var temp = 
            { 
              Name: "",
              Price: "",
              Bet: "",
              Avatar: "",
              isSelected:false,
              Level:0,
              Lost:0,
              Win:0,
              isWinning:false
            }
          temp.Name= data[i].Name;
          temp.Bet=data[i].Bet;
          temp.Avatar=data[i]["Profile Image"];
          temp.Price= data[i].Price;  
          temp.Lost= Math.floor((Math.random()*10)+1);
          temp.Level= Math.floor((Math.random()*20)+1);
          temp.Win=Math.floor((Math.random()*10)+1);
          players.push(temp);

        }

      });
     
      return players;
        
    }
}

