export default class Affix {
  /**
   * Affixes content to the top of the window by adding and removing css classes. See _affix.scss
   * for associated sass mixins for the classes manipulated by this method.
   *
   * @param {String} affixToSelector Css selector for the content that is being affixed.
   * @param {String|null} affixBufferSelector Optional css selector for content directly below content
   *   being affixed.
   */
  static top(affixToSelector, affixBufferSelector = null) {

    const affixMe = document.querySelectorAll(affixToSelector);
    const needsBuffer = affixBufferSelector !== null ? document.querySelectorAll(affixBufferSelector) : [];

    if (affixMe.length > 0) {
      const body = document.getElementsByTagName("body")[0];
      const html = document.getElementsByTagName("html")[0];
      const initialTop = affixMe.offsetTop;

      window.addEventListener("scroll", () => {
        // Firefox does not support checking scrollTop on body element so we need to check html element instead.
        if (body.scrollTop >= initialTop || html.scrollTop >= initialTop) {
          affixMe.forEach((affixMeItem) => affixMeItem.classList.add("fixed-top"));

          // Buffer forces content to be dropped according to a specific height associated with affixed content.
          if (needsBuffer.length > 0) {
            needsBuffer.forEach((needsBufferItem) => needsBufferItem.classList.add("fixed-top-buffer"));
          }

        } else {
          affixMe.forEach((affixMeItem) => affixMeItem.classList.remove("fixed-top"));

          if (needsBuffer.length > 0) {
            needsBuffer.forEach((needsBufferItem) => needsBufferItem.classList.remove("fixed-top-buffer"));
          }
        }
      });
    }
  }
}
