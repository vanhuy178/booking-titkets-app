import { createBrowserHistory } from 'history';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loading from './components/Loading';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import Detail from './pages/Detail';
import Home from "./pages/Home"
import News from './pages/News';
import Profile from './pages/Profile';
import { CheckoutTemplate } from './template/home/CheckoutTemplate/CheckoutTemplate';
import { HomeTemplate } from './template/home/HomeTemplate/HomeTemplate';
import Login from './template/home/UserTemplate/login/Login';
import Register from './template/home/UserTemplate/register/Register';
import { UserTemplate } from './template/home/UserTemplate/UserTemplate';
export const history = createBrowserHistory();


function App() {

  return (
    <>
      <Router history={history}>
        <Loading />
        <Switch>

          {/* HOME TEMPLATE */}
          <HomeTemplate path="/home" exact Component={Home} />
          <HomeTemplate path="/contact" exact Component={Contact} />
          <HomeTemplate path="/news" exact Component={News} />
          <HomeTemplate path='/detail/:id' exact Component={Detail} />
          <HomeTemplate path='/profile' exact Component={Profile} />


          <UserTemplate path='/login' exact Component={Login} />
          <UserTemplate path='/register' exact Component={Register} />
          {/* CHECKOUT TEMPLATE CODDING..... */}
          <CheckoutTemplate path='/checkout/:id' exact Component={Checkout} />

          <HomeTemplate path="/" exact Component={Home} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
