import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BegginingPage from './pages/BegginingPage/BegginingPage'; 
import Register from './pages/RegisterPage/Register';
import Login from './pages/LoginPage/Login';
import HomePage from './pages/homePage/HomePage';
import Jugadores from './pages/JugadoresPage/Jugadores';
import Perfil from './pages/PerfilPage/PerfilPage'
import MailConfirm from './pages/mailConfirmPage/MailConfirm'
import './App.css';

const App = () => {

  return (
    <BrowserRouter>

      <Switch>
        <Route exact path="/" component={BegginingPage}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/home" component={HomePage}/>
        <Route exact path="/jugadores" component={Jugadores}/>
        <Route exact path="/perfil" component={Perfil}/>
        <Route path="/mailConfirm" component={MailConfirm}/>
      </Switch>
    </BrowserRouter>
  );
};


export default App;
