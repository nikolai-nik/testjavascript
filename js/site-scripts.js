

// .trim() обрезает пробелы .................

// `${переменная}`  строковое выражение
// .indexOf возвращает есть ли слово в строке и его номер



// parseInt(переменная) преобразует в число обрезает строки
	// parseFloat() с дробями




// let max = 5;
// const PROCENT = 10;
  
// for (let i = 1; i <= max; i++) {
// 	sum = prompt('какую сумму грн. вы хотите вложить? Принимаем от 5000-200000грн.!', '');

// 	if(!isNaN(sum)) {

// 		if(sum !== null) {

// 			if(sum !== '') {

// 				if (sum >= 5000 && sum <= 200000) {

// 					let ear = prompt('На какой срок хотите сделать вклад? Возможные варианты от 2 -15 лет!', '');

// 					if(!isNaN(ear)) {

// 						if(ear !== null) {

// 							if(ear !== '') {

// 								if (ear >= 2 && ear <=15) {

// 									let result = (((+sum * PROCENT * +ear) / 100) + +sum);
// 									document.write(`В конце срока вы получите ${result.toFixed(2)} грн`);

// 								} else {
// 									document.write('На такой строк вклады не принимаем!');
// 								}
// 							} else {
// 						      	document.write('Вы пропустили ввод!');
// 						    }
// 						} else {
// 							document.write('До встречи!!');
// 							break;
// 						}
// 					} else{
// 						document.write('Введите число!');
// 						break;
// 					}
// 				} else if (sum <= 5000) { // (**)
// 				  document.write('Слишком маленькая сумма вклада');

// 				} else {
// 				  document.write('Слишком большая сумма вклада');

// 				}
// 				break;
			
// 		 	} else {
// 		      	if (i >= max) {
// 	        		document.write('У Вас закончились попытки купить у нас товар!'); // console.log ('//...')
// 		      	} else {
// 		       		document.write(`Введите корректный запрос. Попытка ${i} из ${max}`); // console.log ('//...')
// 		      	}
// 		    }
// 		} else {
// 			document.write('До встречи!!');
// 			break;
// 		}
// 	} else{
// 		document.write('Введите число!');
// 		break;
// 	}
// }



///////////////var 2
// const PROCENT = 10;
// function testNan(sum, ear) {
// 	if (!isNaN(sum)) {
// 		return true;
// 	} else {
// 		return document.write('Введите корректное число!');
// 	}
// }
// function testNull(sum, ear) {
// 	if (sum !== null) {
// 		return true;
// 	} else {
// 		return document.write('До встречи!!');
// 	}
// } 
// function testStr(sum, ear) {
// 	if (sum !== '') {
// 		return true;
// 	} else {
// 		return document.write('Вы ввели пустую строку!');
// 	}
// } 

// let sum = prompt('какую сумму грн. вы хотите вложить? Принимаем от 5000-200000грн.!', '');
// if (testNan(sum) && testNull(sum) && testStr(sum)) {
// 	if (sum >= 5000 && sum <= 200000) {

// 		let	ear = prompt('На какой срок хотите сделать вклад? Возможные варианты от 2 -15 лет!', '');
// 		if (testNan(ear) && testNull(ear) && testStr(ear)) {
// 			if (ear >= 2 && ear <=15) {
				
// 				let result = (((+sum * PROCENT * +ear) / 100) + +sum);
// 				document.write(`В конце срока вы получите ${result} грн`);
// 			} else {
// 				document.write('На такой строк вклады не принимаем!');
// 			}
// 		}
// 	} else if (sum < 5000){
//  		document.write('Слишком маленькая сумма вклада');
//  	} else {
//  		document.write('Слишком большая сумма вклада');
//  	}
// }  








let wrapper = document.createElement('div');
		wrapper.className = 'wrapper';
		document.body.appendChild(wrapper);
////////////header////////////////
let header = document.createElement('header');
		header.className = 'header';
		wrapper.appendChild(header);

let headerWrap = document.createElement('div');
		headerWrap.className = 'container header-wrapp';
		header.appendChild(headerWrap);

let logo = document.createElement('div');
		logo.className = 'logo';
		headerWrap.appendChild(logo);


let logoLink = document.createElement('a');
		logoLink.className = 'logo__link';
		logo.appendChild(logoLink);


let menuList = document.createElement('ul');
	menuList.className = 'menu-list';
	headerWrap.appendChild(menuList);


let menuLink = [
	`<a class="menu__link" href="#">home</a>`,
	`<a class="menu__link" href="#">Blog</a>`,
	`<a class="menu__link" href="#">Contacts</a>`
];
 
