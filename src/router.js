export default class Router {

  /**
   * @constructor
   */
  constructor() {
    this.routes = [];
  }

  /**
   * Add a pattern route and associated callback function to the Router instance attached to the
   * window object.
   *
   * @param {String} route
   * @param {Function} callback
   */
  static when(route, callback) {
    if (window.ESToolboxRouter === undefined) {
      window.ESToolboxRouter = new Router();
      window.ESToolboxRouter.watch();
    }

    window.ESToolboxRouter.when(route, callback);
    window.ESToolboxRouter.check();
  }

  /**
   * Watch for any changes that occur in the URL hash and run the route checker.
   */
  watch() {
    window.addEventListener("hashchange", () => {
      this.check();
    }, false);
  }

  /**
   * Check if we have a pattern that matches the current URL hash.
   */
  check() {
    const hash = window.location.hash;
    let found = false;

    this.routes.forEach((route) => {
      if (!found) {
        if (this.compare(hash.replace(/^[^/]*/, ""), route.route)) {
          found = true;
          route.callback();
        }
      }
    });
  }

  /**
   * Compare a pattern to a route.
   *
   * @param {String} route A URL hash route.
   * @param {String} pattern A URL route matching pattern.
   * @return {Boolean} True if pattern matches route, else false.
   */
  compare(route, pattern) {
    return pattern == route;
  }

  /**
   * Add a pattern route and associated callback function.
   *
   * @param {String} route
   * @param {Function} callback
   */
  when(route, callback) {
    this.routes.push({
      route: route,
      callback: callback
    });
  }
}
