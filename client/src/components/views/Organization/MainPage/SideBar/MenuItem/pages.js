import { IconBrandPagekit } from '@tabler/icons';

const icons = {
  IconBrandPagekit,
};

const pages = {
  id: 'pages',
  title: 'Pages',
  caption: 'Viewing Page',
  type: 'group',
  children: [
    {
      id: 'page',
      title: 'Page',
      type: 'collapse',
      icon: icons.IconBrandPagekit,

      children: [
        {
          id: 'orgpage',
          title: 'Organization Page',
          type: 'item',
          url: '/pages/org',
          target: true,
        },
        {
          id: 'productpage',
          title: 'Product Page',
          type: 'item',
          url: '/pages/product',
          target: true,
        },
      ],
    },
  ],
};

export default pages;
