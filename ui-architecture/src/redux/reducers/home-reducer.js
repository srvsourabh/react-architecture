import { ActionTypes } from '../../redux/types';

export default (state = {
  loader: false,
  testData: {},
  test: ""
}, action) => {
  switch (action.type) {

    case ActionTypes.TEST:
      return {...state, test: action.payload};

    case ActionTypes.DATA_RECEIVED :
      return { ...state, news: action.json };

    default: return state;
  }
};