import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import DefaultLayout from './layout/DefaultLayout';
import { useSelector } from 'react-redux';


function App() {
  let darkMode=useSelector((state)=>state.darkMode)
  return (
    <Router>
    <div className={darkMode?'dark':''}>
        <Routes>
            {publicRoutes.map((route, index) => {
                const Page = route.component;
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
