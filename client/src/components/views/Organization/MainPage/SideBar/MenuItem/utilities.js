import { IconListNumbers, IconList, IconFoldUp, IconBook } from '@tabler/icons';

const icons = {
  IconListNumbers,
  IconList,
  IconFoldUp,
  IconBook,
};

const utilities = {
  id: 'products',
  title: 'Products',
  type: 'group',
  children: [
    {
      id: 'util-typography',
      title: 'List',
      type: 'item',
      url: '/products/product-list',
      icon: icons.IconListNumbers,
      breadcrumbs: false,
    },
    {
      id: 'util-shadow',
      title: 'Request',
      type: 'item',
      url: '/products/rental/request',
      icon: icons.IconFoldUp,
      breadcrumbs: false,
    },
    {
      id: 'status',
      title: 'Rental Status',
      type: 'collapse',
      icon: icons.IconBook,
      children: [
        {
          id: 'process',
          title: 'Processing',
          type: 'item',
          url: '/products/rental/processing',
          breadcrumbs: false,
        },
        {
          id: 'history',
          title: 'History',
          type: 'item',
          url: '/products/rental/history',
          breadcrumbs: false,
        },
      ],
    },
  ],
};

export default utilities;
