import { PlayersListService } from './players.service';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { GamepageComponent } from './gamepage/gamepage.component';
import { SearchByNamePipe } from './players/players.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { PlayerListServiceGlobal } from './globalPlayersList.service';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    SearchByNamePipe,
    GamepageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      {
        path: '',
        component: PlayersComponent
      },
      {
        path: 'gamepage',
        component: GamepageComponent
      }
    ]),
    FormsModule
  ],
  providers: [
    PlayersListService,
    PlayerListServiceGlobal
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
