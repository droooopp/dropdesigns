(function($, window, document, undefined) {
  var __$win = $(window);

  $(function() {
    __menuDrawer();
    __viewport();
    __heroGradation();
    $('.grid').masonry({
      itemSelector: '.grid-item',
      isFitWidth: true,
      gutter: 20
    });
  });



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
        var _$drawerTrigger = $('.header-action,.header-overlay');
        var _$drawer = $('.header-nav');
        var _$overlay = $('.header-overlay');
        var _$body = $('body');

        _$drawerTrigger
          .click(function() {
            if(!_$drawerTrigger.hasClass('header-action-close')) {
              _$body
                .addClass('is-showNav');
              _$drawerTrigger
                .addClass('header-action-current');
              _$overlay
                .fadeIn(300);
              _$drawer
                .css({
                  top: 0
                });
              setTimeout(function(){
                _$drawerTrigger
                  .removeClass('header-action-current')
                  .addClass('header-action-close');
              },300);

              if(_$drawer.outerHeight() <= __$win.height()) {
                __$win
                  .on('touchmove.noScroll', function(e) {
                    e.preventDefault();
                  });
              }
            }
            else {
              __$win
                .off('.noScroll');
              _$body
                .removeClass('is-showNav');
              _$drawer
                .css({
                  top: '-100vh'
                });
              _$drawerTrigger
                .removeClass('header-action-close')
                .addClass('header-action-current');
              _$overlay
                .fadeOut(300);
              setTimeout(function(){
                _$drawerTrigger
                  .removeClass('header-action-current');
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



  /**
   * ------------------------------------------------------------
   * ヒーロー
   * ------------------------------------------------------------
   */
  function __heroGradation() {

    _init();



    /* ----------------------------------------
     * 初期化
     * ---------------------------------------- */

    function _init() {
      _setGradation();
    }



    function _setGradation() {
      var granimInstance = new Granim({
        element: '#canvas',
        direction: 'diagonal',
        isPausedWhenNotInView: true,
        states : {
            "default-state": {
              gradients: [
                    ['#faddff', '#fef5ff'],
                    ['#bffcff', '#fadcff'],
                    ['#bffcff', '#fdf0ff']
                ]
            }
        }
      });

      $(".hero-circle").ripples({
        resolution: 512,
  			dropRadius: 20, //px
  			perturbance: 0.04,
      });


      setInterval(function() {
    		var $el = $('.hero-circle');
    		var x = Math.random() * $el.outerWidth();
    		var y = Math.random() * $el.outerHeight();
    		var dropRadius = 20;
    		var strength = 0.04 + Math.random() * 0.04;

    		$el.ripples('drop', x, y, dropRadius, strength);
    	}, 400);


      $(".hero-koi").ripples({
        resolution: 512,
  			dropRadius: 20, //px
  			perturbance: 0.04,
      });


      setInterval(function() {
    		var $el = $('.hero-koi');
    		var x = Math.random() * $el.outerWidth();
    		var y = Math.random() * $el.outerHeight();
    		var dropRadius = 20;
    		var strength = 0.04 + Math.random() * 0.04;

    		$el.ripples('drop', x, y, dropRadius, strength);
    	}, 400);
    }
  }



})(jQuery, window, document);
