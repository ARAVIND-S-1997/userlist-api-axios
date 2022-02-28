
import './App.css';
import BasicTable from './userlist';
import{Switch,Route} from"react-router-dom"
import { Adduser } from './addusers';
import { Edituser } from './edituser';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <BasicTable/>
        </Route>
        <Route exact path="/adduser">
          <Adduser/>
        </Route>
        <Route exact path="/edituser/:id">
          <Edituser/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
