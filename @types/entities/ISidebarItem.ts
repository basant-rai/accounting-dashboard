export interface ISidebarItem {
  title: string;
  href: string;
}

export interface ISidebarListItem {
  title: string;
  key: string;
  href?: string;
  Icon?: any
  children?: ISidebarListItem[];
  open?: any
  value?: any
  setOpen?: any
}