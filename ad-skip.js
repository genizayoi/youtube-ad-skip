// ==UserScript==
// @name         
// @namespace    youtube
// @version      1.0
// @description  
// @author       Joey Gambler, Gen Izayoi
// @match        *://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function skipAd() {
        var skipButton = document.querySelector('.ytp-ad-skip-button-text');
        if (skipButton) {
            skipButton.click();
            console.log("Click button");
        }
    }

    var timer = setInterval(skipAd, 1000);
})();
