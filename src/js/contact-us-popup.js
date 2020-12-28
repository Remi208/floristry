// @flow
import $ from 'jquery';

export default () => {
  const contactUsPopup = $('.contact-us-popup');
  const openTrigger = $('.make-an-order');
  const closeTrigger = $('.contact-us-popup .popup-close, .contact-us-popup .popup-overlay');

  openTrigger.on('click', () => {
    contactUsPopup.fadeIn(500);
  });

  closeTrigger.on('click', () => {
    contactUsPopup.fadeOut(500);
  });
};
