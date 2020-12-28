// @flow
import './markup-menu';
import $ from 'jquery';
import 'jquery.maskedinput/src/jquery.maskedinput';
import 'slick-carousel';
import svgLoader from './svg-loader';
import menu from './menu';
import sliders from './sliders';
import slowAnchor from './slow-anchor';
import contactUsPopup from './contact-us-popup';
import { TABLET_DEVICE_WIDTH } from './constants';

document.addEventListener('DOMContentLoaded', () => {
  svgLoader();

  const homepageMainSection = $('.homepage-main-section');

  if (
    window.innerWidth <= TABLET_DEVICE_WIDTH
    && homepageMainSection.length
  ) {
    const { bgTablet } = homepageMainSection.data();
    homepageMainSection.css('background-image', bgTablet);
  }

  slowAnchor();
  sliders();
  menu();
  contactUsPopup();

  $("input[type='tel']").mask('+38 (999) 999-99-99');
});
