$(function(){
    var words = [
            'Empower',
            'Thuthuka',
            'Matlafatsa',
            'Matlafatsa',
            'Shomedzani',
            'Bemagtig',
            'Tiyisa',
            'Matlafatsa '
            ], i = 0; // i for counting
    
        setInterval(function(){
            $('.changes').fadeOut(function(){ //fadeout text
                $(this).html(words[i=(i+1)%words.length]).fadeIn(); //update, count and fadeIn
            });
        }, 2000 ); //2s
    })

    function openNav() {
        document.getElementById("myNav").style.display = "block";
      }
      
      function closeNav() {
        document.getElementById("myNav").style.display = "none";
      }


// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//       x.className += " responsive";
//     } else {
//       x.className = "topnav";
//     }
//   }

  function openNav() {
    document.getElementById("myNav").style.display = "block";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.display = "none";
  }

  document.addEventListener("scroll", function() {

    if (window.pageYOffset >4)
    document.getElementById('anything').style.display = "block";
    })