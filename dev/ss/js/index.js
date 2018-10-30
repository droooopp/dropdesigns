/*!
 * SAITO SEIYA PORTFOLIO
 * http://saitoseiya.com/
 * Developer: Takayuki Suzuki
 *
 * 2017.05.23: �����[�X
 */



(function($, window, document, undefined) {
	var __$win = $(window);
	var __$doc = $(document);
	var __$html = $('html');

	__sort();
	__viewport();
	__heroSlider();
	__gallerySlider();
	__smoothScroll();
	__modal();
	__formResult();


	__$win
		.scroll(function() {
			__headerSticky();
		});


/**
	 * ------------------------------------------------------------
	 * �\�[�g���s
	 * ------------------------------------------------------------
	 */
	function __sort() {
		var $sortItemDesign = $('#gallery_list_design .gallery_listItem');
		var $sortItemPhoto = $('#gallery_list_photo .gallery_listItem');
		var $sortItemDefault = $('.gallery_list-default');

		_init();



		/* ----------------------------------------
		 * �\�[�g������
		 * ---------------------------------------- */

		function _init() {
			var winW = __$win.width();
			var $listDesign = $('#gallery_list_design');
			var $listPhoto = $('#gallery_list_photo');

			if (winW >= 767) {
				$listDesign
					.append(
						'<ul class="gallery_list" id="designSort01"></ul>',
						'<ul class="gallery_list" id="designSort02"></ul>',
						'<ul class="gallery_list" id="designSort03"></ul>'
					);
				$listPhoto
					.append(
						'<ul class="gallery_list" id="photoSort01"></ul>',
						'<ul class="gallery_list" id="photoSort02"></ul>'
					);

				_setSortPc();
			}
			else {
				$listDesign
					.append(
						'<ul class="gallery_list" id="designSort01"></ul>',
						'<ul class="gallery_list" id="designSort02"></ul>',
						'<ul class="gallery_list" id="designSort03"></ul>',
						'<ul class="gallery_list" id="designSort04"></ul>',
						'<ul class="gallery_list" id="designSort05"></ul>'
					);
				$listPhoto
					.append(
						'<ul class="gallery_list" id="photoSort01"></ul>',
						'<ul class="gallery_list" id="photoSort02"></ul>',
						'<ul class="gallery_list" id="photoSort03"></ul>'
					);

				_setSortSp();
			}

		}



		/* ----------------------------------------
		 * �\�[�g�\�z�X�}�z
		 * ---------------------------------------- */

		function _setSortSp() {

			$sortItemDesign
				.each(function(i) {
					var $this = $(this);

					if (i<=5) {
						$this.remove();
						$('#designSort01').append($this);
					}
					else if (i>=6 && i<=11) {
						$this.remove();
						$('#designSort02').append($this);
					}
					else if (i>=12 && i<=17) {
						$this.remove();
						$('#designSort03').append($this);
					}
					else if (i>=18 && i<=23) {
						$this.remove();
						$('#designSort04').append($this);
					}
					else if (i>=24 && i<=29) {
						$this.remove();
						$('#designSort05').append($this);
					}

			});

			$sortItemPhoto
				.each(function(i) {
					var $this = $(this);

					if (i<=5) {
						$this.remove();
						$('#photoSort01').append($this);
					}
					else if (i>=6 && i<=11) {
						$this.remove();
						$('#photoSort02').append($this);
					}
					else if (i>=12 && i<=17) {
						$this.remove();
						$('#photoSort03').append($this);
					}
					else if (i>=18 && i<=19) {
						$this.remove();
					}

			});

			$sortItemDefault.remove();

		}


		/* ----------------------------------------
		 * �\�[�g�\�z�p�\�R��
		 * ---------------------------------------- */

		function _setSortPc() {

			$sortItemDesign
				.each(function(i) {
					var $this = $(this);

					if (i<=9) {
						$this.remove();
						$('#designSort01').append($this);
					}
					else if (i>=10 && i<=19) {
						$this.remove();
						$('#designSort02').append($this);
					}
					else if (i>=20 && i<=29) {
						$this.remove();
						$('#designSort03').append($this);
					}

			});

			$sortItemPhoto
				.each(function(i) {
					var $this = $(this);

					if (i<=9) {
						$this.remove();
						$('#photoSort01').append($this);
					}
					else if (i>=10 && i<=19) {
						$this.remove();
						$('#photoSort02').append($this);
					}

			});

			$sortItemDefault.remove();

		}


	}




/**
	 * ------------------------------------------------------------
	 * �r���[�|�[�g���s
	 * ------------------------------------------------------------
	 */
	function __viewport() {

		_init();



		/* ----------------------------------------
		 * �r���[�|�[�g������
		 * ---------------------------------------- */

		function _init() {

			_setViewport();

		}



		/* ----------------------------------------
		 * �r���[�|�[�g�\�z
		 * ---------------------------------------- */

		function _setViewport() {

			var getDevice = (function() {
				var ua = navigator.userAgent;
				if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
						return 'sp';
				}
				else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
						return 'tab';
				}
				else {
						return 'other';
				}
			})();

			if ( getDevice == 'tab' ) {
				$viewport = $('meta[name="viewport"]');

				$viewport
					.attr({
						content: 'width=1100'
					});
			}

		}


	}




	/**
	 * ------------------------------------------------------------
	 * �q�[���[�X���C�_�[���s
	 * ------------------------------------------------------------
	 */
	function __heroSlider() {

		_init();



		/* ----------------------------------------
		 * �q�[���[�X���C�_�[������
		 * ---------------------------------------- */

		function _init() {

			_buildElements();

		}



		/* ----------------------------------------
		 * �q�[���[�X���C�_�[�\�z
		 * ---------------------------------------- */

		function _buildElements() {
			var $heroSlider = $('.hero_slider');

				$heroSlider
					.bxSlider({
						mode: 'fade',
						speed: 2000,
						pause: 5000,
						auto: true,
						pager: false,
						controls: false,
						touchEnabled: false
					});
		}

	}


	/**
	 * ------------------------------------------------------------
	 * �M�������[�X���C�_�[���s
	 * ------------------------------------------------------------
	 */
	function __gallerySlider() {

		_init();



		/* ----------------------------------------
		 * �M�������[�X���C�_�[������
		 * ---------------------------------------- */

		function _init() {

			_buildElements();

		}



		/* ----------------------------------------
		 * �M�������[�X���C�_�[�\�z
		 * ---------------------------------------- */

		function _buildElements() {
			var $galleryContainer = $('.gallery_listContainer');

			$galleryContainer
				.slick({
					draggable:false,
					dots:false,
					slidesToShow: 1,
					slidesToScroll: 1,
					autoplay: false,
					autoplaySpeed: 5000
				});

		}

	}


	/**
	 * ------------------------------------------------------------
	 * �X���[�X�X�N���[�����s
	 * ------------------------------------------------------------
	 */
	function __smoothScroll() {

		_init();



		/* ----------------------------------------
		 * �X���[�X�X�N���[��������
		 * ---------------------------------------- */

		function _init() {

			_buildElements();

		}



		/* ----------------------------------------
		 * �X���[�X�X�N���[���\�z
		 * ---------------------------------------- */

		function _buildElements() {
			var headerHight = 0;
			var $target = $('a[href*="#"],a[href*="/#"]');

			$target
				.click(function() {
					var href= $(this).attr('href');
					var target = $(href == '#' || href == '' ? 'html' : href);
					var position = target.offset().top-headerHight;
					var $animateBody = $('html, body');

					$animateBody
						.animate(
							{scrollTop:position},
							1000,
							'easeInOutQuint'
						);
					return false;

				});
		}

	}



	/**
	 * ------------------------------------------------------------
	 * ���[�_�����s
	 * ------------------------------------------------------------
	 */
	function __modal() {

		_init();



		/* ----------------------------------------
		 * ���[�_��������
		 * ---------------------------------------- */

		function _init() {
			_buildElements();
		}



		/* ----------------------------------------
		 * ���[�_���\�z
		 * ---------------------------------------- */

		function _buildElements() {
			var $action = $('.gallery_listItem');
			var $close = $('.modal_close,.modal_overlay');
			var $modalContent =$('.modal_content');
			var $overlay = $('.modal_overlay');
			var scroll;

			$action
				.one('click',function() {
					var $this = $(this);
					var modalName = $this.attr('data-modal-link');
					var modal = '#' + modalName;
					var $modal = $(modal);
					var $imgs = $modal.find('[data-img-src]');

					$imgs
						.each(function() {
							var $img = $(this);
							var dataSrc = $img.data('img-src');

							$img
								.attr({
									src:dataSrc
								});

							if($img.hasClass('loading')) {
								$img
									.bind("load", function(){
										$img.removeClass('loading');
									});
							}

						});
				});

			$action
				.click(function(){
					var $this = $(this);
					var modalName = $this.data('modal-link');
					var modal = '#' + modalName;
					var $modal = $(modal)
					scroll = window.pageYOffset;
					var modalPosition = scroll + 40 + 'px';

					$overlay
						.fadeIn(800, 'swing');

					$modal
						.fadeIn(800, 'swing')
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
					$('html, body').animate({scrollTop:scroll}, 300, 'easeInOutQuint');
				});

		}

	}


