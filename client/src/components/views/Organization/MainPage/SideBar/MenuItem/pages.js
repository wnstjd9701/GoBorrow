import { IconBrandPagekit } from '@tabler/icons';

const icons = {
  IconBrandPagekit,
};

const pages = {
  id: 'pages',
  title: '페이지',
  caption: '보여지는 페이지',
  type: 'group',
  children: [
    {
      id: 'page',
      title: '페이지',
      type: 'collapse',
      icon: icons.IconBrandPagekit,
      children: [
        {
          id: 'orgpage',
          title: '기관 페이지',
          type: 'item',
          url: '/pages/org',
          target: true,
        },
        {
          id: 'productpage',
          title: '상품 페이지',
          type: 'item',
          url: '/pages/product',
          target: true,
        },
      ],
    },
  ],
};

export default pages;
