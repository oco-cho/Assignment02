//The Word Translator

let langCode = prompt('Translate "Hello World". Enter a 2 character language code, example: en for english.');
if (langCode === 'de') {
    console.log('Hello World translated in German is: Hallo Welt.');
} else if (langCode === 'es') {
    console.log('Hello World translated in Spanish is: Hola Mundo.');
} else if (langCode === 'fr') {
    console.log('Hello World translated in French is: Bonjour le monde.');
} else if (langCode === 'en') 
    console.log('Hello World translated in English is: Hello World.');
else {
    console.log('Hello World translated in English is: Hello World.');
}

