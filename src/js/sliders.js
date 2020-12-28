// @flow
import $ from 'jquery';
import 'slick-carousel';
import { MOBILE_DEVICE_WIDTH, TABLET_DEVICE_WIDTH } from './constants';

export default () => {
  const slider = $('.service__slider');
  const catalog = $('.catalog-section .catalog');

  if (slider.length) {
    slider.slick({
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: MOBILE_DEVICE_WIDTH,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    });
  }

  if (
    window.innerWidth <= TABLET_DEVICE_WIDTH
    && catalog.length
  ) {
    catalog.slick({
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: false,
      dots: true,
      responsive: [
        {
          breakpoint: MOBILE_DEVICE_WIDTH,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }
};
