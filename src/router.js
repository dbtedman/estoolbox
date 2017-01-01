import Route from "./route";

export default class Router {

  /**
   * @constructor
   */
  constructor() {
    /**
     * @type {Array<Route>}
     */
    this.routes = [];
  }

  /**
   * Add a pattern route and associated callback function to the Router instance attached to the
   * window object.
   *
   * @param {String} pattern
   * @param {Function} callback
   */
  static when(pattern, callback) {
    if (window.ESToolboxRouter === undefined) {
      window.ESToolboxRouter = new Router();
      window.ESToolboxRouter.watchURLHash();
    }

    window.ESToolboxRouter.when(pattern, callback);
    window.ESToolboxRouter.checkURLHash();
  }

  /**
   * Watch for any changes that occur in the URL hash and run the route checker.
   */
  watchURLHash() {
    window.addEventListener("hashchange", () => {
      this.checkURLHash();
    }, false);
  }

  /**
   * Check if we have a pattern that matches the current URL hash.
   */
  checkURLHash() {
    this.checkPath(window.location.hash.replace(/^[^/]*/, ""));
  }

  /**
   * @param {String} path Path to be compared to known patterns.
   */
  checkPath(path) {
    let found = false;

    this.routes.forEach((route) => {
      if (!found) {
        if (this.compare(path, route.pattern)) {
          found = true;
          route.callback();
        }
      }
    });
  }

  /**
   * Compare a pattern to a route.
   *
   * @param {String} path A URL hash path.
   * @param {String} pattern A URL route matching pattern.
   * @return {Boolean} True if pattern matches route, else false.
   */
  compare(path, pattern) {
    // TODO: Update sophistication of matching logic.
    return pattern == path;
  }

  /**
   * Add a pattern route and associated callback function.
   *
   * @param {String} pattern
   * @param {Function} callback
   */
  when(pattern, callback) {
    this.routes.push(new Route(pattern, callback));
  }
}
