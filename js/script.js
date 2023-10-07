$(document).ready(function(){
	const URL_APP = "https://script.google.com/macros/s/AKfycbzOFX4RIZiI_oQSqhTMrz31f-Xu26sM65-sfJTp_iNPqabp0KChgiYeCnxlUlS4tIUO/exec";
	//const URL_APP = "https://script.google.com/macros/library/d/1MfM1CA-kIwIGLT5ERBZGC-YXpFuwO8-5_wA_FoBcY4itbOYzt15Mi2SF/1";
	 $('.works__slider').slick({
	 	arrows:false,
	 	dots:true,
	 	adaptiveHeight: true,
	 	slidesToShow: 1,
	 	slidesToScroll: 1,
	 	speed:500,
	 	easing:'smooth',		
	 	infinite:false,
	 	initialSlide: 0,
	 	draggable: false,
	 	swipe:true,
	 	touchMove: false,
	 	touchThreshold: 10,
	 	waitForAnimate: true,
	 	variableWidth: false,
	 	fade: true,
	 	//responsive: [{
	 	//	breakpoint: 1366,
	 	//	settings: {
	 	//		arrows: false,
	 	//	}
	 	//}]
	 });
		

	var arrLang = {
		'en': {
			'home': 'Home',
			'skills': 'Skills',
			'works': 'Works',
			'contact': 'Contacts',

			'hello': 'Hello, I’m',
			'name': 'Denysenko Nikita',
			'disc': 'Programmer, Front-End Developer, Mobile Developer',
			'myskills': 'My Skills',

			'works_subtitle': 'Here you can see examples of some of my work.',
			'description': 'Description',
			'description_text1': 'Landing. Angular, SCSS, TypeScript. Connect with server. Paralax effect. Adaptive for all devices',
			'description_text2': 'Landing. HTML, SCSS, JavaScript. SlickSlider (jQuerry). Pop-Up menu. Adaptive for all devices',
			'description_text3': 'HTML, SCSS, jQuerry. SlickSlider (jQuerry). Adaptive for all devices. Multipager.',
			'description_text4': 'Landing. HTML, SCSS, JQuerry. SlickSlider (jQuerry). Multilingual. Adaptive for all devices. Connect with Google Tables. Paralax effect',
			'visit_side': 'Visit site',

			'contact_subtitle': 'Here you can contact me',
			'phone': 'Telegram',
			'mail': 'Email',
			'contact_subtitle2': 'if you got any question send me a message',
			'send': 'SEND',	

			'map': 'Ukraine, Odessa',
			'languages': 'Languages',
			'education': 'Education',
			'place_of_education': 'Nikolaev Maritime Lyceum named after Professor M. Alexandrov',
			'place_of_education2': 'Odesa I. I. Mechnykov National University',			
		},
		'ru': {
			'home': 'Главная',
			'skills': 'Возможности',
			'works': 'Портфолио',
			'contact': 'Контакты',

			'hello': '',
			'name': 'Денисенко Никита',
			'disc': 'Программист, Front-End Разработчик, Mobile Разработчик',
			'myskills': 'Мои Возможности',

			'works_subtitle': 'Тут вы можете увидеть примеры моих работ',
			'description': 'Описание',
			'description_text1': 'Landing. Angular, SCSS, TypeScript. Подключение к серверу. Паралакс эффект. Адаптировано под все экраны',
			'description_text2': 'Landing. HTML, SCSS, JavaScript. SlickSlider (jQuerry). Pop-Up меню. Адаптировано под все экраны',
			'description_text3': 'HTML, SCSS, jQuerry. SlickSlider (jQuerry). Адаптировано под все экраны. Многостраничник.',
			'description_text4': 'Landing. HTML, SCSS, JQuerry. SlickSlider (jQuerry). Многоязычный. Адаптировано под все экраны. Подключение к Google Tables. Паралакс эффект',
			'visit_side': 'Перейти на сайт',

			'contact_subtitle': 'Свяжитесь со мной',
			'phone': 'Телеграм',
			'mail': 'Почта',
			'contact_subtitle2': 'Если у вас остались вопросы, отправте мне сообщение',
			'send': 'ОТПРАВИТЬ',	

			'map': 'Украина, Одесса',
			'languages': 'Языки',
			'education': 'Обучение',
			'place_of_education': 'Николаевский морской лицей имени професора М. Александрова',
			'place_of_education2': 'Одесский национальный университет имени И. И. Мечникова',		
		},
		'ua': {
			'home': 'Головна',
			'skills': 'Можливості',
			'works': 'Портфоліо',
			'contact': 'Контакти',

			'hello': '', 
			'name': 'Денисенко Нікіта',
			'disc': 'Программіст, Front-End Розробник, Mobile Розробник',
			'myskills': 'Мої Можливості',

			'works_subtitle': 'Тут ви можете побачити приклади моїх робіт',
			'description': 'Опис',
			'description_text1': 'Landing. Angular, SCSS, TypeScript. Підключення к серверу. Паралакс ефект. Адаптовано під всі екрани',
			'description_text2': 'Landing. HTML, SCSS, JavaScript. SlickSlider (jQuerry). Pop-Up меню. Адаптовано під всі екрани',
			'description_text3': 'HTML, SCSS, jQuerry. SlickSlider (jQuerry). Адаптовано під всі екрани. Багатосторінковий.',
			'description_text4': 'Landing. HTML, SCSS, JQuerry. SlickSlider (jQuerry). Багатомовний. Адаптовано під всі екрани. Підключення к Google Tables. Паралакс ефект',
			'visit_side': 'Перейти на сайт',

			'contact_subtitle': "Зв'язатись зі мною",
			'phone': 'Телеграм',
			'mail': 'Пошта',
			'contact_subtitle2': 'Якщо у вас залишились питання, відправте мені повідомлення',
			'send': 'ВІДПРАВИТИ',	

			'map': 'Україна, Одеса',
			'languages': 'Мови',
			'education': 'Освіта',
			'place_of_education': 'Миколаївський морський ліцей імені професора М. Александрова',
			'place_of_education2': 'Одеський національний університет імені І. І. Мечникова',	
		},
	}
	var lang;
	$('.translate').click(function(e){	
		$('.works__slider').slick('refresh');
		lang = $(this).attr('id');
		$('.lang').each(function(index, item){
			$(this).text(arrLang[lang][$(this).attr('key')]);
		});
	});
	$('.menu__burger').click(function(e){
		$('.menu__row').toggleClass('menu__row_disactive');
	}); 
	//document.querySelectorAll('.menu__row a');
	const navButtons = document.querySelectorAll('.menu__row p');	
	navButtons[1].addEventListener('click', function(e){
		document.querySelector('.skills').scrollIntoView({
			block: "center",
			inline: "nearest",
			behavior: "smooth"
		});
	});
	navButtons[2].addEventListener('click', function(e){
		document.querySelector('.works').scrollIntoView({
			block: "center",
			inline: "nearest",
			behavior: "smooth"
		});
	});
	navButtons[3].addEventListener('click', function(e){
		//e.preventDefault;
		document.querySelector('.contacts').scrollIntoView({
			block: "center",
			inline: "nearest",
			behavior: "smooth"
		});
	});

	document.querySelector('.main__button').addEventListener('click', function(e){
		document.querySelector('.skills').scrollIntoView({
			block: "center",
			inline: "nearest",
			behavior: "smooth"
		});
	});

	let paralax = document.querySelector('.main__img2');
	let x;
	let y;
	if ($(window).width() >= "768"){
		window.addEventListener('mousemove', function(e) {
			 x = e.clientX / window.innerWidth;
			 y = e.clientY / window.innerHeight;
			 paralax.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)';
		});
	}
	$('.skills__item p').mouseenter(function(e){
		//console.log(e.currentTarget.offsetParent);
		e.currentTarget.offsetParent.classList.add('skills__item_active');
	});	
	$('.skills__item p').mouseleave(function(e){
		e.currentTarget.offsetParent.classList.remove('skills__item_active');
	});				
	$('.menu__cv button').click(function (e) {
		$('.cv').removeClass('cv_disactive');		
		$('.menu__row').toggleClass('menu__row_disactive');
	});
	$('.cv__close').click(function (e) {
		$('.cv').addClass('cv_disactive');
	});
	$(document).on('keyup', function (e) {
		if(!$('.cv').hasClass('cv_disactive') & e.key == "Escape"){
			console.log(e);
			$('.cv').addClass('cv_disactive');
		}
	});
	
});