import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import page1 from './component/page1';
import page2 from './component/page2';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={page1}/>
        <Route path="/page2" component={page2}/>
      </Switch>
    </Router>
  );
}

export default App;