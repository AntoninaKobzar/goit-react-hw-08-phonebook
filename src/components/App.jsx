import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout';
// const UserMenu = lazy(() => import('../components/UserMenu'));
// const User = lazy(() => import('../pages/User'));
const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          {/* <Route path="user" element={<UserMenu />} /> */}
        </Route>
      </Routes>
    </>
  );
};

export default App;
