import { IconDashboard } from '@tabler/icons';

const icons = { IconDashboard };

const dashboard = {
  id: 'dashboard',
  title: '메인화면',
  type: 'group',
  children: [
    {
      id: 'default',
      title: '대시보드',
      type: 'item',
      url: '/',
      icon: icons.IconDashboard,
      breadcrumbs: false,
    },
  ],
};

export default dashboard;
