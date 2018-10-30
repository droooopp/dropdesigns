/*!
 * D-ROP Designs
 * https://dropdesigns.tokyo
 *
 * 2018.06.01
 */



(function($, window, document, undefined) {
	var __$win = $(window);
	var __winTop;
	var __winBottom;
	var __winWidth = __$win.width();
	var __winHeight = __$win.height();
	var __retina = window.devicePixelRatio;

	__heroGeometry();
	__heroShow();
	//__frameText();

	__$win
		.scroll(function(){
			__winTop = __$win.scrollTop();
			__winBottom = __$win.scrollTop() + __$win.height();

			__imgAfterLoad();
			__worksSlide();
		});



	/**
	 * ------------------------------------------------------------
	 * フレームの文字
	 * ------------------------------------------------------------
	 */
	function __frameText() {
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
			var $borderContainer = $('.border_container');

			setTimeout(function() {
				$borderContainer
					.removeClass('border_text-hide')
					.addClass('border-glitch');
			},600);

		};
	}



	/**
	 * ------------------------------------------------------------
	 * ヒーローshow
	 * ------------------------------------------------------------
	 */
	function __heroShow() {
		_init();



		/* ----------------------------------------
		 * 初期化
		 * ---------------------------------------- */
		function _init() {
			$(function() {
				_heroTtl();
				_heroBody();
			});
		}



		/* ----------------------------------------
		 * タイトル
		 * ---------------------------------------- */
		function _heroTtl() {
			var $heroTtl = $('.hero_ttl');
			var space;
			if(__winWidth >= 768) {
				space = '20px';
			}
			else {
				space = '7px';
			}

			$heroTtl
				.animate({
					letterSpacing:space,
					opacity:'1'
				},1000);
		}



		/* ----------------------------------------
		 * ボディー
		 * ---------------------------------------- */
		function _heroBody() {
			var $heroBody = $('.hero_container');

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
			var $worksItem = $('.works_list').children();
			var worksTop;
			var worksBottom;
			var $img;
			var imgSrc;

			$.each($worksItem,function(index) {
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
				if(__retina >= 2) {
					imgSrc = $this.attr('data-src') + '_2x.png';
				}
				else {
					imgSrc = $this.attr('data-src') + '.png';
				}
				imgObj.src = imgSrc;
				imgObj.onload = function() {
					$this.attr({src:imgObj.src}).removeAttr('data-src').addClass('imgCompleat');
				}
				$this
					.load(function(){
						$this.parent().addClass('works_itemImg-show');
					});
			}
		}
	}



	/**
	 * ------------------------------------------------------------
	 * ヒーロージオメトリー
	 * ------------------------------------------------------------
	 */
	function __heroGeometry() {
		var _renderer;
		var _scene;
		var _camera;
		var _skelet;
		var _heroHeight;

		if(__winWidth >= 768) {
			_heroHeight = '400';
		}
		else {
			_heroHeight = '200';
		}

		_init();



		/* ----------------------------------------
		 * 初期化
		 * ---------------------------------------- */
		function _init() {
				_buildElements();
				_animate();
				_resize();
		}



		/* ----------------------------------------
		 * 設定
		 * ---------------------------------------- */
		function _buildElements() {
			_renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
			_renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);
			_renderer.setSize(400, _heroHeight);
			_renderer.autoClear = false;
			_renderer.setClearColor(0xffffff, 0.0);
			document.getElementById('hero_canvas').appendChild(_renderer.domElement);

			_scene = new THREE.Scene();
			_camera = new THREE.PerspectiveCamera(75, 400 / _heroHeight, 1, 1000);
			_camera.position.z = 100;
			_scene.add(_camera);
			_skelet = new THREE.Object3D();
			_scene.add(_skelet);

			if(__winWidth >= 768) {
				var geom = new THREE.IcosahedronGeometry(16, 3);
			}
			else {
				var geom = new THREE.IcosahedronGeometry(16, 2);
			}
			var mat = new THREE.MeshPhongMaterial({
				color: 0xfb377d,
				wireframe: true,
				side: THREE.DoubleSide,
				shading: THREE.FlatShading
			});

			var planet = new THREE.Mesh(geom, mat)
			planet.scale.x = planet.scale.y = planet.scale.z = 10;
			_skelet.add(planet);
			var ambientLight = new THREE.AmbientLight(0xffffff );
			_scene.add(ambientLight);
		}



		/* ----------------------------------------
		 * アニメーション
		 * ---------------------------------------- */
		function _animate() {
			requestAnimationFrame(_animate);
			_skelet.rotation.x -= 0.0010;
			_skelet.rotation.y += 0.0020;
			_renderer.clear();
			_renderer.render( _scene, _camera )
		}



		/* ----------------------------------------
		 * リサイズ
		 * ---------------------------------------- */
		function _resize() {
			__$win
				.resize(function() {
					__winWidth = __$win.width();
					__winHeight = __$win.height();
					if(__winWidth >= 768) {
						_heroHeight = '400';
					}
					else {
						_heroHeight = '200';
					}

					_renderer.setPixelRatio(window.devicePixelRatio);
					_renderer.setSize(400, _heroHeight);
					_renderer.render(_scene, _camera);
					_camera.aspect = 400 / _heroHeight;
					_camera.updateProjectionMatrix();
				});
		}
	}



	/**
	 * ------------------------------------------------------------
	 * ワークススライド
	 * ------------------------------------------------------------
	 */
	function __worksSlide() {
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
			var $worksItem = $('.works_list').children();
			var $worksMask;
			var $worksLead;
			var worksTop;
			var worksBottom;
			var count;

			$.each($worksItem,function(index) {
				$this = $(this);
				$worksMask = $this.find('.works_itemImgMask');
				$worksLead = $this.find('.works_itemLead');
				count = index+1;

				worksTop = $this.offset().top;
				worksBottom = worksTop + $this.outerHeight();

				if(__winBottom >= worksTop) {
					if(!$this.hasClass('show')){
						$this
							.addClass('show');
						$worksMask
							.animate({height:0},1000);
						$worksLead
							.animate({bottom:'-30%'},1000);
					}
				}
			});
		};
	}
})(jQuery, window, document);
