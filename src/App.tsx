import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { PageHome, ContactsPage } from './pages'
import { Navigation } from './components'

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <PageHome />
          </Route>
          <Route path="/contacts" exact>
            <ContactsPage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
