$(document).ready(function(){
    
    var images= [];
    images[0]= 'images/slide1.jpg';
    images[1]= 'images/slide2.jpg';
    images[2]= 'images/slide3.png';
    
    var capTexts= [];
    capTexts[0]= 'Big Bad Wolf';
    capTexts[1]= 'Bank Promo';
    capTexts[2]= 'Contest';
    
    var pausebetweenimages=3000;
    
    var count=0;
    var imageCount= images.length-1;
    
    var navDots= [];
    
    for(var i=0; i<imageCount+1; i++)
    {
        navDots[i]='<div class="dot"></div>';
        $('.dot-container').append(navDots[i]);
    }
    
    $('.main-content').html('<img src=' + images[count] +'>');
    
    $('.main-content > img').addClass('responsive-img');
    
    $( '.dot' ).eq(count).addClass('active');
    
    $('.captionText').animate({
    'left': '40px',
    'opacity': '.8'
    }, 500);
    $('.captionText').text(capTexts[count]);
    
    timingRun = setInterval(function(){ sliderTiming();}, pausebetweenimages); 
    
    function sliderTiming ()
    {
        $( '.dot' ).eq(count).removeClass('active');
        count++;
        
        if(count>imageCount)
        {
        count=0;
        }
        
        $('.main-content').fadeOut(100,function () {
            $('.main-content').html('<img src=' + images[count] +'>');
            $('.main-content > img').addClass('responsive-img');
            $( '.dot' ).eq(count).addClass('active');
            $('.main-content').fadeIn(500);
            
            captextAnim_Responsive();
        });
    }
    
    
    $('.right-arrow>img').click(function(){
    $( '.dot' ).eq(count).removeClass('active');
    count++;
    if(count>imageCount)
    {
    count=0;
    }
    $('.main-content').fadeOut(100, function () {
    $('.main-content').html('<img src=' + images[count] +'>');
    $('.main-content > img').addClass('responsive-img');
    $( '.dot' ).eq(count).addClass('active');
    $('.main-content').fadeIn(500);
    
    captextAnim_Responsive();
    }); 
    resetTiming();
    });
    
    $('.left-arrow>img').click(function(){
    $( '.dot' ).eq(count).removeClass('active');
    count--;
    if(count<0)
    {
    count=imageCount;
    }
    $('.main-content').fadeOut(100, function () {
    $('.main-content').html('<img src=' + images[count] +'>');
    $('.main-content > img').addClass('responsive-img');
    $( '.dot' ).eq(count).addClass('active');
    $('.main-content').fadeIn(500);
    
    captextAnim_Responsive();
    });
    resetTiming();
    });
    
    $('.dot').click(function () {
    $( '.dot' ).eq(count).removeClass('active');
    count= $(this).index();
    $('.main-content').fadeOut(100,function () {
    $('.main-content').html('<img src=' + images[count] +'>');
    $('.main-content > img').addClass('responsive-img');
    $( '.dot' ).eq(count).addClass('active');
    $('.main-content').fadeIn(500);
    
    captextAnim_Responsive();
    });
    resetTiming();
    });
    
    function resetTiming() {
    clearInterval(timingRun);
    timingRun = setInterval(function() { sliderTiming(); },pausebetweenimages);
    }
    
    function captextAnim_Responsive(){
    if ($(window).width() <= 500)
    {
    $('.captionText').css('opacity', '0');
    $('.captionText').css('left', '0'); 
    $('.captionText').text(capTexts[count]);
    $('.captionText').animate({
    'left': '10px',
    'opacity': '.8'
    }, 500); 
    } 
    
    else {
    $('.captionText').css('opacity', '0');
    $('.captionText').css('left', '0'); 
    $('.captionText').text(capTexts[count]);
    $('.captionText').animate({
    'left': '40px',
    'opacity': '.8'
    }, 500);
    } 
    }

    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll-top').fadeIn(); 
        } else { 
            $('#scroll-top').fadeOut(); 
        } 
    }); 
    $('#scroll-top').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
    $('#hamburger').click(function(){
        $('#nav-side').show();
        $('#nav-side').animate({right:0}, 600);
    });
    $('#close-menu').click(function(){
        $('#nav-side').animate({right:"-300px"}, 600);
        $('#nav-side').hide("slow");
    });
    $('.has-dropdown').click(function(){
        $('.nav-side-child').animate({height:"100%"}, 600);
        $('.nav-side-child').toggle();
    })
});