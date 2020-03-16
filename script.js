$(document).ready(function(){

    //add image links below
    
    var images= [];
    images[0]= 'images/banner.jpg';
    images[1]= 'images/banner.jpg';
    images[2]= 'images/banner.jpg';
    images[3]= 'images/banner.jpg';
    images[4]= 'images/banner.jpg';
    
    //add caption text
    
    var capTexts= [];
    capTexts[0]= 'Caption Text';
    capTexts[1]= 'Caption Text';
    capTexts[2]= 'Caption Text';
    capTexts[3]= 'Caption Text';
    capTexts[4]= 'Caption Text';
    
    
    //3000 miliseconds=3 seconds
    //set time 
    
    var pausebetweenimages=3000;
    
    var count=0;
    var imageCount= images.length-1;
    
    //creating navigation dots
    
    var navDots= [];
    
    for(var i=0; i<imageCount+1; i++)
    {
    navDots[i]='<div class="dot"></div>';
    $('.dot-container').append(navDots[i]);
    }
    
    $('.main-content').html('<img src=' + images[count] +'>');
    
    //adding .responsive-img class to set image's width and height 100%
    
    $('.main-content > img').addClass('responsive-img');
    
    //adding .active class to current navigation dot's index
    
    $( '.dot' ).eq(count).addClass('active');
    
    //animating caption text
    
    $('.captionText').animate({
    'left': '40px',
    'opacity': '.8'
    }, 500);
    $('.captionText').text(capTexts[count]);
    
    //fucntion that will run a certain time intervals
    
    timingRun = setInterval(function(){ sliderTiming();}, pausebetweenimages); 
    
    function sliderTiming ()
    {
    $( '.dot' ).eq(count).removeClass('active');
    count++;
    
    if(count>imageCount)
    {
    count=0;
    }
    
    //fadein and fadeout effect
    
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
    
    //reset the time interval
    
    function resetTiming() {
    clearInterval(timingRun);
    timingRun = setInterval(function() { sliderTiming(); },pausebetweenimages);
    }
    
    //animating caption text with responsiveness
    
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
    
    });