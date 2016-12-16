'use strict';

const store = require('../store.js');

const success = (data) => {
  $('#messages').text("Success");
  console.log(data);
};

const failure = (error) => {
  $('#messages').text("Failure");
  console.error(error);
};

const signUpSuccess = (data) => {
  store.user = data.user;
  success(data);
  $('#signUpBox').text("You Are Signed Up!");
  $('#myModal2').modal('hide');
  $('#myModal1').modal('show');
  $('#sign-up').trigger('reset');

};

const signUpFailure = (data) => {
  store.user = data.user;
  success(data);
  $('#signUpBox').text("Maybe You Entered Something Wrong....Or Maybe That Email Already Exists!");
};

const signInSuccess = (data) => {
  store.user = data.user;
  success(data);
  $('#imageDelete').show();
  $('#imageView').show();
  $('#imageUpdate').show();
  $('#sign-out').show();
  $('#sign-out-main').show();
  $('#imagePost').show();
  $('#change-password').show();
  $('#signInBox').text("I'm Back BABY!");
  $('#signUpBox')
    .empty()
    .append("User ID:", + data.user.id);
  $('#close').hide();
  $('#sign-up').hide();
  $('#sign-in').hide();
  $('#needAccountBox').hide();
  $('#changePwrd').show();
  $('#sign-out-pwrd').show();
  $('.containera').hide();
  $('#changePwrd-main').show();
  $('#signInBox').show();
  $('.options')
    .empty()
    .append("User ID:", + data.user.id);
  $('.userIdMain')
    .empty()
    .append("User ID:", + data.user.id);
  $('#viewAllImages').show();
  $('#myModal1').modal('hide');
  $('#outANDin').hide();
  $('#imageOptions').show();
  $('#shakeHere').show().empty().append('<--Start Here!');
  $('#sign-in').trigger('RESET');


};

const signInFailure = (data) => {
  store.user = data.user;
  success(data);
  $('#signInBoxTwo').show().text("Maybe You Entered Something Wrong....Try Again.");
  $('#signUpBox').text('');
};

const signOutSuccess = (data) => {
  success(data);
  $('#change-password').hide();
  $('#sign-out').hide();
  $('#sign-out-main').hide();
  $('#imageUpdate').hide();
  $('#imagePost').hide();
  $('#imageView').hide();
  $('#imageDelete').hide();
  $('#signInBox').text('You Are Signed Out!');
  $('#signInBox').text('');
  $('#changePasswordBox').text('');
  $('#viewImageBox').text('');
  $('#updateImageBox').text('');
  $('#deleteImageBox').text('');
  $('#postImageBox').text('');
  $('.img-container').empty().hide();
  $('.img-container-info').empty().hide();
  $('.img-container-info-one').empty().hide();
  $('.img-container-info-two').empty().hide();
  $('.close').show();
  $('#sign-in').show();
  $('#sign-up').show();
  $('#signUpBox').empty();
  $('#needAccountBox').show();
  $('#changePasswordBox').show();
  $('#changePwrd').hide();
  $('#changePwrd-main').hide();
  $('#myModal3').modal('hide');
  $('.containera').show();
  $('.options')
    .empty()
    .append("User Options");
  $('.userIdMain').empty();
  $('.allImagesData').hide();
  $('#viewAllImages').hide();
  $('#outANDin').show();
  $('#imageOptions').hide();
  $('#shakeHere').empty().hide();
  $('#signInBoxTwo').empty().hide();
  $('#sign-in').trigger('reset');

};

const changePasswordFailure = () => {
  $('#changePasswordBox').text("Maybe You Entered Something Wrong....Try Again.");
  $('#signInBox').text("Password NOT changed. You're Still Logged In Though!");
};

const changePasswordSuccess = () => {
  $('#signInBox').text('Write Down Your New Password!');
  $('#myModal3').modal('hide');
  $('#myModal1').modal('show');
  $('#sign-in').trigger('reset');
  $('#change-password').trigger('reset');


};

module.exports = {
  failure,
  success,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signUpSuccess,
  signUpFailure,
  changePasswordFailure,
  changePasswordSuccess,
};