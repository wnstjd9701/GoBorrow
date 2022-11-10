import { IconListNumbers, IconList, IconFoldUp, IconBook } from '@tabler/icons';

const icons = {
  IconListNumbers,
  IconList,
  IconFoldUp,
  IconBook,
};

const utilities = {
  id: 'products',
  title: '품목 현황',
  type: 'group',
  children: [
    {
      id: 'util-typography',
      title: '리스트',
      type: 'item',
      url: '/products/product-list',
      icon: icons.IconListNumbers,
      breadcrumbs: false,
    },
    {
      id: 'util-shadow',
      title: '최근 요청',
      type: 'item',
      url: '/products/rental/request',
      icon: icons.IconFoldUp,
      breadcrumbs: false,
    },
    {
      id: 'status',
      title: '대여 현황',
      type: 'collapse',
      icon: icons.IconBook,
      children: [
        {
          id: 'process',
          title: '진행중인 대여 현황',
          type: 'item',
          url: '/products/rental/processing',
          breadcrumbs: false,
        },
        {
          id: 'history',
          title: '완료된 대여 현황',
          type: 'item',
          url: '/products/rental/history',
          breadcrumbs: false,
        },
      ],
    },
  ],
};

export default utilities;
