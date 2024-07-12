import { Component, Input } from '@angular/core';
import {MenuSection} from "../../models/nav-item-models";
import {NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'app-tree-links',
  standalone: true,
  imports: [
    NgTemplateOutlet
  ],
  templateUrl: './tree-links.component.html',
})
export class TreeLinksComponent {
@Input() treeItem!: MenuSection
  public selectedItem: any;
  public toggleItem(item: any): void {
    console.log('#mi', item, this.selectedItem)
    this.selectedItem = (this.selectedItem === item) ? null : item;
  }
}
