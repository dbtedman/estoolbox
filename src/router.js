/**
 * Handle performing actions based on matched hash routes.
 */
class Router {

  constructor() {
    /**
     * @type {Array<Pattern>}
     */
    this.patterns = [];
  }

  /**
   * Map a route pattern to a callback.
   *
   * @param {string} pattern - Match request to this pattern.
   * @param {function} callback - Executed when pattern is matched.
   * @returns {Router} - Reference to class.
   */
  when(pattern, callback) {

    this.patterns.push(new Pattern(pattern, callback));

    return Router;
  }

  /**
   * @returns {Router} - Reference to class.
   */
  start() {

    // TODO: Add hash watch and initial route test.

    return Router;
  }
}

class Pattern {
  /**
   * @param {string} pattern -
   * @param {function} callback -
   * @return {Pattern} -
   */
  constructor(pattern, callback) {
    this.pattern = pattern;
    this.callback = callback;
  }
}

export default new Router();
