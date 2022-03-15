import Courses from 'features/Courses/Courses';
import Schedules from 'features/Schedules/Schedules';
import Students from 'features/Students/Students';
import Home from 'features/Home';
import { Scopes } from 'app/rbac/scopes';
import UnAuthScreen from 'components/UnAuthScreen';

export type RoutesDictType = {
  [key: string]: {
    primary?: string;
    to: string;
    iconName?: string;
    type: string;
    component: React.FunctionComponent | (() => JSX.Element);
    menuItemType?: string;
    isDashboardItem?: boolean;
    title?: string;
    content?: string;
    requiredScopes: Scopes[];
    id?: string;
  };
};

const routesDict: RoutesDictType = {
  home: {
    type: 'public',
    to: '/',
    iconName: 'home',
    primary: 'home',
    component: Home,
    menuItemType: 'mainMenu',
    isDashboardItem: false,
    title: 'home',
    requiredScopes: [Scopes.canView, Scopes.canCreate, Scopes.canDelete, Scopes.canEdit],
    id: 'qaId_home'
  },
  courses: {
    type: 'public',
    to: '/courses',
    iconName: 'view_list',
    primary: 'courses',
    component: Courses,
    menuItemType: 'mainMenu',
    isDashboardItem: true,
    title: 'courses',
    content: 'Here you can see the courses',
    requiredScopes: [Scopes.canView],
    id: 'qaId_courses'
  },
  schedules: {
    type: 'public',
    to: '/schedules',
    iconName: 'scheduler',
    primary: 'schedules',
    component: Schedules,
    menuItemType: 'mainMenu',
    isDashboardItem: true,
    title: 'schedules',
    content: 'Here you can see all schedules',
    requiredScopes: [Scopes.canView],
    id: 'qaId_schedules'
  },
  students: {
    type: 'public',
    to: '/students',
    iconName: 'school',
    primary: 'students',
    component: Students,
    menuItemType: 'mainMenu',
    isDashboardItem: true,
    title: 'students',
    content: 'Here you can see all students',
    requiredScopes: [Scopes.canView],
    id: 'qaId_students'
  },
  unauthorizedScreen: {
    type: 'public',
    to: '/unauthorized',
    component: UnAuthScreen,
    isDashboardItem: false,
    requiredScopes: []
  }
};

export { routesDict };
