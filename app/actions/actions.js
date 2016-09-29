import * as types from './actionTypes';


export function login(navProps, res) {
  return {
    type: types.LOGIN,
    nav:navProps,
    data: res
  };
}
export function changecolor() {
  return {
    type: types.CHANGECOLOR,
    nav:navProps,
    data: res
  };
}