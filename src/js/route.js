import pathToRegexp from "path-to-regexp";

export default class Route {
  constructor(pattern, callback) {

    this.patternKeys = [];

    /**
     * @type {RegExp}
     */
    this.pattern = pathToRegexp(pattern, this.patternKeys);

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
