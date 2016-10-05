/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
function Quiz() {
  var question1 = prompt("What kind of hair does Donald Trump have?");

  if (question1 === "corn hair") {
    alert("YOU ARE CORRECT!")
  } else {
    alert("YOU ARE WRONG!");
  }
  var question2 = prompt("Is Donald Trump the grinch or a human?");

  if (question2 === "grinch")
    alert("YOU ARE CORRECT!")
  else
    alert("YOU ARE WRONG!");

  var question3 = prompt("Is Donald Trump good or evil?");

  if (question3 === "evil") {
    alert("YOU ARE RIGHT!")
  } else {
    alert("YOU ARE INCORRECT!");
  }
  var question4 = prompt("What is Donald Trumps secret plans?");

  if (question4 === "is to end human speices and make a new generation of grinches") {
    alert("YOU ARE perfect and smart!")
  } else {
    alert("YOU ARE STOOPID!");
  }
  var question5 = prompt("What is Donald Trump's real name?");

  if (question5 === "Mr.Cornch") {
    alert("Brilliant!")
  } else {
    alert("denied!");
  }
}

(function($) {

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1140px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)',
		xxsmall: '(max-width: 320px)'
	});


	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 250);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

		// Scrolly.
			$('.scrolly').scrolly();

	});

})(jQuery);


