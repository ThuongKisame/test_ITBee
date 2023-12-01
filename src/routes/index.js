import Home from '../pages/Home';
import Setting from '../pages/Setting';
import Profile from '../pages/Profile';

const routes = {
    home: '/',
    setting: '/setting',
    profile: '/profile',
};

const publicRoutes = [
    { path: routes.home, component: Home },
    { path: routes.setting, component: Setting},
    { path: routes.profile, component: Profile },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes, routes};
