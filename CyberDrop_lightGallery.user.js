// ==UserScript==
// @name         CyberDrop - lightGallery
// @namespace    https://github.com/LenAnderson/
// @downloadURL  https://github.com/LenAnderson/CyberDrop-lightGallery/raw/master/CyberDrop_lightGallery.user.js
// @version      1.0.0
// @description  Add lightGallery to CyberDrop.me
// @author       LenAnderson
// @match        https://cyberdrop.me/a/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.5.1.min.js
// ==/UserScript==

(function() {
    'use strict';

	const wait = async(millis)=>new Promise(resolve=>setTimeout(resolve, millis));


    const script = document.createElement('script'); {
		script.src = 'https://cdn.jsdelivr.net/combine/npm/lightgallery,npm/lg-autoplay,npm/lg-fullscreen,npm/lg-hash,npm/lg-pager,npm/lg-share,npm/lg-thumbnail,npm/lg-video,npm/lg-zoom';
		document.body.appendChild(script);
	}
	const css = document.createElement('link'); {
		css.rel = 'stylesheet';
		css.href = 'https://cdn.jsdelivr.net/npm/lightgallery@1.10.0/dist/css/lightgallery.css';
		document.body.appendChild(css);
	}
	const init = async()=>{
		while (!$('#table').lightGallery) {
			await wait(100);
		}
		$("#table").lightGallery({
			selector: 'a.image'
		});
	};
	init();
})();
