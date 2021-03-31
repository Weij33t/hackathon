import { Route, Switch } from 'react-router'
import Homepage from './Components/Homepage/Homepage'
import Panel from './Components/Panel/Panel.js'
import Quizes from './Components/Quizes/Quizes'
import Safe from './Components/Quizes/Safe/Safe'
import Shop from './Components/Shop/Shop'
import User from './Components/User/User'

function App() {
  return (
    <div className="app">
      <Panel />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/tests/safe" exact component={Safe} />
        <Route path="/tests" component={Quizes} />
        <Route path="/user" component={User} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </div>
  )
}

export default App
