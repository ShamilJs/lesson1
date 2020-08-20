'use strict';

const employers = [
	'АртеМ',
	'максим',
	'Владимир',
	'сергей',
	'НикиТа',
	'евГений',
	' Дарья',
	' ',
	'виктория ',
	'ЕкаТерина',
	'',
	' Андрей ',
	'КИРИЛЛ'
];
const nameCourse = 'Базовый React';
const command = [];

employers.forEach(item => {
	if (employers.length > 0 && item.trim() !== '') {
		item = item.toLowerCase().trim();
		item = item[0].toUpperCase() + item.slice(1);
		command.push(item);
	}
});

const data = {
	cash: [3, 8, 3],
	react: ['JSX', 'components', 'props', 'state', 'hooks'],
	add: ['styled-components', 'firebase']
};

const calcCash = own => {
	const everyCash = [...own];
	const total = everyCash.reduce((sum, item) => sum + item, 0);
	return total;
};

const lesson = calcCash(data.cash);

const makeBusiness = (director, teacher, allModule, gang, course) => {
	teacher = teacher || 'Максим';
	const sumTech = data.react.concat(data.add, 'и другие');

	console.log(`Стартуем новый курс: ${course}. Владелец: ${director}, преподаватель: ${teacher}. Всего уроков:  ${allModule}.
Команда Академии: ${gang}`);
	console.log(`Первое что изучим будет ${data.react[0]}. Он очень похож на HTML!`);
	console.log('Технологии которые мы изучим:');
	console.log(sumTech.join(' '));
};

makeBusiness('Артем', null, lesson, command, nameCourse);
