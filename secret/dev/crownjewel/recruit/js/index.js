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

	__accordion();
	__modal();


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
			_setAccordion();
		}



		/* ----------------------------------------
		 * アコーディオン設定
		 * ---------------------------------------- */

		function _setAccordion() {
			var $action = $('.entry_itemHead');

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
	 * モーダル実行
	 * ------------------------------------------------------------
	 */
	function __modal() {

		_init();



		/* ----------------------------------------
		 * 初期化
		 * ---------------------------------------- */

		function _init() {
			_setModal();
		}



		/* ----------------------------------------
		 * モーダル設定
		 * ---------------------------------------- */

		function _setModal() {
			var $action = $('.interview_link');
			var $close = $('.close_topIco,.close_bottomIco');
			var $modalContent =$('.modal_content');
			var $overlay = $('.modal_overlay');
			var scroll;

			$action
				.click(function(){
					var $this = $(this);
					var modalName = $this.attr('data-modal-link');
					var modal = '#' + modalName;
					var $modal = $(modal)
					scroll = window.pageYOffset;
					var modalPosition = scroll + 20 + 'px';

					$overlay
						.fadeIn();

					$modal
						.fadeIn()
						.css({
							top:modalPosition
						});

				});

			$close
				.click(function(){
					$modalContent
						.fadeOut();
					$overlay
						.fadeOut();
					$('html, body').animate({scrollTop:scroll}, 1000, 'easeInOutQuint');
				});

		}


	}



});
