import Home from '../pages/Home';
import Setting from '../pages/Setting';
import Profile from '../pages/Profile';
import Edit from '../pages/Edit';

const routes = {
    home: '/',
    setting: '/setting',
    profile: '/profile',
    edit:'/edit/:id'
};

const publicRoutes = [
    { path: routes.home, component: Home },
    { path: routes.setting, component: Setting},
    { path: routes.profile, component: Profile },
    { path: routes.edit, component: Edit },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes, routes};
