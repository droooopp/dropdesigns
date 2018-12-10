/*!
 * Credit: Wavelets
 * Developer: Takayuki Suzuki
 * Site: http://wavelets.jp/
 * Create: 2018.XX.XX
 * Modified: 2018.XX.XX
 * Memo: リリース [2018.XX.XX]
 *
 */



(function($, window, document, undefined) {

	var __$win = $(window);
	var __$doc = $(document);
	var __$html = $('html');



	$(function() {
		__menu();
		__viewport();
	});



	/**
	 * ------------------------------------------------------------
	 * メニュー
	 * ------------------------------------------------------------
	 */
	function __menu() {

		_init();



		/* ----------------------------------------
		 * 初期化
		 * ---------------------------------------- */

		function _init() {
			_setMenu();
		}



		/* ----------------------------------------
		 * 設定
		 * ---------------------------------------- */

		function _setMenu() {
			var $trigger = $('.header_action');
			var $this;
			var $parent;
			var $menu = $('.header_nav');

			$trigger
				.click(function(){
					$this = $(this);
					$parent = $this.parent().parent().parent().find('.header')

					if(!$parent.hasClass('header-active')){
						$parent
							.addClass('header-active')
							.animate({height:'100%'});
						$menu
							.fadeIn();
					}
					else if ($parent.hasClass('header-active')) {
						$menu
							.fadeOut();
						$parent
							.removeClass('header-active')
							.animate({height:'50px'});
					}



				});

		}
	}



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
		_setViewport();
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
					content: 'width=1040'
				});
		}

	}
}



})(jQuery, window, document);
