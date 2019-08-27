// Sticky menu background
window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
      document.querySelector('#navbar').style.opacity = 0.9;
    } else {
      document.querySelector('#navbar').style.opacity = 1;
    }
  });
  
  
  // Smooth Scrolling
  // $('#navbar a, .btn').on('click', function(event) {
  //   if (this.hash !== '') {
  //     event.preventDefault();
  
  //     const hash = this.hash;
  
  //     $('html, body').animate(
  //       {
  //         scrollTop: $(hash).offset().top - 100
  //       },
  //       700
  //     );
  //   }
  // });



    // Smooth Scrolling Recipes
    $('a').on('click', function(event) {
      if (this.hash !== '') {
        event.preventDefault();
    
        const hash = this.hash;
    
        $('html, body').animate(
          {
            scrollTop: $(hash).offset().top - 100
          },
          700
        );
      }
    });


    // Main header - fade ins 

  $("#mainhead .main-content h2").delay(1000).animate({opacity: 1}, 700);
  $("#mainhead .main-content .row .display-4").delay(1400).animate({opacity: 1}, 700);
  $("#mainhead .main-content .row .display-5").delay(1800).animate({opacity: 1}, 700);
  $("#mainhead .main-content .row p, #mainhead .main-content .buttons").delay(2700).animate({opacity: 1}, 700);



// PRINT



  // set serving size to editabl
  // as its being edited, multiply serving size by ingredieants
  //set values