/**
	 * ------------------------------------------------------------
	 * �w�b�_�[���s
	 * ------------------------------------------------------------
	 */
	function __headerSticky() {

		_init();



		/* ----------------------------------------
		 * �w�b�_�[������
		 * ---------------------------------------- */

		function _init() {
			_buildElements();
		}



		/* ----------------------------------------
		 * �w�b�_�[�\�z
		 * ---------------------------------------- */

		function _buildElements() {
			var $header =  $('.header_container');
			var heroH = $('.hero_container').height();
			var winW = __$win.width();
			var scroll = window.pageYOffset;

			if(winW >= 767) {
				if(scroll>=heroH) {
					$header.css({top:'0'});
				}
				else {
					$header.css({top:'-60px'});
				}
			}
			else {
				if(scroll>=heroH) {
					$header.css({bottom:'0',top:'auto'});
				}
				else {
					$header.css({bottom:'-80px',top:'auto'});
				}
			}

		}


	}



	/**
		 * ------------------------------------------------------------
		 * �t�H�[�����ʎ��s
		 * ------------------------------------------------------------
		 */
		function __formResult() {

			_init();



			/* ----------------------------------------
			 * �t�H�[�����ʏ�����
			 * ---------------------------------------- */

			function _init() {
				_buildElements();
			}



			/* ----------------------------------------
			 * �t�H�[�����ʍ\�z
			 * ---------------------------------------- */

			function _buildElements() {
				var urlHash = location.hash
				var $success = $('#formSuccess');
				var $failed = $('#formFailed');
				var $content = $('.contactModal_content');
				var $overlay = $('.contactModal_overlay');
				var $close = $('.contactModal_close,.contactModal_overlay');

				if(urlHash == '#success') {
					$overlay.fadeIn();
					$success.fadeIn();
				}
				else if(urlHash == '#failed') {
					$overlay.fadeIn();
					$failed.fadeIn();
				}


				$close
					.click(function(){
						$overlay.fadeOut();
						$content.fadeOut();
					});

			}


		}


})(jQuery, window, document);
