import { IconBrandChrome, IconHelp } from '@tabler/icons';

const icons = { IconBrandChrome, IconHelp };

const other = {
  id: 'sample-docs-roadmap',
  type: 'group',
  children: [
    {
      id: 'my-page',
      title: '마이 페이지',
      type: 'item',
      url: '/my-page',
      icon: icons.IconBrandChrome,
      breadcrumbs: false,
    },
    {
      id: 'withdrawal',
      title: '회원탈퇴',
      type: 'item',
      url: '/withdrawal',
      icon: icons.IconHelp,
      external: true,
      target: true,
    },
  ],
};

export default other;
