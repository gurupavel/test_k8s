import {AxiosService} from "../servises/axios";

// Send a POST request
export function signUpApi(payload) {
  console.log(payload);
  return AxiosService.POST('/user/signup', JSON.stringify(payload), {}, 'register')
    .then((response) => {
      return response;
    })
}

// GET request for remote image
export function signInApi(payload) {
  console.log(payload);
  return AxiosService.POST('/user/login', payload, {}, 'auth')
    .then((response) => {
      return response;
    })
}


// Send a POST request
export function requestNewPasswordApi(payload) {
  return AxiosService.POST('/user/reset_password', payload, {}, 'register')
    .then((response) => {
      return response;
    })
}


// Send a POST request
export function setNewPasswordApi(payload) {
  return AxiosService.POST(`/user/new_password${window.location.search}`, payload, {}, 'register')
    .then((response) => {
      return response;
    })
}


// Send a POST request
export function contactAdminApi(payload) {
  return AxiosService.POST('/customer/request', JSON.stringify(payload), {}, 'register')
    .then((response) => {
      return response;
    })
}


// Send a POST request
export function createPasswordApi(payload) {
  console.log(payload);
  return AxiosService.POST('/user/signup', JSON.stringify(payload), {}, 'register')
    .then((response) => {
      return response;
    })
}