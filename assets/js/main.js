var show_menu = false
var card_count = 1

$(function() {


	var scrollPos = 0
	$(window).scroll(function(){
	   var st = $(this).scrollTop()
	   if (st > scrollPos){
	     $('.header').fadeOut()
	   } else {
	     $('.header').fadeIn()
	   }
	   scrollPos = st
	})


	$('body').on('click', '.card-slider__img', function(){
		var	 slider = $(this).closest('.card-slider')
		var bigimg = slider.find('.card-slider__bigimg img')
		bigimg.attr('src', $(this).data('src'))
		slider.find('.card-slider__img_active').removeClass('card-slider__img_active')
		$(this).addClass('card-slider__img_active')
		return false
	})

	$('.card-count__number').html( card_count )
	$('body').on('click', '.card-count__but', function(){
		var cardCount = $(this).closest('.card-count')
		if ( $(this).data('mod') === true ) {
			++card_count
		} else {
			--card_count
		}
		if ( card_count <= 0 ) card_count = 1
		$('.card-count__number').html( card_count )
	})

	$('body').on('click', '.footer-subscribe__button', function(){
		var footerSubscribe = $(this).closest('.footer-subscribe')
		var input = footerSubscribe.find('input')

		if ( validEmail( input.val() )) {
			input.val('')
			toastr.success('Вы подписаны');
		} else {
			toastr.error('Email не вадидный');
		}
	})

})

function addTo( mod ) {

	var name = $('.card-info__name').text()
	if ( mod == 'cart' ) {
		text = 'товар ' + name +' в количестве ' +  card_count + ' единиц добавлен в корзину'
		toastr.success(text);
	}
	if ( mod == 'fav' ) {
		text = 'товар ' + name + ' добавлен в избранное'
		toastr.success(text);
	}
}

function showMenu() {
	show_menu = !show_menu

	if ( show_menu ) {
		$('.mobail-menu').addClass('mobail-menu_active')
	} else {
		$('.mobail-menu').removeClass('mobail-menu_active')
	}
	return false
}

function validEmail(e) {
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return regexEmail.test(e)
}