var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 10,
      speed: 700,
       autoplay: {
    		delay: 2000,
    		transition: true
  		},
      breakpoints: {
      	600: {
      		slidesPerView: 1,
      		spaceBetween: 10
      	},

      	900: {
      		slidesPerView: 2,
      		spaceBetween: 30
      	}
      },
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    var swiper2 = new Swiper('.swiper-container2', {
    	slidesPerView: 2,
    	spaceBetween: 75,
    	breakpoints: {
    		748: {
    			slidesPerView: 1,
    			spaceBetween: 20
    		}
    	},
    	loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });