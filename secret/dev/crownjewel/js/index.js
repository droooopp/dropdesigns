/*!
 * Credit: Crown Jewel, Inc.
 * Developer: Takayuki Suzuki
 * Site: https://crownjewel.co.jp/
 * Create: 2017.04.24
 * Modified: 2017.04.24
 * Memo: リニューアル [2017.04.24]
 *
 */




$(function() {
	var ua = navigator.userAgent.toLowerCase();
	var ver = navigator.appVersion.toLowerCase();
	var isMSIE;
	var isIE6;
	var isIE7;
	var isIE8;
	var isIE9;
	var isIE10;
	var isIE11;
	var isIE;
	var isEdge;

	__IEcheck();
	__message();
	__accordion();
	__slider();
	__smoothScroll();
	__topDrawer();


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
	 * メッセージアニメ実行
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
		 * メッセージアニメ設定
		 * ---------------------------------------- */

		function _message() {
			var txt = '今までの常識を変えて、人々を幸せに';
			var txtArr = txt.split('');
			var count = 0;
			var $subMessage = $('.hero_subMessage');
			var $message = $('.hero_messageSvg');
			var $scrollBtn = $('.hero_scrollBtn');

			function _txtCount() {
				var timer = setTimeout(_txtCount, 100);
				$subMessage.append(txtArr[count]);
					count++;
				if (count == txtArr.length) {
					clearTimeout(timer);
				}
			}

			setTimeout(function(){
				_txtCount();

				$subMessage
					.fadeIn(600);
				$message
					.animate({
						opacity:1
					});
				if(!isIE) {
					$message
						.addClass('hero_messageSvg-current');
				}else {
					$message
						.addClass('hero_messageSvg-ie')
						.animate({
							opacity: 1
						}
							,300
						);
				}
				setTimeout(function(){
					$scrollBtn
						.animate({
							bottom: 50,
							opacity: 1
						});
				},1400);

			},800);

		}


	}

	/**
	 * ------------------------------------------------------------
	 * スライダー実行
	 * ------------------------------------------------------------
	 */
	function __slider() {

		_init();



		/* ----------------------------------------
		 * 初期化
		 * ---------------------------------------- */

		function _init() {

			if(768 >= $(window).width()) {
				_topics();
				_gallery();
			}else {
				_galleryPc();
			}

		}



		/* ----------------------------------------
		 * トピックスのスライダー設定
		 * ---------------------------------------- */

		function _topics() {
			var $slideList = $('.topics_list');
				$slideList
				.slick({
					arrows: false,
					dots: true,
					slidesToShow: 1,
					adaptiveHeight: true
				});
			}


			/* ----------------------------------------
			 * ギャラリーのSPスライダー設定
			 * ---------------------------------------- */

			function _gallery() {
				var $slideList = $('.gallery_imgList');
					$slideList
					.slick({
						autoplay: true,
						autoplaySpeed: 4000,
						arrows: false,
						dots: true,
						slidesToShow: 1,
						adaptiveHeight: true
					});
				}


				/* ----------------------------------------
				 * ギャラリーのPCスライダー設定
				 * ---------------------------------------- */
				function _galleryPc() {
					var $slideList = $('.gallery_imgList');
						$slideList
						.slick({
							autoplay: true,
							autoplaySpeed: 4000,
							arrows: true,
							dots: true,
							slidesToShow: 1,
							adaptiveHeight: true,
							centerMode: true,
							variableWidth: true
						});
					}


	}




	/**
	 * ------------------------------------------------------------
	 * アコーディオン実行
	 * ------------------------------------------------------------
	 */
	function __accordion() {

		_init();



		/* ----------------------------------------
		 * 初期化
		 * ---------------------------------------- */

		function _init() {
			if(768 >= $(window).width()) {
				_setAccordion();
			}
		}



		/* ----------------------------------------
		 * アコーディオン設定
		 * ---------------------------------------- */

		function _setAccordion() {
			var $action = $('.company_itemHead');

			$action
				.click(function(){
					var $this = $(this);
					var parentClass = $this.parent();
					var content = $(parentClass).find('dd');

					if(!parentClass.hasClass('accordion-current')) {
						$(parentClass)
							.addClass('accordion-current');
						$(content)
							.slideDown(600,'easeInOutCirc');
					}else {
						$(parentClass)
							.removeClass('accordion-current');
						$(content)
							.slideUp(600,'easeInOutCirc');
					}
				});

		}


	}


	/**
	 * ------------------------------------------------------------
	 * スムーススクロール実行
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
		 * スムーススクロール設定
		 * ---------------------------------------- */

		function _smoothScroll() {
			var headerHight = 50;
		$('a[href*="#"],a[href*="/#"]').click(function(){
			var href= $(this).attr('href');
			var target = $(href == '#' || href == '' ? 'html' : href);
			var position = target.offset().top-headerHight;
			$('html, body').animate({scrollTop:position}, 1000, 'easeInOutQuint');
			return false;
		});

		}


	}


	/**
	 * ------------------------------------------------------------
	 * トップのみのドロワー実行
	 * ------------------------------------------------------------
	 */
	function __topDrawer() {

		_init();



		/* ----------------------------------------
		 * 初期化
		 * ---------------------------------------- */

		function _init() {
			_topDrawer();
		}



		/* ----------------------------------------
		 * トップのみのドロワー設定
		 * ---------------------------------------- */

		function _topDrawer() {
			var _$closeTrigger = $('.header_navLink');
			var _$drawerTrigger = $('.header_action');
			var _$header = $('.header');
			var _$drawer = $('.header_nav');
			var _$overlay = $('.header_overlay');

			_$closeTrigger
				.click(function(){
					if(_$drawerTrigger.hasClass('header_action-close')){
						_$drawer
							.fadeOut(100);
						_$drawerTrigger
							.removeClass('header_action-close')
							.addClass('header_action-current');
						_$header
							.animate({
								'height':'50px'
							}
								,300
								,'easeInExpo'
							);
						_$overlay
							.fadeOut(300);
						setTimeout(function(){
							_$drawerTrigger
								.removeClass('header_action-current');
						},300);
					}

				});

		}


	}



});
