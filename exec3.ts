import fs from 'fs';

const rawData = fs.readFileSync('faturamento.json', 'utf8');
const data = JSON.parse(rawData);

const revenues = data.revenues;

let minRevenue = Number.MAX_VALUE;
let maxRevenue = Number.MIN_VALUE;
let averageRevenue = 0;
let totalDays = 0;
let daysAboveAverage = 0;

for (let i = 0; i < revenues.length; i++) {
	if (revenues[i]) {
		if (revenues[i] < minRevenue) {
			minRevenue = revenues[i];
		}
		if (revenues[i] > maxRevenue) {
			maxRevenue = revenues[i];
		}
		averageRevenue += revenues[i];
		totalDays++;
	}
}

averageRevenue /= totalDays;

for (let i = 0; i < revenues.length; i++) {
	if (revenues[i]) {
		if (revenues[i] > averageRevenue) {
			daysAboveAverage++;
		}
	}
}

console.log(`Menor Faturamento: ${minRevenue}`);
console.log(`Maior Faturamento: ${maxRevenue}`);
console.log(`Média de Faturamento: ${averageRevenue}`);
console.log(`Número de Dias com Faturamento maior que a média: ${daysAboveAverage}`);
