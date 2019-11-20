import { combineReducers } from "redux"
import homeReducer from './home-reducer'

/**
 * Mapping of individual reducers of the view to global state object is defined here.
 * When ever a new view is created, it is required that reducer of that view is registerd here.
 */

export const reducers = combineReducers({
  home: homeReducer,
});