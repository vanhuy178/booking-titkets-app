import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './pages/Contact';
// import Home from './pages/Home';
import Home from "./pages/Home"
import News from './pages/News';
import { HomeTemplate } from './template/home/HomeTemplate/HomeTemplate';
import Login from './template/home/UserTemplate/login/Login';
import Register from './template/home/UserTemplate/register/Register';

const history = createBrowserHistory();
function App() {
  return (
    <>
      <Router history={history}>
        <Switch>
          {/* <HomeTemplate path="/news" exact Component={News} />
          <HomeTemplate path="/contact" exact Component={Contact} />
          <HomeTemplate path="/" exact Component={Home} />
          <Route path='/login' exact Component={Login} />
          <Route path='/register' exact Component={Register} /> */}
          <HomeTemplate path="/home" exact Component={Home} />
        </Switch>
      </Router>

    </>
  );
}

export default App;
