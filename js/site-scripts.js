

// .trim() обрезает пробелы .................

// `${переменная}`  строковое выражение
// .indexOf возвращает есть ли слово в строке и его номер



// parseInt(переменная) преобразует в число обрезает строки
	// parseFloat() с дробями




let max = 5;
const PROCENT = 10;
  
for (let i = 1; i <= max; i++) {
	sum = prompt('какую сумму грн. вы хотите вложить? Принимаем от 5000-200000грн.!', '');
	if(!isNaN(sum)) {
		if(sum !== null) {
			if(sum !== '') {
				if (sum >= 5000 && sum <= 200000) {
					let ear = prompt('На какой срок хотите сделать вклад? Возможные варианты от 2 -15 лет!', '');
					if(!isNaN(ear)) {
						if(ear !== null) {
							if(ear !== '') {
								if (ear >= 2 && ear <=15) {
									let result = (((+sum * PROCENT * +ear) / 100) + +sum);
									document.write(`В конце срока вы получите ${result} грн`);
								} else {
									document.write('На такой строк вклады не принимаем!');
								}
							} 
							else {
						      	document.write('Вы пропустили ввод!');
						    }
						}	
						else {
							document.write('До встречи!!');
							break;
						}
					}
					else{
						document.write('Введите число!');
						break;
					}
				} else if (sum <= 5000) { // (**)
				  document.write('Слишком маленькая сумма вклада');

				} else {
				  document.write('Слишком большая сумма вклада');

				}
				break;
			} 
			else {
		      	if (i >= max) {
	        		document.write('У Вас закончились попытки купить у нас товар!'); // console.log ('//...')
		      	} else {
		       		document.write(`Введите корректный запрос. Попытка ${i} из ${max}`); // console.log ('//...')
		      	}
		    }
		}	
		else {
			document.write('До встречи!!');
			break;
		}
	}
	else{
		document.write('Введите число!');
		break;
	}
}