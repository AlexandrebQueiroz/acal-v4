import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'monitor-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Cadastros',
    group: true,
  },
  {
    title: 'Associados',
    icon: 'person-outline',
    link: '/pages/customer',
  },
  {
    title: 'Grupos',
    icon: 'people-outline',
    link: '/pages/group',
  },
  {
    title: 'Matrículas',
    icon: 'home-outline',
    link: '/pages/address',
  },
  {
    title: 'Contratos',
    icon: 'file-text-outline',
    link: '/pages/contract',
  },
  {
    title: 'Operacional',
    group: true,
  },
  {
    title: 'Gerar Faturas',
    icon: 'archive-outline',
    link: '/pages/invoice',
  },
  {
    title: 'Parâmetros',
    icon: 'color-picker-outline',
    link: '/pages/parameter',
  },
  {
    title: 'Financeiro',
    group: true,
  },
  {
    title: 'Faturas',
    icon: 'credit-card-outline',
    link: '/pages/bill',
  },
];
