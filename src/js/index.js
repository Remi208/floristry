// @flow
import './markup-menu';
import $ from 'jquery';
import 'slick-carousel';
import svgLoader from './svg-loader';
import menu from './menu';
import { TABLET_DEVICE_WIDTH } from './constants';

document.addEventListener('DOMContentLoaded', () => {
  svgLoader();

  const slider = $('.service__slider');
  const catalog = $('.catalog-section .catalog');
  const homepageMainSection = $('.homepage-main-section');

  if (slider.length) {
    slider.slick({
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
    });
  }

  if (
    window.innerWidth <= TABLET_DEVICE_WIDTH
  ) {
    if (homepageMainSection.length) {
      const { bgTablet } = homepageMainSection.data();
      homepageMainSection.css('background-image', bgTablet);
    }
    if (catalog.length) {
      catalog.slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
      });
    }
  }

  menu();
});
