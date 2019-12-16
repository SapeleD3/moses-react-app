import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../pages/Homepage/Home'

export default function route() {
    return (
        <Router>
            <div className=''>
              <Switch>
                <Route path='/' exact component={Home} />
              </Switch>
            </div>
        </Router>
    )
}
