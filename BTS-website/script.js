$(document).ready(function(){
    $('#email').hide();
    $('#comment').hide();
    $('#thankYou').hide();
    $('#thankYou1').hide();
    $('.fa-arrow-alt-circle-right').each(function(){
        $(this).click(function()
        {
    
            var yourName;
            var previous = this.previousElementSibling;
            if(previous.name=="name1")
            {	
    
                
                if(previous.value.trim()=="")
                {
                    $('#name').addClass("animate1");
                    console.log("null");
                }else{
    /*					yourName = previous.value;
                    const output1 = `Thank you ${yourName}`;
                    $('#thankYou1').innerHTML= output1;
                    console.log(output1);
    
                    console.log(yourName);*/
                    /*$("#name").addClass(".inactive");*/
                    $("#name").fadeOut();
                    $("#email").fadeIn();
                }
                
            }
            if(previous.name=="email1")
                
            {
                if(previous.value.trim()==""){
    
                    $('#email').addClass("animate1");
            
                    console.log("null");
                }else{
                    var check = false;
                    for(var i = 0; i<previous.value.length;i++)
                    {	
                        if(previous.value.charAt(i)=="@")
                        {
                            $('#email').fadeOut();
                            $('#comment').fadeIn();
                            check = true;
                        }
                    }
                        if(check==false){
                            $('#email').addClass("animate1");
                        }
    
                }
            }
    
    
            if(previous.name=="comment1")
            {
                if(previous.value.trim()=="")
                {
                    $('#feedback').addClass("animate1");
                }else{
                    $('#comment').fadeOut();
                    $('#thankYou').fadeIn();
                }
            }
    
        });
    });


    $('.d1').slick({
        dots: false,
        infinite: true,
        autoplay:true,
        autoplaySpeed: 1600,
        fade:true,
        arrows: false,
        pauseOnHover:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
              
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          
        ]
    });

    $('.image3').slick({
        dots: false,
        infinite: true,
        autoplay:true,
        autoplaySpeed: 2800,
        fade:true,
        arrows: false,
        pauseOnHover:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
              
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          
        ]
    });

    $('.image2').slick({
        dots: false,
        infinite: true,
        autoplay:true,
        autoplaySpeed: 2800,
        fade:true,
        arrows: false,
        pauseOnHover:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
              
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });

    $('.image1').slick({
        dots: false,
        infinite: true,
        autoplay:true,
        autoplaySpeed: 2800,
        fade:true,
        arrows: false,
        pauseOnHover:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
              
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          
        ]
    });
    
    $('#calendar').slick({
        infinite:true,
        dots: false,
        slidesToShow:1,
        slidesToScroll:1,
        fade:true,
        arrows: false,
        pauseOnHover:false,
        autoplay:true,
        autoplaySpeed: 3200,
    });

    


$('.videos1').slick({
    dots: false,
    infinite: true,
    autoplay:true,
    utoplaySpeed: 200,
    arrows: false,
    buttons:false,
    pauseOnHover:false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1166,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      
    ]
  });

  $('.videos2').slick({
    dots: false,
    infinite: true,
    autoplay:true,
    utoplaySpeed: 200,
    arrows: false,
    buttons:false,
    pauseOnHover:false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1166,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      
    ]
  });

  
  
  

    $('.d2').slick({
        dots: false,
        infinite: true,
        autoplay:true,
        autoplaySpeed: 900,
        fade:true,
        arrows: false,
        pauseOnHover:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 300,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
              
            }
          },
          {
            breakpoint: 250,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 200,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          
        ]
    });

    

  });
  var NavDiv = document.querySelector("#nav");
  var BTS = document.querySelector(".BTS");
  NavDiv.classList.add("hide");

  $(".toggle-icon").click(function() {
    $('#nav-container').toggleClass("pushed");
    NavDiv.classList.toggle("hide");
    NavDiv.classList.add("trans");
    BTS.classList.toggle("hide");
  });


 



