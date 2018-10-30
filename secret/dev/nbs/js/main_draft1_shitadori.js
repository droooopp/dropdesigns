$(function(){

	$('.tradeinList_tabBtn').click(function(){
		if(!$(this).hasClass('tradeinList_tabBtn-current')){
			var currentId = $(this).attr('id').split(" ")[0].split("tradeinList_tabBtn")[1];
			$('.tradeinList_tabBtn').removeClass('tradeinList_tabBtn-current');
			$(this).addClass('tradeinList_tabBtn-current');
			if(currentId == 'History'){
				$('.tradeinList_innerNew').hide();
				$('.tradeinList_innerHistory').show();
			}else if(currentId == 'New') {
				$('.tradeinList_innerHistory').hide();
				$('.tradeinList_innerNew').show();
			}
		}
	});//下取りリスト内タブ切り替え

	$(document).on('hover', '.tradeinList_modalItemTableItem',function(){
		var currentThumb = $(this).children().attr('src');
		var currentIndex = $(this).attr('data-tradeListIndex-new');
		var currentWrap = '.tradeinList_modalItemTableList_new' + currentIndex + ' dd';
		var currentThumbBig = '.tradeinList_modalItemImg_new' + currentIndex + ' img';
		$(currentWrap).removeClass('tradeinList_modalItemTableItem-current');
		$(this).addClass('tradeinList_modalItemTableItem-current');
		$(currentThumbBig).attr('src', currentThumb);
	});//ドラフト1 新規モーダル内下取りアイテムギャラリー

	$(document).on('click', '.tradeinList_modalOpenNew',function(){
		var modalNew = $('.tradeinList_modalWrapNew');
		var indexNum = $(this).attr('data-tradeindex-new')-1;
		modalNew.show();
		$('.tradeinList_modalItemWrapNew').slick('slickGoTo', indexNum, true);
	});
	$(document).on('click', '.tradeinList_modalClose',function(){
		var modalNew = $('.tradeinList_modalWrapNew');
		modalNew.hide();
	});//ドラフト1 下取り新規モーダル

	$(document).on('hover', '.tradeinList_modalItemTableItem',function(){
		var currentThumb = $(this).children().attr('src');
		var currentIndex = $(this).attr('data-tradeListIndex-history');
		var currentWrap = '.tradeinList_modalItemTableList_history' + currentIndex + ' dd';
		var currentThumbBig = '.tradeinList_modalItemImg_history' + currentIndex + ' img';
		$(currentWrap).removeClass('tradeinList_modalItemTableItem-current');
		$(this).addClass('tradeinList_modalItemTableItem-current');
		$(currentThumbBig).attr('src', currentThumb);
	});//ドラフト1 履歴モーダル内下取りアイテムギャラリー

	$(document).on('click', '.tradeinList_modalOpenHistory',function(){
		var modalHistory = $('.tradeinList_modalWrapHistory');
		var indexNum = $(this).attr('data-tradeindex-history')-1;
		modalHistory.show();
		$('.tradeinList_modalItemWrapHistory').slick('slickGoTo', indexNum, true);
	});
	$(document).on('click', '.tradeinList_modalClose',function(){
		var modalHistory = $('.tradeinList_modalWrapHistory');
		modalHistory.hide();
	});//ドラフト1 下取り履歴モーダル

	$('.tradeinList_modalItemWrapNew,.tradeinList_modalItemWrapHistory').slick({
		draggable: false,
		lazyLoad: 'progressive'
	});//ドラフト1 下取りスライダー

});
