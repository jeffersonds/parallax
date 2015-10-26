// var Progress_bar = (function() {
// 	var fn = this,
// 		winHeight = $(window).height(), 
//       	docHeight = $(document).height(),
//       	progressBar = $('progress'),
//       	max, value;
//     /* Set the max scrollable area */
// 	max = docHeight - winHeight;
// 	progressBar.attr('max', max);

//     fn.start = function() {
//     	$(document).on('scroll', function(){
//     	   value = $(window).scrollTop();
//     	   progressBar.attr('value', value);
//     	});
//     }

//     return fn;

// })();