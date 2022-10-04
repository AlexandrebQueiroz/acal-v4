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
    title: 'Associado',
    icon: 'person-outline',
    link: '/pages/customer',
  },
  {
    title: 'Grupos',
    icon: 'people-outline',
    link: '/pages/group',
  },
  {
    title: 'Matricula',
    icon: 'home-outline',
    link: '/pages/address',
  },
  {
    title: 'Contrato',
    icon: 'file-text-outline',
    link: '/pages/contract',
  },
  {
    title: 'Operacional',
    group: true,
  },
  {
    title: 'Gerar Fatura',
    icon: 'archive-outline',
    link: '/pages/invoice',
  },
  {
    title: 'Financeiro',
    group: true,
  },
  {
    title: 'Fatura',
    icon: 'credit-card-outline',
    link: '/pages/bill',
  },
];
