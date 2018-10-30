$(function(){
	
	$(document).on('hover', '.tradeinImgThumb_item',function(){
		var currentThumb = $(this).children().attr('src');
		$('.tradeinImgThumb_item').removeClass('tradeinImgThumb_item-current');
		$(this).addClass('tradeinImgThumb_item-current');
		$('.tradeinImgCheck_itemImg img').attr('src', currentThumb);
	});//ドラフト6下取りアイテムギャラリー

});
