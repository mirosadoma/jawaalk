$(window).on("load", function () {
  //preloader
  $(".pre-loader").fadeOut("500", function () {
    $("body").removeClass("overflow");
    $(this).remove();
  });

  if ($(".pre-loader").length == 0) {
    $("body").removeClass("overflow");
  }

  // animate on scroll
  AOS.init({
    duration: 700,
    mirror: true,
    once: true,
    disable: function () {
      var maxWidth = 992;
      return window.innerWidth < maxWidth;
    },
    easing: "ease-in-out",
  });

  //nava toggle
  $("#nava-icon").click(function (e) {
    $("#nava").toggleClass("nava-active");
    $("html").toggleClass("overflow");
  });

  $("#nava").click(function (e) {
    if (
      e.target.id == "nava" ||
      e.target.id == "close-nava" ||
      e.target.parentNode.id == "close-nava"
    ) {
      $(this).removeClass("nava-active");
      $("html").removeClass("overflow");
    }
  });

  //search toggle
  $("#search-btn").click(function (e) {
    $("#search-form").toggleClass("search-form-active");
    $("html").toggleClass("overflow");
  });

  $("#search-form").click(function (e) {
    if (
      e.target.id == "search-form" ||
      e.target.id == "close-search" ||
      e.target.parentNode.id == "close-search"
    ) {
      $(this).removeClass("search-form-active");
      $("html").removeClass("overflow");
    }
  });

  $(".slide").on("click", function (e) {
    if (
      (e.target.classList.contains("drop") &&
        e.target.parentNode.classList.contains("slide")) ||
      e.target.classList.contains("slide")
    ) {
      $(this).toggleClass("slide-active");
      $(this).children(".top-dropDown").slideToggle();
    }
  });

  $(".more-messages").on("click", function (e) {
    console.log(e.target);
    if (e.target.classList.contains("show")) {
      $(this).addClass("slide-active");
      $(this).children(".more-messages-body").slideDown();
      $(this).children('.show').fadeOut(300);
      $(this).children('.hide').fadeIn(300);
    }else if(e.target.classList.contains("hide")){
      $(this).removeClass("slide-active");
      $(this).children(".more-messages-body").slideUp();
      $(this).children('.hide').fadeOut(300);
      $(this).children('.show').fadeIn(300);
    }
  });

  function changeSlide() {
    if (window.innerWidth <= 992) {
      $(".sm-slide").removeClass("top-setting");
      $(".sm-slide").addClass("slide");
      $(".sm-slide .top-dropDown").css("display", "none");
    } else {
      $(".sm-slide").addClass("top-setting");
      $(".sm-slide").removeClass("slide");
      $(".sm-slide .top-dropDown").css("display", "unset");
    }
  }

  changeSlide();

  window.addEventListener("resize", changeSlide);

  var mySwiper = new Swiper("header .swiper-container", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    updateOnWindowResize: true,
    autoplay: {
      delay: 5000,
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var mySwiper2 = new Swiper(".s-container", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    updateOnWindowResize: true,
    slidesPerView: 5,
    spaceBetween: 25,
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      // when window width is >= 480px
      1200: {
        slidesPerView: 5,
        spaceBetween: 25,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      576: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      // when window width is >= 480px
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  window.addEventListener("scroll", scrolled);

  function scrolled() {
    let up = document.getElementById("up");
    if (this.scrollY > 200) {
      up.classList.add("active-up");
    } else {
      up.classList.remove("active-up");
    }
  }

  // password input eye
  $(".passwordEye").on("mousedown", (e) => {
    let parent = $(e.target.parentNode.parentNode);
    parent.find("input").attr("type", "text");
  });
  $(".passwordEye").on("mouseup", (e) => {
    let parent = $(e.target.parentNode.parentNode);
    parent.find("input").attr("type", "password");
  });

  //input image
  $(".file-input").on("change", (e) => {
    let parent = $(e.target.parentNode);
    let holder = parent.find(".s-input")[0];
    let val = e.target.value;
    val = val.split("\\");
    val = val[val.length - 1];
    holder.innerHTML = val;
  });

  $(".file-input2").on("change", function (e) {
    let parent = $(e.target.parentNode);
    let holder = parent.find(".holder")[0];
    readURL(this, holder);
  });

  function readURL(input, holder) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $(holder).attr("src", e.target.result);
      };

      reader.readAsDataURL(input.files[0]); // convert to base64 string
    }
  }

  $("#imgInp").change(function () {
    readURL(this);
  });

  // forgoy-verify page --- input jump
  if ($(".input-verify")[0]) {
    inputJumb();
  }

  function inputJumb() {
    $(".input-verify")[0].select();

    $(".input-verify").on("input", (e) => {
      if (e.target.value && e.target.nextElementSibling) {
        e.target.nextElementSibling.select();
      }
    });
  }
});