import $ from 'jquery';

export default () => {
  const trigger = $('.menu-trigger, .menu-close');
  const menu = $('.menu');

  trigger.on('click', () => {
    menu.toggleClass('active');
  });
};
