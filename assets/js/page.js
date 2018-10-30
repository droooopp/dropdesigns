/*!
 * D-ROP Designs
 * https://dropdesigns.tokyo
 *
 * 2018.06.01
 */



(function($, window, document, undefined) {
	var __$win = $(window);
	var __$body = $('body');
	var __winTop;
	var __winBottom;
	var __winWidth = __$win.width();
	var __winHeight = __$win.height();
	var __retina = window.devicePixelRatio;

	__heroShow();
	__imgModal();

	__$win
		.resize(function(){
			__winWidth = __$win.width();
		});

	__$win
		.scroll(function(){
			__winTop = __$win.scrollTop();
			__winBottom = __$win.scrollTop() + __$win.height();

			__imgAfterLoad();
			__imgSlide();
		});



	/* ----------------------------------------
	 * ヒーローshow
	 * ---------------------------------------- */
	function __heroShow() {
		_init();



		/* ----------------------------------------
		 * 初期化
		 * ---------------------------------------- */
		function _init() {
			$(function() {
				_heroImg();
				_heroBody();
			});
		}



		/* ----------------------------------------
		 * タイトル
		 * ---------------------------------------- */
		function _heroImg() {
			var $heroImg = $('.hero_image');

			$heroImg
				.addClass('hero_image-show')
				.animate({
					opacity:'1'
				},1000);
		}



		/* ----------------------------------------
		 * ボディー
		 * ---------------------------------------- */
		function _heroBody() {
			var $heroBody = $('.hero_body');

			$heroBody
				.delay(800)
				.animate({
					top:'0',
					opacity:'1'
				},1000);
		}
	}



	/**
	 * ------------------------------------------------------------
	 * 画像のあと読み
	 * ------------------------------------------------------------
	 */
	function __imgAfterLoad() {
		_init();



		/* ----------------------------------------
		 * 初期化
		 * ---------------------------------------- */
		function _init() {
			_findImg();
		}



		/* ----------------------------------------
		 * 設定
		 * ---------------------------------------- */
		function _findImg() {
			var $imgItem = $('.image_list').children();
			var worksTop;
			var worksBottom;
			var $img;
			var imgSrc;

			$.each($imgItem,function(index) {
				$this = $(this);

				worksTop = $this.offset().top;
				worksBottom = worksTop + $this.outerHeight();

				if(__winBottom >= worksTop) {
					$img = $this.find('img');

					_changeImg($img)
				}
			});
		}

		/* ----------------------------------------
		 * 読み込み処理
		 * ---------------------------------------- */
		function _changeImg($this) {
			var imgObj = new Image();
			var imgSrc;

			if(!$this.hasClass('imgCompleat')){
				imgSrc = $this.attr('data-src');
				imgObj.src = imgSrc;
				imgObj.onload = function() {
					$this.attr({src:imgObj.src}).removeAttr('data-src').addClass('imgCompleat');
				}
				$this
					.load(function(){
						$this.parent().addClass('image_itemImg-show');
					});
			}
		}
	}



	/**
	 * ------------------------------------------------------------
	 * モーダル
	 * ------------------------------------------------------------
	 */
	function __imgModal() {
		_init();



		/* ----------------------------------------
		 * 初期化
		 * ---------------------------------------- */
		function _init() {
			$(function() {
				if(__winWidth >= 768) {
					_buildElements();
					_openModal();
					_closeModal();
				}
				else {
					$('.modal')
						.remove();
				}
			});
		}



		/* ----------------------------------------
		 * 設定
		 * ---------------------------------------- */
		function _buildElements() {
			if($('.modal').length) {
				return false
			}

			var modalContent = [
				'<div class="modal">',
					'<div class="overlay"></div>',
					'<div class="modal_window">',
						'<div class="modal_container">',
							'<div class="modal_close"></div>',
							'<div class="modal_imageContainer"></div>',
						'</div>',
					'</div>',
				'</div>'
			].join('');

			__$body
				.append(modalContent);
		};



		/* ----------------------------------------
		 * モーダル表示
		 * ---------------------------------------- */
		function _openModal() {
			var $trigger = $('.image_itemImg');
			var image;
			var $modalImage = $('.modal_imageContainer');
			var $modalContainer = $('.modal_container');
			var $modal = $('.modal');
			var $this;
			var imageTag;
			var modalWidth;

			$trigger
				.click(function(){
					$this = $(this);
					image = $this.find('img').attr('src');
					imageTag = '<img src="' + image + '" class="modal_image">';

					__$body
						.addClass('showModal');

					if(__winWidth >= 1200){
						modalWidth = 1140;
					}
					else {
						modalWidth = __winWidth-60;
					}

					$modalContainer
						.css({width:modalWidth + 'px'});

					$modalImage
						.append(imageTag);

					$modal
						.fadeIn();
				});
		};



		/* ----------------------------------------
		 * モーダル閉じ
		 * ---------------------------------------- */
		function _closeModal() {
			var $trigger = $('.modal_close,.modal_window');
			var $modalImage = $('.modal_imageContainer');
			var $modal = $('.modal');
			var $modalWindow = $('.modal_window');
			var $this;

			$trigger
				.click(function(event){
					var target = $(event.target).attr('class');

					if(target == 'modal_container' || target == 'modal_imageContainer' || target == 'modal_image'){
						return false
					}

					__$body
						.removeClass('showModal');

					$modalWindow
						.animate({scrollTop: 0}, 300, 'swing');

					$modal
						.fadeOut(600);

					setTimeout(function() {
						$modalImage
							.empty();
					},600);
				});
		};
	}



	/**
	 * ------------------------------------------------------------
	 * イメージスライド
	 * ------------------------------------------------------------
	 */
	function __imgSlide() {
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
			var $imgItems = $('.image_list').children();
			var $imgMask;
			var imgTop;
			var imgBottom;
			var count;

			$.each($imgItems,function(index) {
				$this = $(this);
				$imgMask = $this.find('.image_itemImgMask');
				count = index+1;

				imgTop = $this.offset().top;
				imgBottom = imgTop + $this.outerHeight();

				if(__winBottom >= imgTop) {
					if(!$this.hasClass('show')){
						$this
							.addClass('show');
						$imgMask
							.animate({width:0},1000);
					}
				}
			});
		};
	}
})(jQuery, window, document);
