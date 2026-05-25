import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { MatCardActions, MatCardContent, MatCardModule, MatCardTitle } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-full',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatCardContent,
    MenuBarComponent,
    MatTabsModule,
    CommonModule
  ],
  templateUrl: './full.component.html',
  styleUrl: './full.component.scss'
})
export class FullComponent implements OnInit, OnDestroy ,OnChanges{

  selectedTab: string = 'Home';


  ngOnInit() {
    console.log('FullComponent initialized');
  }

  ngOnChanges() {
    console.log('FullComponent changes detected');
  } 

  ngOnDestroy() {
    console.log('FullComponent destroyed');
  }
}
