
<!-- //SCRIPT FOR LAZY LOADING//-->


	!function(window){
		var $q = function(q, res){
			if (document.querySelectorAll) {
				res = document.querySelectorAll(q);
			} else {
				var d=document
				, a=d.styleSheets[0] || d.createStyleSheet();
				a.addRule(q,'f:b');
				for(var l=d.all,b=0,c=[],f=l.length;b<f;b++)
					l[b].currentStyle.f && c.push(l[b]);

				a.removeRule(0);
				res = c;
			}
			return res;
		}
		, addEventListener = function(evt, fn){
			window.addEventListener
			? this.addEventListener(evt, fn, false)
			: (window.attachEvent)
			? this.attachEvent('on' + evt, fn)
			: this['on' + evt] = fn;
		}
		, _has = function(obj, key) {
			return Object.prototype.hasOwnProperty.call(obj, key);
		}
		;

		function loadImage (el, fn) {
			var img = new Image()
			, src = el.getAttribute('data-src');
			img.onload = function() {
				if (!! el.parent)
					el.parent.replaceChild(img, el)
				else
					el.src = src;

				fn? fn() : null;
			}
			img.src = src;
		}

		function elementInViewport(el) {
			var rect = el.getBoundingClientRect()

			return (
				rect.top    >= 0
				&& rect.left   >= 0
				&& rect.top <= (window.innerHeight || document.documentElement.clientHeight)
				)
		}

		var images = new Array()
		, query = $q('img.lazy')
		, processScroll = function(){
			for (var i = 0; i < images.length; i++) {
				if (elementInViewport(images[i])) {
					loadImage(images[i], function () {
						images.splice(i, i);
					});
				}
			};
		}
		;
    // Array.prototype.slice.call is not callable under our lovely IE8 
    for (var i = 0; i < query.length; i++) {
    	images.push(query[i]);
    };

    processScroll();
    addEventListener('scroll',processScroll);

}(this);






// Login Signup Popup
$("#step1").show();
$("#step2").hide();
$("#step3").hide();
$("#step4").hide();

$('#step1 .submit').click(function(){
    $("#step1").hide();
    $("#step2").show();
    $("#step3").hide();
    $("#step4").hide();
})
$('#step2 .submit').click(function(){
    $("#step1").hide();
    $("#step2").hide();
    $("#step3").show();
    $("#step4").hide();
})
$('#step3 .submit').click(function(){
    $("#step1").hide();
    $("#step2").hide();
    $("#step3").hide();
    $("#step4").show();
})
$('#numchange').click(function(){
    $("#step1").show();
    $("#step2").hide();
    $("#step3").hide();
    $("#step4").hide();
})








//script for closing mob menu when clicked on list //

    $(document).ready(function () {
      $(".mob-link").click(function(){
    $(".cd-dropdown-trigger").removeClass("dropdown-is-active");
    $(".cd-dropdown").removeClass("dropdown-is-active");
  });

});






//sticky nvbar
// window.onscroll = function() {myFunction()};

// var x = document.getElementById("hd-main");
// var sticky = x.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     x.classList.add("sticky");
//   } else {
//     x.classList.remove("sticky");
//   }
// }