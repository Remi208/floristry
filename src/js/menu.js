// @flow
import $ from 'jquery';

export default () => {
  const trigger = $('.menu-trigger, .menu-close');
  const wrapper = $('.wrapper');
  const menu = $('.menu');

  trigger.on('click', () => {
    menu.toggleClass('active');
    wrapper.toggleClass('menu-opened');
  });
};
