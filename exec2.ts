let fibonacci: number[] = [0, 1];
let i = 2;
const value = 35;

while (true) {
	fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
	if (fibonacci[i] >= value) {
		break;
	}
	i++;
}

if (fibonacci.includes(value)) {
	console.log('É um número de Fibonacci');
} else {
	console.log('Não é um número de Fibonacci');
}
