$(function(){
	$(window).load(function() {
		$('.loader').fadeOut();
		$('.mainInner').fadeIn(1200);
	});

	lightbox.option({
		albumLabel:false,
		wrapAround:false,
		fadeDuration:200,
		resizeDuration:200
		})

	$(document).ready(function() {
		var userFeed = new Instafeed({
			target: 'instafeed',
			get: 'user', //ユーザーから取得
			userId: '3504538045', //ユーザーID
			sortBy: 'most-recent',//最新記事から順に取得
			resolution: 'standard_resolution', //画像サイズを設定
			template: '<li><a href="{{image}}" rel="lightbox[group01]"><img src="{{image}}"></a></li>',
			accessToken: '3504538045.82b5141.e9eb5a13141b46a19d2d0c0fbf904306', //アクセストークン
			after: function () {
				$('.gallary_slider').slick({
					infinite: true,
					centerMode: true,
					arrows: false,
					variableWidth: true,
					slidesToScroll: 1,
					autoplay: true,
					autoplaySpeed: 5000
				});//GALLARYスライダー
			}
		});
		userFeed.run();
	});//インスタ

	$('.mainBg_slider').bxSlider({
		mode: 'fade',
		speed: 2000,
		pause: 5000,
		auto: true,
		pager: false,
		controls: false,
		touchEnabled: false
	});//メインビジュアルスライダー

	$('.productBg_slider').bxSlider({
		mode: 'fade',
		speed: 2000,
		pause: 5000,
		auto: true,
		pager: false,
		controls: false,
		touchEnabled: false
	});//プロダクトスライダー

	$('a[href^=#]').click(function() {
		var speed = 800;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});//スムーススクロール

	$(window).scroll(function (){
		$('.fade').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height() + 50;
			if(scroll > elemPos - windowHeight){
				$(this).addClass('scrollin');
			}else if(elemPos - windowHeight > scroll) {
				$(this).removeClass('scrollin');
			}
		});
	});//コンテンツフェードイン通常

	$(window).scroll(function (){
		$('.fadeFast').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if(scroll > elemPos - windowHeight + 50){
				$(this).addClass('scrollinFast');
			}else if(elemPos - windowHeight > scroll) {
				$(this).removeClass('scrollinFast');
			}
		});
	});//コンテンツフェードイン早い

	$(window).scroll(function (){
		$('.fadeFastItem').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if(scroll > elemPos - windowHeight - 250){
				$(this).addClass('scrollinFastItem');
			}else if(elemPos - windowHeight > scroll) {
				$(this).removeClass('scrollinFastItem');
			}
		});
	});//コンテンツフェードイン早い

	$(window).scroll(function (){
		$('.fadeZ').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if(scroll > elemPos - windowHeight + 100){
				$(this).addClass('zoomin');
			}else if(elemPos - windowHeight > scroll) {
				$(this).removeClass('zoomin');
			}
		});
	});//コンテンツズームイン


	$('.faq_slider').slick({
		draggable:false,
		dots:true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 5000
	});//FAQスライダー

	// $('.modalClose').click(function(){
	// 	$('.modalWrap').fadeOut();
	// 	$('.mainInner').fadeIn();
	// 	$('.eventBnr').fadeIn(800);
	// });//スプラッシュ閉じ

	$('.mainMovieOpen').click(function(){
		$('.mainInner').fadeOut();
		$('.eventBnr').fadeOut();
		movieModalfixSize();
		$('.mainMovieModalWrap').fadeIn(800);
	});
	$('.modalClose').click(function(){
		$('.mainMovieModalWrap').fadeOut();
	});
	$(window).resize(function(){
		movieModalfixSize();
	});
	function movieModalfixSize(){
		var wW = $(window).width() - 60;
		var wH = $(window).height() - 60;
		var bgW = (wH/9)*16;
		var bgH = (wW/16)*9;
		var positionWH = '-' + (wH/2) + 'px';
		var positionWW = '-' + (wW/2) + 'px';
		var positionBgH = '-' + (bgH/2) + 'px';
		var positionBgW = '-' + (bgW/2) + 'px';
		if(wW > bgW){
			$('.mainMovieFrameWrap').css({
				'width': bgW,
				'height': wH,
				'margin-top': positionWH,
				'margin-left': positionBgW
			});
		}else{
			$('.mainMovieFrameWrap').css({
				'width': wW,
				'height': bgH,
				'margin-top': positionBgH,
				'margin-left': positionWW
			});
		}
	}
	$(".mainMovieClose").on("click", function(){
		$('.modalWrap').fadeOut();
		$('.mainInner').fadeIn();
		var $playerWindow = $('#mainMovie')[0].contentWindow;
		$playerWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
	});//メイン動画モーダル

	// var movieFrame = '<iframe class="howtoMovieFrame" src="https://www.youtube.com/embed/AvR-amHsoJo?autoplay=1&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>';
	// 	$('.howtoMovieOpen').on('click',function(){
	// 		var wW = $(window).width();
	// 		var mH = (wW/16)*9;
	// 		$('.howtoMovie').html(movieFrame);
	// 		$('.howtoMovieFrame').css({'width':wW ,'height':mH });
	// 	});
	$(window).resize(function(){
		howtoMovieSize();
	});
	$(window).load(function(){
		howtoMovieSize();
	});
	function howtoMovieSize(){
		var wW = $(window).width();
		var mH = (wW/16)*9;
		$('.howtoMovieFrame').css({'width':wW ,'height':mH });
		$('.howtoMovieOpen').css({'width':wW ,'height':mH });
	}//howto動画



});
