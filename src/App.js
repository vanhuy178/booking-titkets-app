import { createBrowserHistory } from 'history';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import Detail from './pages/Detail';
import Home from "./pages/Home"
import News from './pages/News';
import { CheckoutTemplate } from './template/home/CheckoutTemplate/CheckoutTemplate';
import { HomeTemplate } from './template/home/HomeTemplate/HomeTemplate';
import Login from './template/home/UserTemplate/login/Login';
import Register from './template/home/UserTemplate/register/Register';
import { UserTemplate } from './template/home/UserTemplate/UserTemplate';
export const history = createBrowserHistory();


function App() {
  // const CheckoutTemplate = React.lazy(() => import('./template/home/CheckoutTemplate/CheckoutTemplate'));
  // USE LAZY LOADING TECHNOLOGY
  return (
    <>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Router history={history}>
        <Switch>

          {/* HOME TEMPLATE */}
          <HomeTemplate path="/home" exact Component={Home} />
          <HomeTemplate path="/contact" exact Component={Contact} />
          <HomeTemplate path="/news" exact Component={News} />
          <HomeTemplate path='/detail/:id' exact Component={Detail} />


          <UserTemplate path='/login' exact Component={Login} />
          <UserTemplate path='/register' exact Component={Register} />
          {/* CHECKOUT TEMPLATE CODDING..... */}
          <CheckoutTemplate path='/checkout/:id' exact Component={Checkout} />

          <HomeTemplate path="/" exact Component={Home} />

        </Switch>
      </Router>
      {/* </Suspense> */}

    </>
  );
}

export default App;
