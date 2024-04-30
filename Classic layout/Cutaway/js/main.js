// Jquery burger
$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

// JS

//Portfolio - website

const buttonSite = document.getElementById('portfolio__keys'),
	  exampleSite = document.querySelectorAll('.portfolio__example'),
	  frispers = document.querySelector ('.portfolio__btn');

const changeButtons = el => {
		for(let i = 0; i< buttonSite.children.length; i++) {
				buttonSite.children[i].classList.remove ('active');
		}
		el.classList.add('active');
}
// currTab - кнопки 
buttonSite.addEventListener('click', e => {
	const currTab = e.target.dataset.btn;
	changeButtons(e.target);
	for (let i = 0; i < exampleSite.length; i++) {
		exampleSite[i].classList.remove ('active');
		if (exampleSite[i].dataset.site === currTab) {
			exampleSite[i].classList.add('active');
		}
		if (!currTab) {
			exampleSite[0].classList.add('active');
		}
	}
})




//slider

const prev = document.querySelector('.landing__arrowleft'),
	  next = document.querySelector('.landing__arrowright'),
	  slides = document.querySelectorAll('.landing__foto'),
	  dots = document.querySelectorAll('.landing__dot'),
	  //sertificate
	  serts = document.querySelectorAll('.popup__wrapper'),
	  nextes = document.querySelector('.popup__arrowright'),
	  prevs = document.querySelector('.popup__arrowleft'),
	  //portfolio
	  prevPortfolio = document.querySelector('.portfolio__arrow_right'),
	  nextPortfolio = document.querySelector('.portfolio__arrow_left'),
	  slidesPortfolio3 = document.querySelectorAll('.portfolio__anketa'), 
	  slidesPortfolio2 = document.querySelectorAll('.portfolio__stolovay'), 
	  slidesPortfolio = document.querySelectorAll('.portfolio__frispers');


let index = 0,
	indexs = 0,
	indexp = 0,
	indexm = 0,
	indexa = 0;

//Удаляем и добавляем картинки

const activeSlide = n => {
	for (slide of slides) {
		slide.classList.remove('active');
	}
	slides[n].classList.add('active');
}



//Удаляем и добавляем фон для точек

const activeDot = n => {
	for (dot of dots) {
		dot.classList.remove('active');
	}
	dots[n].classList.add('active');
}
 //Уменьшаем количество строк кода через создание новой функции

 const prepareCurrentSlide = ind => {
 		activeSlide(index);
		activeDot(index);
 }

 	    
//Связываем кнопку с картинкой и точкой

const nextSlide = () => {
	if (index == slides.length - 1) {
		index=0;
		prepareCurrentSlide(index);
	} else {
		index++;
		prepareCurrentSlide(index);
	}
}



const prevSlide = () => {
	if (index == 0) {
		index = slides.length - 1;
		prepareCurrentSlide(index);
	} else {
		index--;
		prepareCurrentSlide(index);
	}
}



// Создаем событие, при котором добавляются/меняются классы - клик
next.addEventListener ('click', nextSlide);
prev.addEventListener ('click', prevSlide);




// Событие для точек

dots.forEach ((item, indexDot) => {
	item.addEventListener ('click', () => {
		index = indexDot;
		prepareCurrentSlide(index);
	})	
})

//sertificate

const activeSert = m => {
	for (sert of serts) {
		sert.classList.remove('active');
	}
	serts[m].classList.add('active');
}
const nextSert = () => {
	if (indexs == serts.length - 1) {
		indexs=0;
		activeSert(indexs);
	} else {
		indexs++;
		activeSert(indexs);
	}
}
const prevSert = () => {
	if (indexs == 0) {
		indexs = serts.length - 1;
		activeSert(indexs);
	} else {
		indexs--;
		activeSert(indexs);
	}
}
nextes.addEventListener ('click', nextSert);
prevs.addEventListener ('click', prevSert);

//Автоматическое переключение слайдов в интервале 10 секунд
setInterval( nextSlide, 10000 );

//portfolio slider 

