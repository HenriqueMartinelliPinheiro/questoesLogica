const string1: string = 'Hello, world!';
let reversed = '';
let j = string1.length - 1;

for (j; j >= 0; j--) {
	reversed += string1[j];
}

console.log(reversed);
