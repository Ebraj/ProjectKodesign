gsap.registerPlugin(ScrollTrigger);

// Setting the timeline
const timeline = gsap.timeline();

// Animation Section
const init = () => {
	// Making the header Animation
	gsap.from('.header-left',{
		opacity:0,
		x:-40,
		duration:1,
		stagger:1.0
	})
	gsap.from('.header-right',{
		opacity:0,
		x:40,
		duration:1,
		stagger:1.0
	})
	gsap.from('#motto',{
		opacity:0,
		y:60,
		duration:1,
		delay:0.5,
	});

	// Create the Image Section Animating
	gsap.from('.image__container__1',{
		opacity:0,
		scale:0.5,
		duration:1,
		scrollTrigger:{
			start:'center bottom',
			trigger:'.image__container__1',
		}
	});

	// Course Section Animation
	gsap.from('#course__top',{
		opacity:0,
		y:-20,
		scrollTrigger:{
			start:'top center',
			trigger:'#course__section',
		}
	})
	gsap.from('#left__container',{
		opacity:0,
		x:-40,
		scrollTrigger:{
			start:'top center',
			trigger:'#course__section',
		}
	})
	gsap.from('#right__container',{
		opacity:0,
		x:40,
		scrollTrigger:{
			start:'top center',
			trigger:'#course__section',
		}
	})
	gsap.from('.number',{
		opacity:0,
		stagger:0.35,
		delay:0.5,
		scrollTrigger:{
			start:'top center',
			trigger:'#course__section',
		}
	})

	// Create the Image Section Animating
	gsap.from('#image__container__2',{
		opacity:0,
		scale:0.5,
		duration:1,
		scrollTrigger:{
			start:'center bottom',
			trigger:'#image__container__2',
		}
	});

	// Animation of the work section
	gsap.from('.work__list',{
		opacity:0,
		scale:0.5,
		stagger:0.35,
		scrollTrigger:{
			start:'center bottom',
			trigger:'#work__section',
		}
	})

	// Create the Image Section Animating
	gsap.from('#image__container__3',{
		opacity:0,
		scale:0.5,
		duration:1,
		scrollTrigger:{
			start:'center bottom',
			trigger:'#image__container__3',
		}
	});

	// Animating the about Section
	gsap.from('#about__top',{
		opacity:0,
		y:-20,
		scrollTrigger:{
			start:'top center',
			trigger:'#about__section',
		}
	})
	gsap.from('.left__container__about',{
		opacity:0,
		x:-40,
		scrollTrigger:{
			start:'top center',
			trigger:'#about__section',
		}
	})
	gsap.from('#right__container__about',{
		opacity:0,
		x:40,
		scrollTrigger:{
			start:'top center',
			trigger:'#about__section',
		}
	})	

	// Create the Image Section Animating
	gsap.from('#image__container__4',{
		opacity:0,
		scale:0.5,
		duration:1,
		scrollTrigger:{
			start:'center bottom',
			trigger:'#image__container__4',
		}
	});

	// Learners Section
	gsap.from('.review',{
		opacity:0,
		scale:0.5,
		stagger:0.4,
		scrollTrigger:{
			start:'top center',
			trigger:'#client__section'
		}
	});

	// Create the Image Section Animating
	gsap.from('#image__container__5',{
		opacity:0,
		scale:0.5,
		duration:1,
		scrollTrigger:{
			start:'center bottom',
			trigger:'#image__container__5',
		}
	})

}

// Working on the body Section
window.addEventListener('load',()=>{
	init();
});
