let buttons =  document.querySelectorAll('.uppermenu li');
let dropmenus = document.querySelectorAll('.drop ul');


buttons.forEach(btn => {

    btn.onclick = function(e) {
        let id = this.id;

        for(let dropmenu of dropmenus){
            if(dropmenu.id===id){
                $(dropmenu).slideToggle();
            }
            else{
                $(dropmenu).slideUp();

            }
        }

    }
    for(let dropmenu of dropmenus){
            $(dropmenu).hide();
    }
})



$('.slide').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
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