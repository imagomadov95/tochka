import {
  Component
}
  from '@angular/core';
import {
  NgClass,
  NgTemplateOutlet
}
  from "@angular/common";
import {
  MenuItem
}
  from "../../models/nav-item-models";
import {
  TreeLinksComponent
}
  from "../tree-links/tree-links.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgTemplateOutlet, TreeLinksComponent, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
}) export class HeaderComponent {

  menuItems: MenuItem[] = [{
    label: 'Регистрация бизнеса',
    sections: [{
      title: 'Section1',
      id: 'Section1',
      links: [{
        label: 'Sublink 1',
        url: '/sublink1'
      },
        {
          label: 'Sublink 2',
          url: '/sublink2'
        }]
    },
      {
        title: 'Section 2',
        id: 'Section2',
        links: [{
          label: 'Sublink 1',
          url: '/sublink1'
        },
          {
            label: 'Sublink 2',
            url: '/sublink2'
          }]
      },
      {
        title: 'Section 3',
        id: 'Section3',
        links: [{
          label: 'Sublink 1',
          url: '/sublink1'
        },
          {
            label: 'Sublink 2',
            url: '/sublink2'
          }]
      },
    ]
  },
    {
      label: 'Банк',
      sections: [{
        title: 'Section 2',
        id: 'Section22',
        links: [{
          label: 'Link 3',
          url: '/link3'
        },
          {
            label: 'Link 4',
            url: '/link4'
          }]
      }]
    },
    {
      label: 'Сервисы',
      sections: [{
        title: 'Section 2',
        id: 'Section222',
        links: [{
          label: 'Link 3',
          url: '/link3'
        },
          {
            label: 'Link 4',
            url: '/link4'
          }]
      }]
    },
    {
      label: 'О нас',
      sections: [{
        title: 'Section 2',
        id: 'Section223',
        links: [{
          label: 'Link 3',
          url: '/link3'
        },
          {
            label: 'Link 4',
            url: '/link4'
          }]
      }]
    },
  ];
  selectedItem: any;

  selectedMenu: boolean = false

  public toggleItem(item: any) : void {
    this.selectedItem = (this.selectedItem === item) ? null: item;
  }

  public toggleMenu() : void {
    this.selectedMenu = !this.selectedMenu
  }

  activeAccordion: string = ''; // Хранит id активного аккордеона

  toggleAccordion(id: string) : void {
    this.activeAccordion = this.activeAccordion === id ? '': id;
  }

  isActive(id: string) : boolean {
    return this.activeAccordion === id;
  }
}
