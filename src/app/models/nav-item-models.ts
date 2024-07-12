export interface MenuItem {
  label: string;
  sections: MenuSection[];
}

export interface MenuSection {
  id: string;
  title: string;
  links: Link[];

}

export interface Link {
  label: string;
  url?: string;
  children?: MenuSection[];
}
