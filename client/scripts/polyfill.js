window.onload = function () {
  checkBrowser();
};

const checkBrowser = () => {
  var isWebRTCSupported =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia ||
    window.RTCPeerConnection;

  if (isWebRTCSupported) {
    supported();
  } else {
    notSupported();
  }

  // check if browser is edge
  if (window.navigator.userAgent.indexOf('Edge') > -1) {
    alert('WebRTC not supported');
  }

  // check if browser is safari
  var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  if (isSafari) {
    notSupported();
  }
};

const supported = () => {
  console.log('Browser support 🎉🎉🎉');
};

const notSupported = () => {
  console.error('Lacking browser support 😢😢😢');
  alert(
    'This browser is lacking support. If you are experiencing issues, please try the latest versions of Chrome or Firefox'
  );
};
