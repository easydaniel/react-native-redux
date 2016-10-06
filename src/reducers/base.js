import {
  handleActions
} from 'redux-actions';

const initialState = {
  name: 'easy'
};


export default handleActions({

  ACTION: {
    next(state, action) {
      return {
        ...state,
        name: 'test'
      }
    },
    throw(state, action) {
      return {
        ...state,
      };
    }
  },

  default: (state, action) => {
    return {
      ...state
    }
  },

}, initialState);
