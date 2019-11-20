import { ActionTypes } from '../../redux/types';

export const changeTest = (msg) => {
    return {
        type: ActionTypes.TEST,
        payload: msg
    }
};

// export const changeTest = (msg) => {
//     return function (dispatch,getState) {
//     }
// };
