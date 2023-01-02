import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Categories } from '../Category/Categories'
import { BoardWrapper } from '../Board/BoardWrapper'

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
            <BoardWrapper/>
        </Route>
    </Switch>
  )
}
