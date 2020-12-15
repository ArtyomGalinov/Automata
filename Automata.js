let fs = require('fs');
let arg = process.argv;
let text = fs.readFileSync('TheLittlePrince.txt');
text = text.toString();
let string = 'prince'
length = string.length
alph = new Array()

for (i = 0; i < length; i++)
    alph[string.charAt(i)] = 0;

del = new Array(length + 1)
for (j = 0; j <= length; j++)
    del[j] = new Array()

for (i in alph)
    del[0][i] = 0;

for (j = 0; j < length; j++) {
    prev = del[j][string.charAt(j)]
    del[j][string.charAt(j)] = j + 1
    for (i in alph)
        del[j + 1][i] = del[prev][i];
}

let position = 0;
for (let i = 0; i < text.length; i++) {
    if (text[i] in alph) {
        position = del[position][text.charAt(i)];
    }
    else
        position = 0;
    if (position == string.length) {
        console.log(i - position + 1);
    }
}
