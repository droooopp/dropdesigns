/*!
 * D-ROP Designs
 * https://dropdesigns.tokyo
 *
 * 2018.06.01
 */



(function($, window, document, undefined) {
	var __$win = $(window);

	__loading();



	/**
	 * ------------------------------------------------------------
	 * ローディング
	 * ------------------------------------------------------------
	 */
	function __loading(){
		_init();



		/* ----------------------------------------
		 * 初期化
		 * ---------------------------------------- */
		function _init() {

			_forcedRemove();
			__$win
				.load(function() {
					setTimeout(function(){
						_removeLoader();
					},2000);
			});
		}



		/* ----------------------------------------
		 * ローダーリムーブ
		 * ---------------------------------------- */
		function _removeLoader(){
			var $loader = $('.loader');
			var $border_top = $('.border_top');
			var $body = $('body');

			$loader
				.addClass('hide')
				.hide();
			$body
				.removeClass('showNav');
			$border_top
				.removeClass('border_loading');

			_heroTtl();
			_heroText();
		};



		/* ----------------------------------------
		 * ローダー強制終了
		 * ---------------------------------------- */
		function _forcedRemove(){
			setTimeout(function(){
				var $loader = $('.loader');
				if(!$loader.hasClass('hide')){
						_removeLoader();
						_heroShow()
				}
			},10000);
		};



		/* ----------------------------------------
		 * ヒーロータイトル
		 * ---------------------------------------- */
		function _heroTtl() {
			var $hero = $('#hero');
			var $heroTtl = $('.hero_ttl');

			$hero
				.addClass('hero-show');
			$heroTtl
				.animate({opacity:1});
		}



		/* ----------------------------------------
		 * ヒーローテキスト
		 * ---------------------------------------- */
		function _heroText() {
			var $heroLead = $('.hero_lead');
			var $heroBtn = $('.hero_arrow');

			$heroLead
				.delay(1200)
				.animate({
					opacity:'1',
					letterSpacing:'2px'
				},1000);

			$heroBtn
				.delay(1800)
				.animate({
					opacity:'1'
				},1000);

		}

	}
})(jQuery, window, document);
