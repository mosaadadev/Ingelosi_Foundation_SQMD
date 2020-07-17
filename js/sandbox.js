$(function(){
    var words = [
            'Zulu-thuthuka',
            'matlafatsa',
            'empower',
            'shomedzani',
            'bemagtig',
            'tiyisa',
            'matlafat '
            ], i = 0; // i for counting
    
        setInterval(function(){
            $('.changes').fadeOut(function(){ //fadeout text
                $(this).html(words[i=(i+1)%words.length]).fadeIn(); //update, count and fadeIn
            });
        }, 2000 ); //2s
    })
$(".jumbotron").css({ height: $(window).height() + "px" });

$(window).on("resize", function() {
  $(".jumbotron").css({ height: $(window).height() + "px" });
});
