/*!
 * Credit: Wavelets
 * Developer: Takayuki Suzuki
 * Site: http://wavelets.jp/
 * Create: 2018.01.25
 * Modified: 2018.02.18
 * Memo: スライダー追加 [2018.02.18]
 * Memo: リリース [2018.01.25]
 *
 */



(function($, window, document, undefined) {

	var __$win = $(window);
	var __$doc = $(document);
	var __$html = $('html');

	//__IEcheck();

	$(function() {
		__pageHash();
		__message();
		__glitch();
		__smoothScroll();
		__slider();
	});

	__$doc.ready(function(){
		setTimeout(function(){
			__loading();
		},3000);
	});

	__$win.scroll(function(e){
		__parallax();
	});

	__$win.resize(function(){
		__movieSize();
	});
	__$win.load(function(){
		__movieSize();
	});



	/**
	 * ------------------------------------------------------------
	 * IEチェック実行
	 * ------------------------------------------------------------
	 */
	function __IEcheck() {

		_init();



		/* ----------------------------------------
		 * 初期化
		 * ---------------------------------------- */

		function _init() {
			_IEchecker();
		}



		/* ----------------------------------------
		 * ユーザーエージェント設定
		 * ---------------------------------------- */

		function _IEchecker() {
			// IE(11以外)
			isMSIE = (ua.indexOf('msie') > -1) && (ua.indexOf('opera') == -1);
			// IE6
			isIE6 = isMSIE && (ver.indexOf('msie 6.') > -1);
			// IE7
			isIE7 = isMSIE && (ver.indexOf('msie 7.') > -1);
			// IE8
			isIE8 = isMSIE && (ver.indexOf('msie 8.') > -1);
			// IE9
			isIE9 = isMSIE && (ver.indexOf('msie 9.') > -1);
			// IE10
			isIE10 = isMSIE && (ver.indexOf('msie 10.') > -1);
			// IE11
			isIE11 = (ua.indexOf('trident/7') > -1);
			// IE
			isIE = isMSIE || isIE11;
			// Edge
			isEdge = (ua.indexOf('edge') > -1);
		}


	}



	/**
	 * ------------------------------------------------------------
	 * アンカーありかどうか
	 * ------------------------------------------------------------
	 */
	function __pageHash() {

		_init();



		/* ----------------------------------------
		 * 初期化
		 * ---------------------------------------- */

		function _init() {
			_pageHash();
		}



		/* ----------------------------------------
		 * 設定
		 * ---------------------------------------- */

		function _pageHash() {
			var urlHash = location.hash;

			if(urlHash){
				var $message = $('.loader_messageSvg');
				var $content = $('.body');

				$message
					.hide();
				$content
					.animate({opacity:'1'},1200);
			}

		}
	}



	/**
	 * ------------------------------------------------------------
	 * Loading
	 * ------------------------------------------------------------
	 */
	function __message() {

		_init();



		/* ----------------------------------------
		 * 初期化
		 * ---------------------------------------- */

		function _init() {
			_message();
		}



		/* ----------------------------------------
		 * 設定
		 * ---------------------------------------- */

		function _message() {
			var $message = $('.loader_messageSvg');


			setTimeout(function(){
				$message
					.animate({
						opacity:1
					});
				$message
					.addClass('loader_messageSvg-current');
			},800);

		}
	}



	/**
	 * ------------------------------------------------------------
	 * Loading削除
	 * ------------------------------------------------------------
	 */
	function __loading() {

		_init();



		/* ----------------------------------------
		 * 初期化
		 * ---------------------------------------- */

		function _init() {
			_loading();
		}



		/* ----------------------------------------
		 * 設定
		 * ---------------------------------------- */

		function _loading() {
			var $message = $('.loader');
			var $content = $('.body');

			$message
				.fadeOut();

			setTimeout(function(){
				$content
					.animate({opacity:'1'},1200);
			},800);

		}
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
			var headerHight = 50;
		$('a[href*="#"],a[href*="/#"]').click(function(){
			var href= $(this).attr('href');
			var target = $(href == '#' || href == '' ? 'html' : href);
			var position = target.offset().top-headerHight;
			$('html, body').animate({scrollTop:position}, 1000, 'easeInOutQuint');

			if(768 >= $(window).width()) {
				$('.header')
					.removeClass('header-active')
					.animate({height:'50px'});
				$('.header_nav').fadeOut();
			}

			return false;
		});

		}


	}



	/**
	 * ------------------------------------------------------------
	 * スライダー
	 * ------------------------------------------------------------
	 */
	function __slider() {

		_init();



		/* ----------------------------------------
		 * 初期化
		 * ---------------------------------------- */

		function _init() {
			_setSlider();
		}



		/* ----------------------------------------
		 * 設定
		 * ---------------------------------------- */

		function _setSlider() {
			$('.hero_movie').slick({
					infinite: true,
					dots: true,
					centerMode: true,
					arrows: true,
					variableWidth: true,
					slidesToScroll: 1,
					draggable: true,
					autoplay: true,
					autoplaySpeed: 8000
				});

		}


	}



/**
 * ------------------------------------------------------------
 * グリッチ
 * ------------------------------------------------------------
 */
function __glitch() {

	_init();



	/* ----------------------------------------
	 * 初期化
	 * ---------------------------------------- */

	function _init() {
		_setGlitch();
	}



	/* ----------------------------------------
	 * 設定
	 * ---------------------------------------- */

	function _setGlitch() {
		var $trigger = $('.about_artistImg');

		$trigger
			.mgGlitch({
						// set 'true' to stop the plugin
						destroy : false,
						// set 'false' to stop glitching
						glitch: true,
						// set 'false' to stop scaling
						scale: true,
						// set 'false' to stop glitch blending
						blend : true,
						// select blend mode type
						blendModeType : 'multiply',
						// set min time for glitch 1 elem
						glitch1TimeMin : 600,
						// set max time for glitch 1 elem
						glitch1TimeMax : 800,
						// set min time for glitch 2 elem
						glitch2TimeMin : 30,
						// set max time for glitch 2 elem
						glitch2TimeMax : 200,
			});

	}
}



/**
 * ------------------------------------------------------------
 * パララックス
 * ------------------------------------------------------------
 */
function __parallax() {

	_init();



	/* ----------------------------------------
	 * 初期化
	 * ---------------------------------------- */

	function _init() {
		_setParallax();
	}



	/* ----------------------------------------
	 * 設定
	 * ---------------------------------------- */

	function _setParallax() {
		var scrolled = __$win.scrollTop();
		var scrolledBg = scrolled*0.08 + 'px';
		var $parallaxBg = $('.about')

		$parallaxBg
			.css('background-position',scrolledBg);
	}
}



/**
 * ------------------------------------------------------------
 * 動画可変
 * ------------------------------------------------------------
 */
function __movieSize() {

	if(768 >= $(window).width()) {
		_init();
	}



	/* ----------------------------------------
	 * 初期化
	 * ---------------------------------------- */

	function _init() {
		_setMovieSize();
	}



	/* ----------------------------------------
	 * 設定
	 * ---------------------------------------- */

	function _setMovieSize() {
		var wW = $(window).width() - 30;
		var mH = (wW/16)*9;
		var $movieFrame = $('.hero_movieFrame');

		$movieFrame
			.css({'width':wW ,'height':mH });

	}
}


})(jQuery, window, document);
