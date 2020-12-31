// @flow
import $ from 'jquery';

export default () => {
  const trigger = $('.menu-trigger, .menu-close');
  const body = $('body');
  const menu = $('.menu');

  trigger.on('click', () => {
    menu.toggleClass('active');
    body.toggleClass('no-scroll');
  });
};
