import {Route, Switch} from 'react-router-dom'

import './App.css'

import LoginPage from './components/LoginPage'
import Home from './components/Home'

const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/" component={Home} />
    </Switch>
  </>
)

export default App
