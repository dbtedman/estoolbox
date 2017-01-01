import $ from "jquery";

export default class Affix {
  /**
   * Affixes content to the top of the window by adding and removing css classes. See _affix.scss
   * for associated sass mixins for the classes manipulated by this method.
   *
   * @param {String} affixToSelector Css selector for the content that is being affixed.
   * @param {String} affixBufferSelector Optional css selector for content directly below content
   *   being affixed.
   */
  static top(affixToSelector, affixBufferSelector) {

    const $affixMe = $(affixToSelector);
    const $needsBuffer = affixBufferSelector ? $(affixBufferSelector) : [];

    if ($affixMe.length > 0) {
      const $body = $("body");
      const $html = $("html");
      const $window = $(window);
      const initialTop = $affixMe.offset().top;

      $window.scroll(() => {
        // Firefox does not support checking scrollTop on body element so we need to check html element instead.
        if ($body[0].scrollTop >= initialTop || $html[0].scrollTop >= initialTop) {
          $affixMe.addClass("fixed-top");

          // Buffer forces content to be dropped according to a specific height associated with affixed content.
          if ($needsBuffer.length > 0) {
            $needsBuffer.addClass("fixed-top-buffer");
          }

        } else {
          $affixMe.removeClass("fixed-top");

          if ($needsBuffer.length > 0) {
            $needsBuffer.removeClass("fixed-top-buffer");
          }
        }
      });
    }
  }
}
