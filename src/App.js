import {Route, Switch} from 'react-router-dom'
import Lists from './components/Lists'
import ItemDetails from './components/ItemDetails'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Lists} />
    <Route exact path="/items/:id" component={ItemDetails} />
    <Route component={NotFound} />
  </Switch>
)

export default App
