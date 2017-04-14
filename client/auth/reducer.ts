import Immutable from 'seamless-immutable';

export const initState = Immutable();

export const initAction = {
  type: '',
  payload: {},
};

export const loginReducer = (state = initState, action = initAction) => {
  switch (action.type) {
    case :
    default: return state;
  }
};