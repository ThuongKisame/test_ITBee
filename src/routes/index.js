import Home from '../pages/Home';

const routes = {
    home: '/',
};

const publicRoutes = [
    { path: routes.home, component: Home },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
