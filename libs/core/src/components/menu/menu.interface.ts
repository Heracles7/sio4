import { Sio4CoreMenuItemInterface } from '../menu-item';
export interface Sio4CoreMenuInterface {
  menuId: string;
  enabled: boolean;
  layout: 'flat' | 'accordion';
  label: string | undefined;
  color: string | undefined;
  toggleIcon: string;
  toggleIconSlot: string;
  lines: 'full' | 'inset' | 'none';
  position: 'top' | 'bottom' | 'hover';
  menuItems: Sio4CoreMenuItemInterface[] | undefined;
}