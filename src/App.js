import { Route, Switch } from 'react-router'
import Form from './Components/Form/Form'
import Homepage from './Components/Homepage/Homepage'
import Panel from './Components/Panel/Panel.js'
import Qual from './Components/Quizes/Qual/Qual'
import Safe from './Components/Quizes/Safe/Safe'
import Rating from './Components/Rating/Rating'
import Shop from './Components/Shop/Shop'
import User from './Components/User/User'

function App() {
  return (
    <div className="app">
      <Panel />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/tests/safe" exact component={Safe} />
        <Route path="/tests/qual" exact component={Qual} />
        <Route path="/tests" component={Homepage} />
        <Route path="/user" component={User} />
        <Route path="/auth" component={Form} />
        <Route path="/rating" component={Rating} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </div>
  )
}

export default App
