import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import DefaultLayout from './layout/DefaultLayout';


function App() {
  let classes='dark'
  return (
    <Router>
    <div className={classes}>
        <Routes>
            {publicRoutes.map((route, index) => {
                const Page = route.component;
                console.log(Page)
                const Layout = route.Layout || DefaultLayout;
                return (
                    <Route
                        key={index}
                        path={route.path}
                        element={
                            <Layout>
                                <Page />
                            </Layout>
                        }
                    />
                );
            })}
        </Routes>
    </div>
</Router>
  );
}

export default App;
