// @flow
import './markup-menu';
import $ from 'jquery';
import 'slick-carousel';
import svgLoader from './svg-loader';

document.addEventListener('DOMContentLoaded', () => {
  svgLoader();

  const slider = $('.service__slider');

  if (slider.length) {
    slider.slick({
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 4,
      centerPadding: '100px',
    });
  }
});
