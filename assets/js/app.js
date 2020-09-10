(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

//================================================================//
//*********** app.js ***********//
//*********** © Vorobey Alexander - Vorblex
//================================================================//

//------------ import

//------------ init

document.addEventListener('DOMContentLoaded', function (_) {

  function runTimer() {
    var second = 1e3;
    var container = document.getElementById('countdownTimer');
    var timerBox = container.firstElementChild;
    var c = container.childElementCount - 2;

    container.lastElementChild.style.display = 'none';
    timerBox.style.display = 'block';

    var interval = setInterval(function (_) {
      !c && clearInterval(interval);

      timerBox.style.display = 'none';
      timerBox = timerBox.nextElementSibling;
      timerBox.style.display = 'block';
      c--;
    }, second);
  }

  var screens = document.querySelectorAll('.screen');
  var counter = 0;
  var screen = void 0;

  var checkIsCountdown = function checkIsCountdown(screen) {
    return screen.getAttribute('id') === 'countdown';
  };

  prev.addEventListener('click', function (_) {
    counter--;
    counter < 0 && (counter = screens.length - 1);
    toggleScreen(counter);
    checkIsCountdown(screen) && runTimer();
  });

  next.addEventListener('click', function (_) {
    counter++;
    counter >= screens.length && (counter = 0);
    toggleScreen(counter);
    checkIsCountdown(screen) && runTimer();
  });

  function toggleScreen(index) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = screens[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var el = _step.value;

        el.style.display = 'none';
        screen = screens[index];
        screen.style.display = 'block';
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    checkIsCountdown(screen) && runTimer();
  }
});

},{}]},{},[1])

//# sourceMappingURL=maps/app.js.map
