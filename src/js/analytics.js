export default class Analytics {

  /**
   * Construct a Google Analytics event.
   *
   * This method will handle the situation where the analytics code is not available by checking for its existence first.
   * This may occur in situations where the current environment is excluded from the allowed environments.
   *
   * @param {String} category - See https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#eventCategory
   * @param {String} action - See https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#eventAction
   * @param {String} label - (optional) See https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#eventLabel
   * @param {Number} value - (optional) See https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#eventValue
   * @param {Function} then - (optional) Method to be called once dataLayer is updated successfully.
   */
  static sendEvent({category, action, label = undefined, value = undefined, then = undefined}) {

    let data = {
      event: "createGAEvent",
      eventCategory: category,
      eventAction: action,
      eventCallback: function () {
        if (then !== null && then !== undefined) {
          then();
        }
      }
    };

    if (label !== null && label !== undefined) {
      data.eventLabel = label;
    }

    if (value !== null && value !== undefined) {
      data.eventValue = value;
    }

    if (window.dataLayer !== undefined) {
      window.dataLayer.push(data);

    } else {
      // Ensure we continue even if GTM is not able to be updated.
      if (then !== null && then !== undefined) {
        then();
      }
    }
  }
}
