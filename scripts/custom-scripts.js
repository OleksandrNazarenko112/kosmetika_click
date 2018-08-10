$(document).ready(function() { 
//mobile footer 
   $(window).resize(function(){
        if ($(window).width() > 1200){
        	$('.logo').removeClass('hide');
        	$('.header-search-input').addClass('hide');
        	$('.navbar-inverse .navbar-toggle').css('margin-right', '20px');
        	$('.search-input-show').removeClass('hide');
        	$('.header-mobile-nav img').css('margin-left', '20px');
        }
 mobileFooter();
    });
function mobileFooter(){
        if($(window).width() <= 752){
        	$('#osaine').addClass('collapse');
        	$('#obchod').addClass('collapse');
        	$('.shop button').attr('data-toggle', 'collapse');
        	$('.about-company button').attr('data-toggle', 'collapse');

        }
        if($(window).width() > 752 && $(window).width() <= 812){
        	$('#osaine').removeClass('collapse');
        	$('#obchod').removeClass('collapse');
        	$('.shop button').attr('data-toggle', '');
        	$('.about-company button').attr('data-toggle', '');

        }
    }
    mobileFooter();

    $('.basic-input').on('keyup', function(){
        if($(this).val() != '') {
        $('input[required]:focus + label').css('visibility', 'hidden');
        }
        if($(this).val() == '') {
        $('input[required]:focus + label').css('visibility', 'visible');
        }
    });
    $('#country-select li a').on('click', function(){
        $('#country-btn').addClass('selected');
        $('#country-btn').val($(this).text());
        $('#country-btn').text($(this).text())
    });
    $('#shop-adress-select li a').on('click', function(){
        $('#shop-adress-btn').addClass('selected');
        $('#shop-adress-btn').val($(this).text());
        $('#shop-adress-btn').text($(this).text())
    });
    $('.promo-code-container a').on('click', function(){
        $(this).hide();
        $('.promo-code-container input').addClass('show').focus();
    })
});