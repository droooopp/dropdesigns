var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// プレーヤーを埋め込む場所指定
var ytArea = 'mainBg';
// 埋め込むYouTube ID指定
var ytID = 'O5LwqRoT81g';
// プレーヤーの埋め込み
function onYouTubeIframeAPIReady() {
	ytPlayer = new YT.Player(ytArea, {
		videoId: ytID,
		playerVars: {
			rel: 0,
			controls: 0,
			showinfo: 0,
			wmode: 'transparent'
		},
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
	});
}
// YouTubeの準備完了後
function onPlayerReady(e) {
	ytPlayer.playVideo();
	ytPlayer.mute();
}
// 再生完了後
function onPlayerStateChange(e) {
	var ytStatus = e.target.getPlayerState();
	if (ytStatus == YT.PlayerState.ENDED) {
		ytPlayer.playVideo();
		ytPlayer.mute();
	}
	setTimeout( function() {
		$('.videoMask').fadeIn();
		setTimeout( function() {
			$('.loader').fadeOut(800);
			$('.mainInner').fadeIn(1200);
		}, 800);
	}, 800);
}


$(window).load(function(){
	fixSize();
});
$(window).resize(function(){
	fixSize();
});
function fixSize(){
	var wW = $(window).width();
	var wH = $(window).height();
	var bgW = (wH/9)*16;
	var bgH = (wW/16)*9;
	var positionWW = '-' + (wW/2) + 'px';
	var positionWH = '-' + (wH/2) + 'px';
	var positionBgW = '-' + (bgW/2) + 'px';
	var positionBgH = '-' + (bgH/2) + 'px';
	if(bgH > wH){
		$('#mainBg').css({
		'width': wW,
		'height': bgH,
		'margin-top': positionBgH,
		'margin-left': positionWW
		});
	}else{
		$('#mainBg').css({
		'width': bgW,
		'height': wH,
		'margin-top': positionWH,
		'margin-left': positionBgW
		});
	}
}

$(function(){
	// $(window).load(function() {
	// 	// $('.loader').fadeOut();
	// 	// $('.videoMask').fadeIn();
	// 	setTimeout( function() {
	// 		// $('.mainInner').fadeIn(800);
	// 		// $('.eventBnr').fadeIn(800);
	// 		//$('.modalWrap').fadeIn(600);
	// 	}, 1000);
	// });

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
					initialSlide: 3,
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
			var windowHeight = $(window).height();
			if(scroll > elemPos - windowHeight + 200){
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
	// 	$('.mainInner').fadeIn(800);
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
		var wW = $(window).width() - 100;
		var wH = $(window).height() - 100;
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
	$(".mainMovieClose").on('click', function(){
		$('.modalWrap').fadeOut();
		$('.mainInner').fadeIn(1200);
		var $playerWindow = $('#mainMovie')[0].contentWindow;
		$playerWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
	});//メイン動画モーダル

	var movieFrame = '<iframe class="howtoMovieFrame" width="736" height="414" src="https://www.youtube.com/embed/WtW8XSQNRjM?autoplay=1&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>';
	$('.howtoMovieOpen').on('click',function(){
		$('.howtoMovie').html(movieFrame);
	});//howto動画


});
