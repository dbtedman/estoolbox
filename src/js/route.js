export default class Route {
  constructor(pattern, callback) {
    /**
     * @type {String}
     */
    this.pattern = pattern;

    /**
     * @type {Function}
     */
    this.callback = callback;

    /**
     * @type {{}} Positional variables parsed from matched pattern.
     */
    this.variables = {};
  }
}
