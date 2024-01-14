interface ISubMenu {
  label: string;
  link: string;
  icon?: string;
}

export interface IMainMenu {
  label: string;
  link: string;
  key?: string;
  hasSubMenu?: boolean;
  subMenus?: ISubMenu[];
}
