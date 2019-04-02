(function($, window, document, undefined) {
  var __$win = $(window);

  __heroGradation();



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
      $(function() {
        _setGradation();
      });
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
    }
  }



})(jQuery, window, document);
