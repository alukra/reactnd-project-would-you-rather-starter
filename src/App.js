import React from 'react';
import Appbar from '../src/components/Appbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styles from './styles'

//routes
import Error404 from './components/404'
import View from './containers/View'
import Home from './containers/Home'
import CreateQuestion from './containers/CreateQuestion'
import Leaderboard from './containers/Leaderboard'
import Login from './containers/Login'

const App = () => {
  return <Router>
    <Appbar></Appbar>
    <div style={styles.app}>
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/view/:qid"} component={View} />
        <Route path={"/create"} exact component={CreateQuestion} />
        <Route path={"/leaderboard"} exact component={Leaderboard} />
        <Route path={"/login"} exact component={Login} />
        <Route path={"*"} component={Error404} />
      </Switch>
    </div>
  </Router>

}

export default App;
