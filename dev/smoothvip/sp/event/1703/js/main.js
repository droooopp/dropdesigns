$(function(){
	$('a[href^=#]').click(function() {
		var speed = 400;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$('body,html').animate({scrollTop:position}, speed, 'swing');
			return false;
	});
});
var map;
function initialize() {
	var latlng = new google.maps.LatLng(35.6448756,139.7062934);
	var myOptions = {
		zoom: 14,
		center: latlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	markerImg = { url: 'img/ping.png', scaledSize : new google.maps.Size(19, 24) };
	var marker01 = new google.maps.Marker({
		icon: markerImg,
		position : new google.maps.LatLng(35.6454388,139.6975033),
		scaledSize : new google.maps.Size(19,24),
		map : map
	});
	var marker02 = new google.maps.Marker({
		icon: markerImg,
		position : new google.maps.LatLng(35.64386800575934,139.69782255763096),
		scaledSize : new google.maps.Size(19,24),
		map : map
	});
	var marker03 = new google.maps.Marker({
		icon: markerImg,
		position : new google.maps.LatLng(35.64707712670764,139.69895342706639),
		scaledSize : new google.maps.Size(19,24),
		map : map
	});
	var marker04 = new google.maps.Marker({
		icon: markerImg,
		position : new google.maps.LatLng(35.64745022026585,139.69532351292946),
		scaledSize : new google.maps.Size(19,24),
		map : map
	});
	var marker05 = new google.maps.Marker({
		icon: markerImg,
		position : new google.maps.LatLng(35.64532873450151,139.70077946702713),
		scaledSize : new google.maps.Size(19,24),
		map : map
	});
	var marker06 = new google.maps.Marker({
		icon: markerImg,
		position : new google.maps.LatLng(35.64464496768403,139.70057923853687),
		scaledSize : new google.maps.Size(19,24),
		map : map
	});
	var marker07 = new google.maps.Marker({
		icon: markerImg,
		position : new google.maps.LatLng(35.644096926494804,139.70104755703295),
		scaledSize : new google.maps.Size(19,24),
		map : map
	});
	var marker08 = new google.maps.Marker({
		icon: markerImg,
		position : new google.maps.LatLng(35.644366973585,139.6999931666155),
		scaledSize : new google.maps.Size(19,24),
		map : map
	});
	var marker09 = new google.maps.Marker({
		icon: markerImg,
		position : new google.maps.LatLng(35.64099104941034,139.69542677794942),
		scaledSize : new google.maps.Size(19,24),
		map : map
	});
	var marker10 = new google.maps.Marker({
		icon: markerImg,
		position : new google.maps.LatLng(35.64535274651803,139.70797553495598),
		scaledSize : new google.maps.Size(19,24),
		map : map
	});
	var marker11 = new google.maps.Marker({
		icon: markerImg,
		position : new google.maps.LatLng(35.6455464007485,139.71162994476362),
		scaledSize : new google.maps.Size(19,24),
		map : map
	});
	var marker12 = new google.maps.Marker({
		icon: markerImg,
		position : new google.maps.LatLng(35.64548997744445,139.71470546811923),
		scaledSize : new google.maps.Size(19,24),
		map : map
	});
	var marker13 = new google.maps.Marker({
		icon: markerImg,
		position : new google.maps.LatLng(35.64705885338944,139.71631843180086),
		scaledSize : new google.maps.Size(19,24),
		map : map
	});
	var marker14 = new google.maps.Marker({
		icon: markerImg,
		position : new google.maps.LatLng(35.64527933872312,139.71701368405593),
		scaledSize : new google.maps.Size(19,24),
		map : map
	});
	function infoWindowOpen01(){
		infoWnd01.setContent('<a href="https://www.facebook.com/damaranikejiri/" target="_blank">Damaran王"乱　ダマラン</a>');
		infoWnd01.open(map, marker01);
	}
	infoWnd01 = new google.maps.InfoWindow();
	google.maps.event.addListener(marker01, "click", infoWindowOpen01);

	function infoWindowOpen02(){
		infoWnd02.setContent('<a href="https://tabelog.com/tokyo/A1317/A131701/13150418/" target="_blank">港町バル</a>');
		infoWnd02.open(map, marker02);
	}
	infoWnd02 = new google.maps.InfoWindow();
	google.maps.event.addListener(marker02, "click", infoWindowOpen02);

	function infoWindowOpen03(){
		infoWnd03.setContent('<a href="https://tabelog.com/tokyo/A1317/A131701/13014172/" target="_blank">星港夜（シンガポールナイト）</a>');
		infoWnd03.open(map, marker03);
	}
	infoWnd03 = new google.maps.InfoWindow();
	google.maps.event.addListener(marker03, "click", infoWindowOpen03);

	function infoWindowOpen04(){
		infoWnd04.setContent('<a href="https://tabelog.com/tokyo/A1317/A131701/13170234/" target="_blank">ひぐらし</a>');
		infoWnd04.open(map, marker04);
	}
	infoWnd04 = new google.maps.InfoWindow();
	google.maps.event.addListener(marker04, "click", infoWindowOpen04);

	function infoWindowOpen05(){
		infoWnd05.setContent('<a href="https://tabelog.com/tokyo/A1317/A131701/13131135/" target="_blank">NYU NAKAMEGURO</a>');
		infoWnd05.open(map, marker05);
	}
	infoWnd05 = new google.maps.InfoWindow();
	google.maps.event.addListener(marker05, "click", infoWindowOpen05);

	function infoWindowOpen06(){
		infoWnd06.setContent('<a href="https://tabelog.com/tokyo/A1317/A131701/13173264/" target="_blank">stove（ストーブ）</a>');
		infoWnd06.open(map, marker06);
	}
	infoWnd06 = new google.maps.InfoWindow();
	google.maps.event.addListener(marker06, "click", infoWindowOpen06);

	function infoWindowOpen07(){
		infoWnd07.setContent('<a href="https://tabelog.com/tokyo/A1317/A131701/13131401/" target="_blank">DROP 中目黒</a>');
		infoWnd07.open(map, marker07);
	}
	infoWnd07 = new google.maps.InfoWindow();
	google.maps.event.addListener(marker07, "click", infoWindowOpen07);

	function infoWindowOpen08(){
		infoWnd08.setContent('<a href="https://tabelog.com/tokyo/A1317/A131701/13100274/" target="_blank">おまもり</a>');
		infoWnd08.open(map, marker08);
	}
	infoWnd08 = new google.maps.InfoWindow();
	google.maps.event.addListener(marker08, "click", infoWindowOpen08);

	function infoWindowOpen09(){
		infoWnd09.setContent('<a href="https://tabelog.com/tokyo/A1317/A131701/13046790/" target="_blank">ホームラン</a>');
		infoWnd09.open(map, marker09);
	}
	infoWnd09 = new google.maps.InfoWindow();
	google.maps.event.addListener(marker09, "click", infoWindowOpen09);

	function infoWindowOpen10(){
		infoWnd10.setContent('<a href="https://tabelog.com/tokyo/A1303/A130302/13197658/" target="_blank">ノンベエ エビス</a>');
		infoWnd10.open(map, marker10);
	}
	infoWnd10 = new google.maps.InfoWindow();
	google.maps.event.addListener(marker10, "click", infoWindowOpen10);

	function infoWindowOpen11(){
		infoWnd11.setContent('<a href="https://tabelog.com/tokyo/A1303/A130302/13019169/" target="_blank">Q 恵比寿店</a>');
		infoWnd11.open(map, marker11);
	}
	infoWnd11 = new google.maps.InfoWindow();
	google.maps.event.addListener(marker11, "click", infoWindowOpen11);

	function infoWindowOpen12(){
		infoWnd12.setContent('<a href="https://tabelog.com/tokyo/A1303/A130302/13144856/" target="_blank">トリウオ 恵比寿店 （Toliuo）</a>');
		infoWnd12.open(map, marker12);
	}
	infoWnd12 = new google.maps.InfoWindow();
	google.maps.event.addListener(marker12, "click", infoWindowOpen12);

	function infoWindowOpen13(){
		infoWnd13.setContent('<a href="https://tabelog.com/tokyo/A1303/A130302/13174843/" target="_blank">Porco Rosso（ポルコロッソ）</a>');
		infoWnd13.open(map, marker13);
	}
	infoWnd13 = new google.maps.InfoWindow();
	google.maps.event.addListener(marker13, "click", infoWindowOpen13);

	function infoWindowOpen14(){
		infoWnd14.setContent('<a href="https://tabelog.com/tokyo/A1303/A130302/13186529/" target="_blank">TETOTE APARTMENT</a>');
		infoWnd14.open(map, marker14);
	}
	infoWnd14 = new google.maps.InfoWindow();
	google.maps.event.addListener(marker14, "click", infoWindowOpen14);
}
$(function() {

	__headerSticky();

	function __headerSticky() {

		_init();



		/* ----------------------------------------
		 * 初期化
		 * ---------------------------------------- */

		function _init() {
			headerScroll();
			$(window).scroll(function() {
				headerScroll();
			});
		}



		/* ----------------------------------------
		 * ヘッダー追従設定
		 * ---------------------------------------- */

		function headerScroll() {
				var scrollH = $(window).scrollTop();
				var _$header = $('header')

				if(scrollH >= 21) {
					_$header
						.addClass('headerScroll');
				}else {
					_$header
						.removeClass('headerScroll');
				}

			}

	}
});
