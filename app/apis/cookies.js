import Cookies from 'js-cookie';

export function saveUserTokenToCookie(userData) {
  Cookies.set('token', userData);
}

export function getUserTokenFromCookie() {
  return Cookies.get('token');
}

export function removeUserTokenFromCookie() {
  Cookies.remove('token');
}

export function saveUserIdToCookie(uid) {
  Cookies.set('uid', uid);
}

export function getUserIdFromCookie() {
  return Cookies.get('uid');
}

export function removeUserIdFromCookie() {
  Cookies.remove('uid');
}
