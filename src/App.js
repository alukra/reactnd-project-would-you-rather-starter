import React from 'react';
import Appbar from '../src/components/Appbar';
import { connect } from 'react-redux';
import {
  fetchQuestions, fetchUsers, logout
} from './actions';
import {
  getUser,
  getAuthor
} from './reducers';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styles from './styles';
import PrivateRoute from './components/PrivateRoute';
import Error404 from './components/404';
import View from './containers/View';
import Home from './containers/Home';
import CreateQuestion from './containers/CreateQuestion';
import Leaderboard from './containers/Leaderboard';
import Login from './containers/Login';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchQuestions();
  }

  render() {
    const { logout, user, isAuth } = this.props
    return <Router>
      <Appbar user={user} isAuth={isAuth} logout={logout} />
      <div style={styles.app}>
        <Switch>
          <Route path={"/login"} exact component={Login} />
          <PrivateRoute path={"/"} exact component={Home} />
          <PrivateRoute path={"/view/:qid"} component={View} />
          <PrivateRoute path={"/add"} exact component={CreateQuestion} />
          <PrivateRoute path={"/leaderboard"} exact component={Leaderboard} />
          <Route path={"*"} component={Error404} />
        </Switch>
      </div>
    </Router>
  }

}

const mapStateToProps = (state) => ({
  isAuth: getAuthor(state) === undefined ? false : true,
  user: getUser(state, getAuthor(state))
});

const mapDispatchToProps = ({ fetchQuestions, fetchUsers, logout });

export default connect(mapStateToProps, mapDispatchToProps)(App);
