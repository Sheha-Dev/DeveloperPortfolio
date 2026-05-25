import { Component, EventEmitter, Output } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  imports: [MatTabsModule],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss'
})
export class MenuBarComponent {
  @Output() tabName = new EventEmitter<any>();

  onTabChange(event: any) {
    const selectedTab = event.tab.textLabel;
    this.tabName.emit(selectedTab);
    console.log('Selected Tab:', selectedTab);
  }

}