for (let i = 0, ln = menuLink.length; i < ln; i++) {
  let menuItems = document.createElement('li');
  menuItems.className = 'menu__items';
  menuItems.innerHTML = menuLink[i];
  menuList.appendChild(menuItems);
}

////////////header////////////////

let mainContent = document.createElement('main');
		mainContent.className = 'main-content';
		wrapper.appendChild(mainContent);

let divContainer = document.createElement('div');
	divContainer.className = 'container';

	mainContent.appendChild(divContainer);


/////////////multi table//////////////
let newInput = document.createElement('input');
	newInput.className = 'btn';
	newInput.type='button';
	newInput.value = 'Жмякни!';

	divContainer.appendChild(newInput);

let table = document.createElement('table');
	table.className = 'multi-table'

	for (i = 1;  i< 10; i++) {
	   let row = document.createElement('tr');
	    for (j = 1; j < 10; j++) {
	        let cell = document.createElement(i == 1 || j == 1 ? 'th' : 'td');
	        cell.appendChild(document.createTextNode(i * j));
	        row.appendChild(cell);
	        
	    }
	    table.appendChild(row);
	}
	divContainer.appendChild(table);


	newInput.onclick = function() {
      	table.classList.toggle('open');
  };
/////////////multi table//////////////
 

///////////////play list show hide////////////////
let playWrapper = document.createElement('div');
	playWrapper.className = 'play-wrapper container';
	mainContent.appendChild(playWrapper);

let playBtn = document.createElement('input');
  playBtn.className = 'btn';
  playBtn.type='button';
  playBtn.value = 'Play List Show';
  playWrapper.appendChild(playBtn);

  let isOpen = false;
  playBtn.addEventListener('click', function (event) {
    this.value = (!isOpen) ? 'Play List Hide' : 'Play List Show';
    
    isOpen = !isOpen;
    list.classList.toggle('right');
  });



let list = document.createElement('ul');
	list.className = 'play-list';
	
	
let playList = [{
        author: "led zeppelin",
        song: "stairway to heaven",
        duration: "2:03"
    },
    {
        author: "queen",
        song: "bohemian rhapsody",
        duration: "2:30"
    },
    {
        author: "lynyrd skynyrd",
        song: "free bird",
        duration: "1:56"
    },
    {
        author: "deep purple",
        song: "smoke on the water",
        duration: "3:03"
    },
    {
        author: "jimi hendrix",
        song: "all along the watchtower",
        duration: "2:53"
    },
    {
        author: "AC/DC",
        song: "back in black",
        duration: "2:43"
    },
    {
        author: "queen",
        song: "we will rock you",
        duration: "2:13"            
    },
    {
        author: "metallica",
        song: "enter sandman",
        duration: "3:03"            
    }
];

for (let i = 0, ln = playList.length; i < ln; i++) {

  let playItems = document.createElement('li');
  playItems.className = 'play__items';

    let playWrapp = document.createElement('div');
    playWrapp.className = 'play-wrapp';
    playItems.appendChild(playWrapp);

    let playDuration = document.createElement('h3');
    playDuration.className = 'play__duration';
    playDuration.textContent = playList[i].duration;
    playWrapp.appendChild(playDuration);

    let playAuthor = document.createElement('h3');
    playAuthor.className = 'play__author';
    playAuthor.textContent = playList[i].author;
    playWrapp.appendChild(playAuthor);


    let playSong = document.createElement('h3');
    playSong.className = 'play__author';
    playSong.textContent = playList[i].song;
    playItems.appendChild(playSong);
 

  list.appendChild(playItems);
}	
playWrapper.appendChild(list);
///////////////play list show hide////////////////


  /////////////////footer//////////////
let footer = document.createElement('footer');
    footer.className = 'footer';
    wrapper.appendChild(footer);

let footerWrap = document.createElement('div');
    footerWrap.className = 'footer-wrapp container';
    footer.appendChild(footerWrap);

let socialList = document.createElement('ul');
  socialList.className = 'social-list';
  footerWrap.appendChild(socialList);


let socialLink = [
  `<a class="social__link" href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>`,
  `<a class="social__link" href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>`,
  `<a class="social__link" href="#"><i class="fa fa-google" aria-hidden="true"></i></a>`
];
 
for (let i = 0, ln = socialLink.length; i < ln; i++) {
  let socialItems = document.createElement('li');
  socialItems.className = 'social__items';
  socialItems.innerHTML = socialLink[i];
  socialList.appendChild(socialItems);
}
   /////////////////footer//////////////