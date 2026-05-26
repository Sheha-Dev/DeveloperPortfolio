import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { MatCardActions, MatCardContent, MatCardModule, MatCardTitle } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "../../pages/home/home.component";
import { AboutComponent } from "../../pages/about/about.component";
import { ProjectsComponent } from "../../pages/projects/projects.component";
import { ExperinceComponent } from "../../pages/experince/experince.component";
import { ContactComponent } from "../../pages/contact/contact.component";
import { EducationComponent } from "../../pages/education/education.component";
@Component({
  selector: 'app-full',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatCardContent,
    MenuBarComponent,
    MatTabsModule,
    CommonModule,
    HomeComponent,
    ProjectsComponent,
    ExperinceComponent,
    ContactComponent,
    EducationComponent
],
  templateUrl: './full.component.html',
  styleUrl: './full.component.scss'
})
export class FullComponent implements OnInit, OnDestroy ,OnChanges{

  selectedTab: string = 'Home';



  ngOnInit() {
   
  }

  ngOnChanges() {
    
  } 

  ngOnDestroy() {
    
  }

   get screenWidth(): number {
    return window.innerWidth;
  }


}
