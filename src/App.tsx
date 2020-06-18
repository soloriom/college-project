import React from 'react';
import { Dashboard, Details, NewStudents, NavBar } from './Components';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect} from 'react-router-dom';
import { Provider } from 'react-redux';
import './styles/studentsForm.scss';


import { store } from './redux/store';

const browserHistory = createBrowserHistory();

const  App = (): JSX.Element => {

  return (
   <Provider store={store} > 
    <Router history= {browserHistory}>
        <NavBar history={browserHistory}/>
      <Switch>
        <Route exact path='/' render={()=><Redirect to="/dashboard"/>}/>
        <Route exact path='/dashboard' component={Dashboard}/>
        <Route exact path='/addStudent' component={NewStudents}/>
        <Route exact path='/details' component={Details} />
        <Route render={()=> <h1 style={{ position: 'fixed', left: '35%',  top:'30%' }}>ERROR 404 Page Not Found</h1>} />
      </Switch>
    </Router>
   </Provider>
  );
}

export default App;
