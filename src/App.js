import './App.css';
import {BrowserRouter, Route, Redirect,Switch} from 'react-router-dom';
import Index from './pages/index/index'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/Index" component={Index} />
          <Redirect from="/" to="/Index"/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