const activePort = l => {
	for (slidePortfolio of slidesPortfolio) {
		slidePortfolio.classList.remove('active');
	}
	slidesPortfolio[l].classList.add('active');
}
const nextPort = () => {
	if (indexp == slidesPortfolio.length - 1) {
		indexp=0;
		activePort(indexp);
	} else {
		indexp++;
		activePort(indexp);
	}
}
const prevPort = () => {
	if (indexp == 0) {
		indexp = slidesPortfolio.length - 1;
		activePort(indexp);
	} else {
		indexp--;
		activePort(indexp);
	}
}

nextPortfolio.addEventListener ('click', nextPort);
prevPortfolio.addEventListener ('click', prevPort);


 ///
 const activePort2 = s => {
	for (slidePortfolio2 of slidesPortfolio2) {
		slidePortfolio2.classList.remove('active');
	}
	slidesPortfolio2[s].classList.add('active');
}
const nextPort2 = () => {
	if (indexm == slidesPortfolio2.length - 1) {
		indexm=0;
		activePort2(indexm);
	} else {
		indexm++;
		activePort2(indexm);
	}
}
const prevPort2 = () => {
	if (indexm == 0) {
		indexm = slidesPortfolio2.length - 1;
		activePort2(indexm);
	} else {
		indexm--;
		activePort2(indexm);
	}
}

nextPortfolio.addEventListener ('click', nextPort2);
prevPortfolio.addEventListener ('click', prevPort2);

///
const activePort3 = a => {
	for (slidePortfolio3 of slidesPortfolio3) {
		slidePortfolio3.classList.remove('active');
	}
	slidesPortfolio3[a].classList.add('active');
}
const nextPort3 = () => {
	if (indexa == slidesPortfolio3.length - 1) {
		indexa=0;
		activePort3(indexa);
	} else {
		indexa++;
		activePort3(indexa);
	}
}
const prevPort3 = () => {
	if (indexa == 0) {
		indexa = slidesPortfolio3.length - 1;
		activePort3(indexa);
	} else {
		indexa--;
		activePort3(indexa);
	}
}

nextPortfolio.addEventListener ('click', nextPort3);
prevPortfolio.addEventListener ('click', prevPort3);

// course slider

const prevBig = document.querySelector('.section__bigarrow'),
	  nextBig = document.querySelector('.section__bigarrow_forward'),
	  slidesBig = document.querySelectorAll('.section__cource');

let indexBig=0;

const activePortb = z => {
	for (slideBig of slidesBig) {
		slideBig.classList.remove('active');
	}
	slidesBig[z].classList.add('active');
}
const nextPortb = () => {
	if (indexBig == slidesBig.length - 1) {
		indexBig = 0;
		activePortb(indexBig);
	} else {
		indexBig++;
		activePortb(indexBig);
	}
}
const prevPortb = () => {
	if (indexBig == 0) {
		indexBig = slidesBig.length - 1;
		activePortb(indexBig);
	} else {
		indexBig--;
		activePortb(indexBig);
	}
}

nextBig.addEventListener ('click', nextPortb);
prevBig.addEventListener ('click', prevPortb);

// Buttons

//button for slider
const btnCourse = document.querySelector('.section__courses'),
	div = document.querySelector('.popup__content_arrow'),
	popupofform = document.querySelector('.popup__sertificates');

btnCourse.addEventListener('click', ()=> {
	popupofform.classList.add('appearSert');
});
 
popupofform.addEventListener( 'click', (e) => {
	const withinBoundaries = e.composedPath().includes(div);
		if ( !withinBoundaries ) {
		popupofform.classList.remove('appearSert');
	} 
})

//button for forms

const btnWriteMe1 = document.querySelector('.btn__landing'),
	  btnWriteMe2 = document.querySelector('.btn__price'),
	  div2 = document.querySelector('.popup__feedback'),
	  formFeedBack = document.querySelector('.popup__forms');

btnWriteMe1.addEventListener('click', () => {
	formFeedBack.classList.add('appearForm');
})

btnWriteMe2.addEventListener('click', () => {
		formFeedBack.classList.add('appearForm');
	})

	formFeedBack.addEventListener( 'click', (e) => {
		const withinBoundaries2 = e.composedPath().includes(div2);
			if ( !withinBoundaries2 ) {
			formFeedBack.classList.remove('appearForm');
		} 
	})