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

	__heroSquare();
	__aboutGeometry();
	__aboutText()

	__$win
		.scroll(function() {
			__winTop = __$win.scrollTop();
			__winBottom = __$win.scrollTop() + __$win.height();

			__frameText();
			__aboutText();
			__imgAfterLoad();
			__worksSlide();
			__contact();
			__profile();
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
			var $hero = $('#hero');
			var heroTop = $hero.offset().top;
			var heroBottom = heroTop + $hero.outerHeight() - 100;
			var $textContainer = $('.border_textContainer');
			var $borderContainer = $('.border_container');

			if(__winTop >= heroBottom) {
				$borderContainer
					.removeClass('border_text-hide');
				$textContainer
					.fadeIn(600);
			}
			else {
				$textContainer
					.fadeOut(600);
			}
		}
	}



	/**
	 * ------------------------------------------------------------
	 * コンタクト表示
	 * ------------------------------------------------------------
	 */
	function __contact() {
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
			var $contact = $('#contact');
			var $contactTtl = $('.contact_ttl');
			var $contactContainer = $('.contact_container');
			var contactTop = $contact.offset().top;
			var contactBottom = contactTop + $contact.outerHeight() + 200;

			if(__winBottom >= contactTop) {
				$contactTtl
					.animate({
						opacity:'1',
						letterSpacing:'5px'
					},1000);

				$contactContainer
					.delay(200)
					.animate({
						top:'0',
						opacity:'1'
					},1000);
			}
		}
	}



	/**
	 * ------------------------------------------------------------
	 * プロフィール表示
	 * ------------------------------------------------------------
	 */
	function __profile() {
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
			var $profile = $('#profile');
			var $profileTtl = $('.profile_ttl');
			var $profileContainer = $('.profile_container');
			var profileTop = $profile.offset().top;
			var profileBottom = profileTop + $profile.outerHeight() + 200;

			if(__winBottom >= profileTop) {
				$profileTtl
					.animate({
						opacity:'1',
						letterSpacing:'5px'
					},1000);

				$profileContainer
					.delay(200)
					.animate({
						top:'0',
						opacity:'1'
					},1000);
			}
		}
	}



	/* ----------------------------------------
	 * アバウトテキスト
	 * ---------------------------------------- */
	function __aboutText() {
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
			var $about = $('#about');
			var $aboutTtl = $('.about_ttl');
			var $text = $('.about_lead').children();
			var aboutTop = $about.offset().top;
			var aboutBottom = aboutTop + $about.outerHeight() + 200;
			var $this;
			var interval = 500;

			if(__winBottom >= aboutTop) {
				$aboutTtl
					.delay(interval)
					.animate({
						opacity:'1',
						letterSpacing:'5px'
					},1000);

				$.each($text,function(index) {
					$this = $(this);

					$this
						.delay(index*interval)
						.animate({
							top:'-15px',
							opacity:'1'
						},1200);

				});
			}
		}
	}


	/**
	 * ------------------------------------------------------------
	 * アバウトジオメトリー
	 * ------------------------------------------------------------
	 */
	function __aboutGeometry() {
		var _renderer;
		var _scene;
		var _camera;
		var _skelet;
		var _aboutHeight;

		if(__winWidth >= 768) {
			_aboutHeight = '800';
		}
		else {
			_aboutHeight = '500';
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
			_renderer.setSize(__winWidth, _aboutHeight);
			_renderer.autoClear = false;
			_renderer.setClearColor(0xffffff, 0.0);
			document.getElementById('about_canvas').appendChild(_renderer.domElement);

			_scene = new THREE.Scene();
			_camera = new THREE.PerspectiveCamera(75, __winWidth / _aboutHeight, 1, 1000);
			_camera.position.z = 400;
			_scene.add(_camera);
			_skelet = new THREE.Object3D();
			_scene.add(_skelet);

			var geom = new THREE.IcosahedronGeometry(14, 1);
			var mat = new THREE.MeshPhongMaterial({
				color: 0xfb377d,
				wireframe: true,
				side: THREE.DoubleSide
			});
			var planet = new THREE.Mesh(geom, mat);
			planet.scale.x = planet.scale.y = planet.scale.z = 10;
			_skelet.add(planet);
			var ambientLight = new THREE.AmbientLight(0xffffff );
			_scene.add(ambientLight);
			var lights = new THREE.DirectionalLight( 0x1bff0c, 2.8 );
			_scene.add(lights);
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
						_aboutHeight = '800';
					}
					else {
						_aboutHeight = '500';
					}

					_renderer.setPixelRatio(window.devicePixelRatio);
					_renderer.setSize(__winWidth, _aboutHeight);
					_renderer.render(_scene, _camera);
					_camera.aspect = __winWidth / _aboutHeight;
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
			_titleShow();
			_slideShow();
		}



		/* ----------------------------------------
		 * スライド設定
		 * ---------------------------------------- */
		function _slideShow() {
			var $worksItem = $('.works_list').children();
			var worksTop;
			var worksBottom;
			var count;

			$.each($worksItem,function(index) {
				$this = $(this);
				count = index+1;

				worksTop = $this.offset().top;
				worksBottom = worksTop + $this.outerHeight();

				if(__winBottom >= worksTop) {
					if(!$this.hasClass('show')) {
						$this.addClass('show');
						if(count%2 == 0) {
							if(__winWidth >= 768) {
								$this
									.find('.works_itemImage')
									.css({
										'left':'200px'
									});
							}
							else {
								$this
									.find('.works_itemImage')
									.css({
										'left':'0'
									});
							}
						}
						else {
							$this
								.find('.works_itemImage')
								.css({
									'left':'0'
								});
						}
						if(__winWidth >= 768) {
							$this
								.find('.works_itemCircle')
								.css({
									'right':'50px'
								});
						}
						else {
							$this
								.find('.works_itemCircle')
								.css({
									'right':'0'
								});
						}
						$this
							.find('.works_itemImageMask')
							.animate({width:0},1400);
					}
				}
			});
		}



		/* ----------------------------------------
		 * タイトル設定
		 * ---------------------------------------- */
		function _titleShow() {
			var $works = $('#works');
			var $worksTtl = $('.works_ttl');
			var worksTop = $works.offset().top;
			var worksBottom = worksTop + $works.outerHeight() + 200;

			if(__winBottom >= worksTop) {
				$worksTtl
					.animate({
						opacity:'1',
						letterSpacing:'5px'
					},1000);
			}
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
						$this.parent().addClass('works_itemImage-show');
					});
			}
		}
	}



	/**
	 * ------------------------------------------------------------
	 * ヒーローイメージ
	 * ------------------------------------------------------------
	 */
	function __heroSquare() {
		var _scene;
		var _particle;
		var _box;
		var _camera;
		var _renderer;
		var _light;
		var _loader;
		var _width = __winWidth;
		var _height = __winHeight/2 + __winHeight/4;
		var _degree = 0;

		$(function() {
			_init();
		});



		/* ----------------------------------------
		 * 初期化
		 * ---------------------------------------- */
		function _init() {
			_buildElements();
			_resize();
		}



		/* ----------------------------------------
		 * 設定
		 * ---------------------------------------- */
		function _buildElements() {

			_scene = new THREE.Scene();
			_box = new THREE.Mesh();
			_box.position.set(0, 0, 30);

			_light = new THREE.DirectionalLight( 0xffffff,2);
			_light.position.set(50, 100, 0);
			_light.castShadow = true;
			_scene.add(_light);

			_camera = new THREE.PerspectiveCamera( 45, _width / _height, 1, 3000 );
			_camera.aspect = _width / _height;
			_camera.position.set(0, 100, 300);
			_camera.lookAt(_box.position);

			_renderer = new THREE.WebGLRenderer({ alpha: true ,antialias:true});
			_renderer.setSize(_width, _height);
			_renderer.setClearColor(new THREE.Color(0xffffff),0.0);
			_renderer.setPixelRatio(window.devicePixelRatio);
			document.getElementById('hero_canvas').appendChild(_renderer.domElement);

			_particle = new THREE.Object3D();
			var geometry = new THREE.TetrahedronGeometry(1.8, 0);
			var material = new THREE.MeshPhongMaterial({
				color: 0xffffff,
				shading: THREE.FlatShading
			});
			_scene.add(_particle);

			for(var i = 0; i < 600; i++) {
				var mesh = new THREE.Mesh(geometry, material);
				mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
				mesh.position.multiplyScalar(90 + (Math.random() * 700));
				mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);
				_particle.add(mesh);
			}

			_loader = new THREE.TextureLoader();
			_loader.load("img/box_texture.jpg", function(texture){
				_createBox(texture);
				_render();
			});
		}



		/* ----------------------------------------
		 * ボックス
		 * ---------------------------------------- */
		function _createBox(texture) {
			_box = new THREE.Mesh(
				new THREE.BoxGeometry(100, 100, 100),
				new THREE.MeshLambertMaterial({map: texture})
			);
			_box.position.set(0, 0, 0);
			_scene.add(_box);
			_box.rotation.set(Math.PI/2,10,5);
		}



		/* ----------------------------------------
		 * アニメーション
		 * ---------------------------------------- */
		function _render() {
			_box.rotation.x += 0.001;
			_box.rotation.y += 0.005;
			_box.rotation.z += 0.001;

			_degree = _degree + 5;
			var radian = _degree * Math.PI / 180;
			var positionY = Math.sin(radian) * 4;
			_box.position.y = positionY;

			_particle.rotation.x += 0.0000;
			_particle.rotation.y -= 0.0010;

			requestAnimationFrame(_render);
			_renderer.render(_scene, _camera);
		}



		/* ----------------------------------------
		 * リサイズ
		 * ---------------------------------------- */
		function _resize() {
			__$win
				.resize(function(){
					__winWidth = __$win.width();
					__winHeight = __$win.height();
					_width = __winWidth;
					_height = __winHeight/2 + __winHeight/4;

					_renderer.setPixelRatio(window.devicePixelRatio);
					_renderer.setSize(_width, _height);
					_renderer.render(_scene, _camera);
					_camera.aspect = _width / _height;
					_camera.updateProjectionMatrix();
				});
		}
	}
})(jQuery, window, document);
