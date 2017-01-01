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
  }
}
