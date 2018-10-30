/*!
 * D-ROP Designs
 * https://dropdesigns.tokyo
 *
 * 2018.06.01
 */



(function($, window, document, undefined) {
	var __$win = $(window);
	var __winTop;
	var __winWidth;

	__console();
	__glitchTxt();
	__humburger();
	__smoothScroll();
	__viewport();

	__$win
		.scroll(function() {
			__winTop = __$win.scrollTop();

			__parallax();
		});



	/**
	 * ------------------------------------------------------------
	 * ビューポート
	 * ------------------------------------------------------------
	 */
	function __viewport() {

		_init();



		/* ----------------------------------------
		 * 初期化
		 * ---------------------------------------- */

		function _init() {
			$(function() {
				_setViewport();
			});
		}



		/* ----------------------------------------
		 * 設定
		 * ---------------------------------------- */

		function _setViewport() {
			var getDevice = (function(){
				var ua = navigator.userAgent;
				if(ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0){
						return 'sp';
				}else if(ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0){
						return 'tab';
				}else{
						return 'other';
				}
			})();

			if( getDevice == 'tab' ){
				var $viewport = $('meta[name="viewport"]');
				$viewport
					.attr({
						content: 'width=1140'
					});
			}

		}
	}



	/**
	 * ------------------------------------------------------------
	 * コンソールログ
	 * ------------------------------------------------------------
	 */
	function __console() {
		_init();



		/* ----------------------------------------
		 * 初期化
		 * ---------------------------------------- */
		function _init() {
			_buildElements();
		}



		/* ----------------------------------------
		 * 設定
		 * ---------------------------------------- */
		function _buildElements() {
			console.log(
				"%c%s",
				"font-family:sans-serif; padding-left:10px; padding-right:10px; border-radius:6px; font-size:16px; color:#fff; background:-webkit-linear-gradient(35deg, #dd8467 35%,#fb377d 70%);",
				"D-ROP Designs"
			);
		}
	}



	/**
	 * ------------------------------------------------------------
	 * テキストグリッチ
	 * ------------------------------------------------------------
	 */
	function __glitchTxt() {
		_init();



		/* ----------------------------------------
		 * 初期化
		 * ---------------------------------------- */
		function _init() {
			$(function() {
				_buildElements();
			});
		}



		/* ----------------------------------------
		 * 設定
		 * ---------------------------------------- */
		function _buildElements() {
			var $greenTop = $('.border_top .border_text-green');
			var $pinkTop = $('.border_top .border_text-pink');
			var $greenLeft = $('.border_left .border_text-green');
			var $pinkLeft = $('.border_left .border_text-pink');
			var $greenRight = $('.border_right .border_text-green');
			var $pinkRight = $('.border_right .border_text-pink');
			var num = 0;
			var min;
			var max;
			var ranNum;
			var shadow;

			setInterval(function(){
				min = -2 ;
				max = 4 ;
				ranNum = Math.floor( Math.random() * (max + 1 - min) ) + min + 'px';
				shadow = ranNum +' 0 #fb377d';

				$pinkTop.css({
					'left':ranNum
				});
				$pinkLeft.css({
					'text-shadow':shadow
				});
				$pinkRight.css({
					'text-shadow':shadow
				});
			}, 300);

			setInterval(function(){
				min = -2 ;
				max = 4 ;
				ranNum = Math.floor( Math.random() * (max + 1 - min) ) + min + 'px';
				shadow = ranNum +' 0 #00fd52';

				$greenTop.css({
					'left':ranNum
				});
				$greenLeft.css({
					'text-shadow':shadow
				});
				$greenRight.css({
					'text-shadow':shadow
				});
			}, 200);
		};
	}



	/**
	 * ------------------------------------------------------------
	 * 背景パララックス
	 * ------------------------------------------------------------
	 */
	function __parallax() {
		_init();



		/* ----------------------------------------
		 * 初期化
		 * ---------------------------------------- */
		function _init() {
			$(function() {
				_buildElements();
			});
		}



		/* ----------------------------------------
		 * 設定
		 * ---------------------------------------- */
		function _buildElements() {
			var scrolledDot = __winTop*0.15 + 'px';
			var scrolledGrid = __winTop*0.15 + 'px';
			var $bg_dot = $('.bg_dot');
			var $bg_grid = $('.bg_grid');

			$bg_dot
				.css('background-position-x',scrolledDot);
			$bg_grid
				.css('background-position-x',scrolledGrid);
		};
	}



	/**
	 * ------------------------------------------------------------
	 * ハンバーガーメニュー
	 * ------------------------------------------------------------
	 */
	function __humburger() {
		_$body = $('body');
		_$nav = $('.nav_container');
		_init();



		/* ----------------------------------------
		 * 初期化
		 * ---------------------------------------- */
		function _init() {
			$(function() {
				__winWidth = __$win.width();

				_menuOpen();
				if(__winWidth >= 768) {
				}
				else {
					_menuClose();
				}
			});
		}



		/* ----------------------------------------
		 * オープン
		 * ---------------------------------------- */
		function _menuOpen() {
			var $humburger = $('.menuIco_hamburger');

			$humburger
				.click(function(){
					var $this = $(this);
					var $close = $('.menuIco_close');
					var $menuIco = $('.menuIco');

					if(!$menuIco.hasClass('menuIco-current')){
						__$win
							.on('touchmove.noScroll', function(e) {
								e.preventDefault();
							});
						_$body
							.addClass('showNav');
						$humburger
							.hide();
						$menuIco
							.addClass('menuIco-current');
						setTimeout(function(){
							$close
								.fadeIn();
							_$nav
								.show()
								.animate({'opacity':'1'},600);
						},600);
					}
				});
		};



		/* ----------------------------------------
		 * クローズ
		 * ---------------------------------------- */
		function _menuClose() {
			var $closeTrigger = $('.menuIco_close,.nav_itemLink');
			var $close = $('.menuIco_close');


			$closeTrigger
				.click(function(){
					var $menuIco = $('.menuIco');
					var $humburger = $('.menuIco_hamburger');

					__$win
						.off('.noScroll');
					_$body
						.removeClass('showNav');
					$menuIco
						.removeClass('menuIco-current');
					$close
						.hide();
					_$nav
						.animate({'opacity':'0'},600)
						.hide();
					setTimeout(function(){
						$humburger
							.fadeIn();
					},400);
				});
		};
	}



	/**
	 * ------------------------------------------------------------
	 * スムーススクロール
	 * ------------------------------------------------------------
	 */
	function __smoothScroll() {

		_init();



		/* ----------------------------------------
		 * 初期化
		 * ---------------------------------------- */

		function _init() {
			_smoothScroll();
		}



		/* ----------------------------------------
		 * 設定
		 * ---------------------------------------- */

		function _smoothScroll() {
			var $trigger = $('a[href*="#"],a[href*="/#"]');
			var borderTop;

			$trigger
				.click(function() {
					borderTop = $('.border_top').outerHeight();
					var href= $(this).attr('href');
					var $target = $(href == '#' || href == '' ? 'html' : href);
					var position = $target.offset().top-borderTop;

					$('html, body')
						.animate({scrollTop:position}, 400, 'swing');

					return false;
				});
		}
	}
})(jQuery, window, document);
