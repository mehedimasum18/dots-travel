import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import MostVisited from './Pages/MostVisited/MostVisited';
import MostVisit from './Pages/MostVisited/MostVisit';



function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route>
            <NotFound path="*"></NotFound>
          </Route>
        </Switch>
        
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
