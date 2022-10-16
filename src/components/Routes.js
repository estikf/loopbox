import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Categories } from './Category/Categories'
import { Players } from './Players/Players'

export const Routes = () => {
  return (
    <Switch>
        <Route
            exact
            path="/"
        >
            <Categories/>
        </Route>
        <Route path="/:id">
            <Players/>
        </Route>
    </Switch>
  )
}
