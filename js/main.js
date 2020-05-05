(function ($) {
	"use strict";

	var burgerMenu = function () {
		$('.burger').click(function (e) {
			$(window).scrollTop(0);
			if (!$('.burger').hasClass('active'))
				$('.burger').addClass('active');
			else
				$('.burger').removeClass('active');
		});
	}
	burgerMenu();

	var siteIstotope = function () {
		var $container = $('#portfolio-grid').isotope({
			itemSelector: '.item',
			isFitWidth: true
		});

		$(window).resize(function () {
			$container.isotope({
				columnWidth: '.col-sm-3'
			});
		});

		$container.isotope({
			filter: '*'
		});

		$('#filters').on('click', 'a', function (e) {
			e.preventDefault();
			var filterValue = $(this).attr('data-filter');
			$container.isotope({
				filter: filterValue
			});
			$('#filters a').removeClass('active');
			$(this).addClass('active');
		});
	}
	$(window).on('load', function () {
		siteIstotope();
	});


	var siteOwlCarousel = function () {
		$('.testimonial-carousel').owlCarousel({
			center: true,
			items: 1,
			loop: true,
			margin: 0,
			autoplay: true,
			smartSpeed: 1000,
		});
	};
	siteOwlCarousel();


})(jQuery);

AOS.init({
	easing: 'ease',
	duration: 1000,
	once: true
});

particlesJS('particles-js', {
	particles: {
		color: '#fff', // Color del vertice
		color_random: false,
		shape: 'triangle', // "circle", "edge" or "triangle" // Establecemos cual de las 3 figuras queremos para vertice
		opacity: {
			opacity: 1, // Opacidad del vertice
			anim: {
				enable: true,
				speed: .5,
				opacity_min: 0,
				sync: false
			}
		},
		size: 4,
		size_random: true,
		nb: 150,
		line_linked: {
			enable_auto: true,
			distance: 100,
			color: '#fff', // Color de la arista
			opacity: 1, // Opacidad de la arista
			width: 1,
			condensed_mode: {
				enable: false,
				rotateX: 600,
				rotateY: 600
			}
		},
		anim: {
			enable: true,
			speed: 1 // Velocidad a la que se mueven las aristas
		}
	},
	interactivity: {
		enable: true,
		mouse: {
			distance: 300
		},
		detect_on: 'canvas', // "canvas" or "window"
		mode: 'grab', // "grab" of false
		line_linked: {
			opacity: .5
		},
		events: {
			onclick: {
				enable: true,
				mode: 'push', // "push" or "remove"
				nb: 4
			},
			onresize: {
				enable: true,
				mode: 'out', // "out" or "bounce"
				density_auto: false,
				density_area: 800 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
			}
		}
	},
	/* Retina Display Support */
	retina_detect: true
});