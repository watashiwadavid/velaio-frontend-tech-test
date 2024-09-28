import { createStore, withProps } from '@ngneat/elf';
import { MenuItem } from '../models';
import { withEntities } from '@ngneat/elf-entities';

export interface BaseLayoutProps {
  isMenuVisible: boolean;
}

export const store = createStore(
  { name: 'baseLayout' },
  withProps<BaseLayoutProps>({
    isMenuVisible: false,
  }),
  withEntities<MenuItem>()
);
