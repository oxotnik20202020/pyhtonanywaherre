$(document).ready(function(){
    mobile();
    
    $(window).scroll(function(){
        if($(this).scrollTop()>=150){
            $('.cursorchick').css({'opacity' : '1', 'display' : 'block'});
        }
        else if ($(this).scrollTop()<150) {
            $('.cursorchick').css({'opacity' : '0', 'display' : 'none'});
        }
    });

    $('.cursorchick').on('click', function(){
        $('body,html').animate({scrollTop: 0}, 700);    
    });

    $(window).resize(function(){
        mobile();
    });

    function mobile() {
        if(window.innerWidth < 1366){
            $('mobile').css({'display':'block'});
            $('mobile').css({'opacity':'1'});
            $('.header, .content').css({'display':'none'});
            $('.header, .content').css({'opacity':'0'});
        }
        else if (window.innerWidth > 1366) {
            $('mobile').css({'display':'none'});
            $('mobile').css({'opacity':'0'});
            $('.header, .content').css({'display':'block'});
            $('.header, .content').css({'opacity':'1'});
        }
    }
});