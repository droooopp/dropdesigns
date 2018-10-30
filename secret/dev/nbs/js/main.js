$(function(){
	var wWidth = $(window).width();
	var menuListFlg = 0;
	$('.header_menu').click(function() {
		if(760 > wWidth && menuListFlg == 0){
			$('.header_menuList').show();
			menuListFlg = 1;
		}else if(760 > wWidth && menuListFlg == 1){
			$('.header_menuList').hide();
			menuListFlg = 0;
		}
	});
	$('.header_menu,.header_menuList').hover(
		function() {
			$('.header_menuList').show();
	},
		function() {
			$('.header_menuList').hide();
	});
	$('.header_menuColor').click(function() {
		$('.header_menuList').hide();
	});
	//ヘッダーメニュー表示切替


	$('.brandCollabo_button').click(function() {
		if($('.brandCollabo_columnList').css('display') == 'none'){
			$('.brandCollabo_columnList').show();
		}else{
			$('.brandCollabo_columnList').hide();
		}
	}); //コラボブランド表示切替


	$('.header_menuColor').click(function() {
		$('.colorModalWrap').show()
		$('.container,.price,.status,.header,.listSlideWrap,.itemData').addClass('modal_blur')
	});
	$('.secColorChange_btn,.colorModal_closeBtn,.colorModal_overlay').click(function() {
		$('.colorModalWrap').hide()
		$('.container,.price,.status,.header,.listSlideWrap,.itemData').removeClass('modal_blur')
	});
	if(window.sessionStorage){
		var colorBeforeNum = window.sessionStorage.getItem("headColorStr");
		if(colorBeforeNum == '1'){
			$('.header').addClass('header_black');
		}else if(colorBeforeNum == '2'){
			$('.header').addClass('header_red');
		}else if(colorBeforeNum == '3'){
			$('.header').addClass('header_yellow');
		}else if(colorBeforeNum == '4'){
			$('.header').addClass('header_purple');
		}else if(colorBeforeNum == '5'){
			$('.header').addClass('header_blue');
		}else if(colorBeforeNum == '6'){
			$('.header').addClass('header_green');
		}else if(colorBeforeNum == '7'){
			$('.header').addClass('header_orange');
		}
		$('.secColorChange_btn').click(function() {
			colorBeforeNum = $(this).attr('id').split("secColorChange_btn0")[1];
			$('.header').removeClass(function(index, className) {
				return (className.match(/\bheader_\S+/g) || []).join(' ');
			});
			if(colorBeforeNum == '1'){
				window.sessionStorage.setItem("headColorStr" , '1');
				$('.header').addClass('header_black');
			}else if(colorBeforeNum == '2'){
				window.sessionStorage.setItem("headColorStr" , '2');
				$('.header').addClass('header_red');
			}else if(colorBeforeNum == '3'){
				window.sessionStorage.setItem("headColorStr" , '3');
				$('.header').addClass('header_yellow');
			}else if(colorBeforeNum == '4'){
				window.sessionStorage.setItem("headColorStr" , '4');
				$('.header').addClass('header_purple');
			}else if(colorBeforeNum == '5'){
				window.sessionStorage.setItem("headColorStr" , '5');
				$('.header').addClass('header_blue');
			}else if(colorBeforeNum == '6'){
				window.sessionStorage.setItem("headColorStr" , '6');
				$('.header').addClass('header_green');
			}else if(colorBeforeNum == '7'){
				window.sessionStorage.setItem("headColorStr" , '7');
				$('.header').addClass('header_orange');
			}
		});
	} //画面カラー変更


	var entryListClickFlg = 0
	var tradeinListClickFlg = 0
	$('.entryList_ttl').click(function() {
		if(entryListClickFlg == 0){
			if(tradeinListClickFlg == 1){
				$('.entryListWrap').show();
				$('.tradeinListWrap').css('right','-1000px');
				$('.tradeinListWrap').hide();
				$('.tradeinListWrap').removeClass('listWrap-shadow');
				tradeinListClickFlg = 0
				$('.tradeinList_ttlTxt').text('下取りリスト');
			}
			$('.entryListWrap').css('right','0');
			$('.tradeinListWrap').hide();
			$('.entryListWrap').addClass('listWrap-shadow');
			$('.entryListWrap').addClass('listWrap-overlap');
			entryListClickFlg = 1
			$('.entryList_ttlTxt').text('閉じる');
		}else{
			$('.entryListWrap').css('right','-1000px');
			$('.tradeinListWrap').show();
			$('.entryListWrap').removeClass('listWrap-shadow');
			$('.entryListWrap').removeClass('listWrap-overlap');
			entryListClickFlg = 0
			$('.entryList_ttlTxt').text('登録リスト');
		}
	}); //登録リスト表示
	$('.tradeinList_ttl').click(function() {
		if(tradeinListClickFlg == 0){
			if(entryListClickFlg == 1){
				$('.entryListWrap').css('right','-1000px');
				$('.entryListWrap').removeClass('listWrap-shadow');
				$('.entryListWrap').show();
				$('.tradeinListWrap').show();
				$('.entryListWrap').removeClass('listWrap-overlap');
				entryListClickFlg = 0
				$('.entryList_ttlTxt').text('登録リスト');
			}
			$('.entryListWrap').hide();
			$('.tradeinListWrap').css('right','0');
			$('.tradeinListWrap').addClass('listWrap-shadow');
			tradeinListClickFlg = 1
			$('.tradeinList_ttlTxt').text('閉じる');
		}else{
			$('.tradeinListWrap').css('right','-1000px');
			$('.entryListWrap').show();
			$('.tradeinListWrap').removeClass('listWrap-shadow');
			tradeinListClickFlg = 0
			$('.tradeinList_ttlTxt').text('下取りリスト');
		}
	}); //下取りリスト表示

	$('.entryList_tableItem').click(function(){
		if($(this).hasClass('entryList_tableItem-current')){
			$(this).removeClass('entryList_tableItem-current');
		}else{
			$('.entryList_tableItem').removeClass('entryList_tableItem-current');
			$(this).addClass('entryList_tableItem-current');
		}
	});//登録リスト内クリック判定

	$('.tradeinList_tableItem').click(function(){
		if($(this).hasClass('tradeinList_tableItem-current')){
			$(this).removeClass('tradeinList_tableItem-current');
		}else{
			$('.tradeinList_tableItem').removeClass('tradeinList_tableItem-current');
			$(this).addClass('tradeinList_tableItem-current');
		}
	});//下取りリスト内クリック判定

	var historyListClickFlg = 0
	$('.historyList_ttl').click(function() {
		if(historyListClickFlg == 0){
			$('.historyListWrap').css('right','0');
			$('.historyListWrap').addClass('listWrap-shadow');
			historyListClickFlg = 1
			$('.historyList_ttlTxt').text('閉じる');
		}else{
			$('.historyListWrap').css('right','-1000px');
			$('.historyListWrap').removeClass('listWrap-shadow');
			historyListClickFlg = 0
			$('.historyList_ttlTxt').text('過去履歴');
		}
	}); //過去履歴リスト表示


	var tags;
	var conditionResult_AddNum = 1;
	$('.conditionResult_textAddBtn').click(function(){
			$('.conditionResult_textItem input').removeClass('condition_form-active');
			$('.secCondition_stateBtn').removeClass('conditionActiveFlg');
			$('.secCondition_regionBtn').removeClass('conditionActiveFlg');
			conditionResult_AddNum = conditionResult_AddNum+1;
			tags = '<li class="conditionResult_textItem" id="conditionResult_textWrap'+conditionResult_AddNum+'"><input type="text" placeholder="'+conditionResult_AddNum+':" value="" class="condition_form condition_form-active"></li><li class="conditionResult_textItem"><button type="button" class="conditionResult_textClearBtn buttonSm-primary" id="conditionResult_textClearBtn'+conditionResult_AddNum+'">クリア</button></li>';
			$('.conditionResult_textList').append(tags);
			$('.condition_form-active').focus();
	});
	var conditionFlg = 0;
	$('.secCondition_regionBtn').click(function(){
		$('.secCondition_stateBtn').removeClass('conditionActiveFlg');
		var conditionTxt = $(this).text();
		var conditionThisTxt = $(this).text();
		var conditionTxtAdd
		if(!$(this).hasClass('conditionActiveFlg')){
			if(conditionFlg==0){
				conditionTxtAdd = $('.condition_form-active').val() + conditionTxt;
				conditionFlg = 1
				$('.condition_form-active').val(conditionTxtAdd);
			}else if(conditionFlg==1){
				if($('.condition_form-active').val()==false){
					conditionTxtAdd = conditionTxt;
					$('.condition_form-active').val(conditionTxtAdd);
				}else{
					conditionTxtAdd = $('.condition_form-active').val() + '・' + conditionTxt;
					$('.condition_form-active').val(conditionTxtAdd);
				}
			}else if(conditionFlg==2){
				if($('.condition_form-active').val()==false){
					conditionTxtAdd = conditionTxt;
					conditionFlg = 1;
					$('.condition_form-active').val(conditionTxtAdd);
				}else{
					conditionTxtAdd = $('.condition_form-active').val();
					$('.condition_form-active').val(conditionTxtAdd);
					$('.conditionResult_textItem input').removeClass('condition_form-active');
					conditionResult_AddNum = conditionResult_AddNum+1;
					tags = '<li class="conditionResult_textItem" id="conditionResult_textWrap'+conditionResult_AddNum+'"><input type="text" placeholder="'+conditionResult_AddNum+':" value="" class="condition_form condition_form-active"></li><li class="conditionResult_textItem"><button type="button" class="conditionResult_textClearBtn buttonSm-primary" id="conditionResult_textClearBtn'+conditionResult_AddNum+'">クリア</button></li>';
					$('.conditionResult_textList').append(tags);
					$('.condition_form-active').val(conditionThisTxt);
					conditionFlg = 1;
				}
			}
		}
		$(this).addClass('conditionActiveFlg');
	});
	$('.secCondition_stateBtn').click(function(){
		$('.secCondition_regionBtn').removeClass('conditionActiveFlg');
		var conditionTxt = $(this).text();
		var conditionTxtAdd;
		if(!$(this).hasClass('conditionActiveFlg')){
			if(conditionFlg==1){
				if($('.condition_form-active').val()==false){
					conditionTxtAdd = conditionTxt;
				}else{
					conditionTxtAdd = $('.condition_form-active').val() + '：' + conditionTxt;
					conditionFlg = 2;
				}
			}else if(conditionFlg==2){
				if($('.condition_form-active').val()==false){
					conditionTxtAdd = conditionTxt;
				}else{
					conditionTxtAdd = $('.condition_form-active').val() + '、' + conditionTxt;
				}
			}else if(conditionFlg==0){
				conditionTxtAdd = $('.condition_form-active').val() + '：' + conditionTxt;
				conditionFlg = 2;
			}
			$('.condition_form-active').val(conditionTxtAdd);
		}
		$(this).addClass('conditionActiveFlg');
	});
	$(document).on('click', '.condition_form',function(){
		$('.secCondition_stateBtn').removeClass('conditionActiveFlg');
		$('.secCondition_regionBtn').removeClass('conditionActiveFlg');
		$('.conditionResult_textItem input').removeClass('condition_form-active');
		$(this).addClass('condition_form-active');
	}); //コンディション入力


	var conditionClearId
	var conditionClearForm
	$(document).on('click', '.conditionResult_textClearBtn',function(){
		$('.secCondition_stateBtn').removeClass('conditionActiveFlg');
		$('.secCondition_regionBtn').removeClass('conditionActiveFlg');
		conditionClearId = $(this).attr('id').split(" ")[0].split("conditionResult_textClearBtn")[1];
		conditionClearForm = '#conditionResult_textWrap' + conditionClearId + ' input';
		$(conditionClearForm).val('');
		$(conditionClearForm).focus();
		$('.condition_form').removeClass('condition_form-active');
		$(conditionClearForm).addClass('condition_form-active');
	}); //コンディションクリア


	var rankActiveTxt;
	$('.secRankBtn_label').hover(
		function (){
			rankActiveTxt = $(this).text();
			switch(rankActiveTxt){
				case 'S':
					$('.aboutRank_list dd:first-child').addClass('aboutRank_item-current');
					break;
				case 'A':
					$('.aboutRank_list dd:nth-child(2)').addClass('aboutRank_item-current');
					break;
				case 'B':
					$('.aboutRank_list dd:nth-child(3)').addClass('aboutRank_item-current');
					break;
				case 'C':
					$('.aboutRank_list dd:nth-child(4)').addClass('aboutRank_item-current');
					break;
				case 'D':
					$('.aboutRank_list dd:nth-child(5)').addClass('aboutRank_item-current');
					break;
				case 'E':
					$('.aboutRank_list dd:last-child').addClass('aboutRank_item-current');
					break;
			}
		},
		function (){
			$('.aboutRank_list dd').removeClass('aboutRank_item-current');
		}
	); //コンディションランク参考

	var rankActiveTxt;
	$('.secRankBtn_label').hover(
		function (){
			rankActiveTxt = $(this).text();
			switch(rankActiveTxt){
				case 'S':
					$('.aboutRankTradein_list dd:first-child').addClass('aboutRank_item-current');
					break;
				case 'A':
					$('.aboutRankTradein_list dd:nth-child(2)').addClass('aboutRank_item-current');
					break;
				case 'B':
					$('.aboutRankTradein_list dd:nth-child(3)').addClass('aboutRank_item-current');
					break;
				case 'C':
					$('.aboutRankTradein_list dd:nth-child(4)').addClass('aboutRank_item-current');
					break;
				case 'D':
					$('.aboutRankTradein_list dd:nth-child(5)').addClass('aboutRank_item-current');
					break;
				case 'E':
					$('.aboutRankTradein_list dd:last-child').addClass('aboutRank_item-current');
					break;
			}
		},
		function (){
			$('.aboutRankTradein_list dd').removeClass('aboutRank_item-current');
		}
	); //下取り用コンディションランク参考


	$('.aboutRank_btn').click(function(){
		$('.aboutRank_modalWrap').show()
		$('.container,.price,.status,.header,.listSlideWrap').addClass('modal_blur')
	});
	$('.aboutRank_overlay,.aboutRank_closeBtn').click(function() {
		$('.aboutRank_modalWrap').hide()
		$('.container,.price,.status,.header,.listSlideWrap').removeClass('modal_blur')
	}); //コンディションランクモーダル表示


	$('.secSex_label').click(function(){
		var headerHight = 206;
		//var secSexVal = $(this).prev().val();
		var secSexOffset = $('.sectionWrap_sex').offset().top-headerHight;
		//$('.secSexInner').text(secSexVal)
		$('.sectionWrap_sex').slideUp()
		$('.sectionHead_sex').slideDown()
		$("html,body").animate({scrollTop:secSexOffset});
	});
	$('.secSex_openBtn').click(function(){
		if($('.sectionWrap_sex').css('display') == 'none'){
			$('.sectionWrap_sex').slideDown()
			$('.sectionHead_sex').hide()
		}
	}); // 選択後ヘッダー移動_性別


	$('.secCategory_columnItem').hover(
		function(){
			var imageName = $(this).text();
			$('.secCategory_cateDataImg').find('img').attr('src', 'img/draft01/category/' + imageName + '.jpg');
			$('.secCategory_cateDataImg').show();
		},
		function(){
			var imageName = $(this).text();
			$('.secCategory_cateDataImg').find('img').attr('src', 'img/draft01/category/' + imageName + '.jpg');
			$('.secCategory_cateDataImg').hide();
		}
	); //カテゴリ画像表示


	var elem1=$('.secCategory_columnListInfo');
	var cateDataH=0;
	var elem2=$('.sectionWrap_category');
	var cateDataBottom=0;
	var scrollY;
	function isExistElement(checkElement){
		if(checkElement.length){
			return true;
		}else{
			return false;
		}
	};
	$(window).scroll(function (){
		if(isExistElement(elem1)){
			cateDataH = $('.secCategory_columnTtl').offset().top-165;
		};
		if(isExistElement(elem2)){
			cateDataBottom = $('.sectionWrap_category').height() + $('.sectionWrap_category').offset().top-110;
		};
		scrollY = window.pageYOffset;
		if(cateDataH <= scrollY){
			$('.secCategory_columnListInfo').addClass('secCategory_columnListInfo-fix');
			if(cateDataBottom <= scrollY){
				$('.secCategory_columnListInfo').removeClass('secCategory_columnListInfo-fix');
			}
		}else if(scrollY <= cateDataH) {
			$('.secCategory_columnListInfo').removeClass('secCategory_columnListInfo-fix');
		}
	}); //カテゴリ画像スティッキー


	var size_selectKey
	$('.size_select').on('change',function(){
		$('.size_btnList,.size_btnList07').css('display','none');
		size_selectKey=$(this).val();
		switch(size_selectKey){
			case 'size01' : $('.size_btnList01').css('display','flex'); break;
			case 'size02' : $('.size_btnList02').css('display','flex'); break;
			case 'size03' : $('.size_btnList03').css('display','flex'); break;
			case 'size04' : $('.size_btnList04').css('display','flex'); break;
			case 'size05' : $('.size_btnList05').css('display','flex'); break;
			case 'size06' : $('.size_btnList06').css('display','flex'); break;
			case 'size07' : $('.size_btnList07').css('display','flex'); break;
		}
	});//サイズ表示切り替え

	$('.imgBrandSearch_btn').click(function(){
		$('.imgBrandSearchModalWrap').show()
		$('.container,.price,.status,.header,.listSlideWrap').addClass('modal_blur')
	});
	$('.imgBrandSearchModal_overlay').click(function() {
		$('.imgBrandSearchModalWrap').hide()
		$('.container,.price,.status,.header,.listSlideWrap').removeClass('modal_blur')
	}); //難解ブランドモーダル表示非表示


	$('.ngItemSetBtn').click(function(){
		$('.ngItemSetModalWrap').show()
		$('.container,.price,.status,.header,.listSlideWrap').addClass('modal_blur')
	});
	$('.ngItemSetBtn_set,.ngItemSetBtn_cancel,.ngItemSetModal_overlay').click(function() {
		$('.ngItemSetModalWrap').hide()
		$('.container,.price,.status,.header,.listSlideWrap').removeClass('modal_blur')
	}); //査定不可品登録モーダル表示非表示

	$('.ngItemSetSuccessBtn').click(function(){
		$('.ngItemSetSuccessModalWrap').show()
		$('.container,.price,.status,.header,.listSlideWrap').addClass('modal_blur')
	});
	$('.ngItemSetSuccessBtn_entry,.ngItemSetSuccessModal_overlay').click(function() {
		$('.ngItemSetSuccessModalWrap').hide()
		$('.container,.price,.status,.header,.listSlideWrap').removeClass('modal_blur')
	}); //査定不可品登録完了モーダル表示非表示

	$('.priceSetNgBtn').click(function(){
		$('.priceSetNgModalWrap').show()
		$('.container,.price,.status,.header,.listSlideWrap').addClass('modal_blur')
	});
	$('.priceSetNgBtn_entry,.priceSetNgModal_overlay').click(function() {
		$('.priceSetNgModalWrap').hide()
		$('.container,.price,.status,.header,.listSlideWrap').removeClass('modal_blur')
	}); //値付け失敗モーダル表示非表示

	$('.priceSetSuccessBtn').click(function(){
		$('.priceSetSuccessModalWrap').show()
		$('.container,.price,.status,.header,.listSlideWrap').addClass('modal_blur')
	});
	$('.priceSetSuccessBtn_entry,.priceSetSuccessModal_overlay').click(function() {
		$('.priceSetSuccessModalWrap').hide()
		$('.container,.price,.status,.header,.listSlideWrap').removeClass('modal_blur')
	}); //値付け成功モーダル表示非表示

	$('.nextFlowBtn').click(function(){
		$('.nextFlowModalWrap').show()
		$('.container,.price,.status,.header,.listSlideWrap').addClass('modal_blur')
	});
	$('.nextFlowBtn_entry,.nextFlowModal_overlay').click(function() {
		$('.nextFlowModalWrap').hide()
		$('.container,.price,.status,.header,.listSlideWrap').removeClass('modal_blur')
	}); //次のフロー指示モーダル表示非表示

	$('.assessmentSendBtn').click(function(){
		$('.assessmentSendModalWrap').show()
		$('.container,.price,.status,.header,.listSlideWrap').addClass('modal_blur')
	});
	$('.assessmentSendBtn_set,.assessmentSendBtn_cancel,.assessmentSendModal_overlay').click(function() {
		$('.assessmentSendModalWrap').hide()
		$('.container,.price,.status,.header,.listSlideWrap').removeClass('modal_blur')
	}); //査定結果送信モーダル表示非表示

	$('.assessmentSendCompleteBtn').click(function(){
		$('.assessmentSendCompleteModalWrap').show()
		$('.container,.price,.status,.header,.listSlideWrap').addClass('modal_blur')
	});
	$('.assessmentSendCompleteBtn_entry,.assessmentSendCompleteModal_overlay').click(function() {
		$('.assessmentSendCompleteModalWrap').hide()
		$('.container,.price,.status,.header,.listSlideWrap').removeClass('modal_blur')
	}); //査定結果送信完了モーダル表示非表示





});
