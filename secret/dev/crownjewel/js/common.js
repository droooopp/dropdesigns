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

	__menuDrawer();
	__viewport();


	/**
	 * ------------------------------------------------------------
	 * ドロワー実行
	 * ------------------------------------------------------------
	 */
	function __menuDrawer() {

		_init();



		/* ----------------------------------------
		 * 初期化
		 * ---------------------------------------- */

		function _init() {
			_drawer();
		}



		/* ----------------------------------------
		 * ドロワー設定
		 * ---------------------------------------- */

		function _drawer() {
				var _$drawerTrigger = $('.header_action');
				var _$header = $('.header');
				var _$drawer = $('.header_nav');
				var _$overlay = $('.header_overlay');
				var _drawerPosition = '-' + _$drawer.outerHeight()/2+60 + 'px';

				_$drawerTrigger
					.click(function() {
						if(!_$drawerTrigger.hasClass('header_action-close')) {
							_$drawerTrigger
								.addClass('header_action-current');
							_$drawer
								.css({
									marginTop: _drawerPosition
								});
							_$header
								.animate({
									'height':'100vh'
								}
									,300
									,'easeInExpo'
								);
							_$overlay
								.fadeIn(300);
							setTimeout(function(){
								_$drawer
									.fadeIn(300);
							},500);
							setTimeout(function(){
								_$drawerTrigger
									.removeClass('header_action-current')
									.addClass('header_action-close');
							},300);
						}else {
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


	/**
	 * ------------------------------------------------------------
	 * ビューポート実行
	 * ------------------------------------------------------------
	 */
	function __viewport() {

		_init();



		/* ----------------------------------------
		 * 初期化
		 * ---------------------------------------- */

		function _init() {
			_setViewport();
		}



		/* ----------------------------------------
		 * ビューポート設定
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
				$viewport = $('meta[name="viewport"]');
				$viewport
					.attr({
						content: 'width=1040'
					});
			}

		}


	}


});
