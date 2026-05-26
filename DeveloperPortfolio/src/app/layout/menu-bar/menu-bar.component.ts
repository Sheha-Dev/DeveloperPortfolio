import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenu, MatMenuModule } from '@angular/material/menu';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  imports: [
    MatTabsModule,
    CommonModule,
    MatMenuModule,
    MatButtonModule
  ],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss'
})
export class MenuBarComponent {
  @Output() tabName = new EventEmitter<any>();

  isMobile = window.innerWidth <= 768;

  tabs = [
    { label: 'Home' },
    { label: 'Education' },
    { label: 'Projects' },
    { label: 'Experience' },
    { label: 'Contact' }
  ];

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth <= 768;
  }

  onTabChange(event: MatTabChangeEvent) {
    console.log(event.index);
    // your existing navigation logic
  }

  selectMenuTab(index: number) {
    this.onTabChange({ index } as MatTabChangeEvent);
  }
}