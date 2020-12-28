// @flow
import './markup-menu';
import $ from 'jquery';
import 'jquery.maskedinput/src/jquery.maskedinput';
import 'slick-carousel';
import svgLoader from './svg-loader';
import menu from './menu';
import contactUsPopup from './contact-us-popup';
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
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
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
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    }
  }

  $("input[type='tel']").mask("+38 (999) 999-99-99");
  menu();
  contactUsPopup();
});
