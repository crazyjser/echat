const localEvent = function (item) {
  this.get = function () {
    return localStorage.getItem(item) ? JSON.parse(localStorage.getItem(item)) : '';
  }
  this.set = function (obj) {
    localStorage.setItem(item, JSON.stringify(obj));
  }
  this.clear = function () {
    localStorage.removeItem(item);
  }
}
export const echatUser = new localEvent('echat_user')
export const echatEvent = new localEvent('echat_event')
export const echatTheme = new localEvent('echat_theme')
export const currentUser = new localEvent('current_user')