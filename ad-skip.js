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
        var skipButton1 = document.querySelector('.ytp-ad-skip-button-text');
        if (skipButton1) {
            skipButton1.click();
            console.log("Click button");
        }
        var skipButton2 = document.querySelector('.ytp-skip-ad-button__text');
        if (skipButton2) {
            skipButton2.click();
            console.log("Click button");
        }
    }

    var timer = setInterval(skipAd, 1000);
})();
