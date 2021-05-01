function myFunction(){
    
    let textValue = document.getElementById('textareaID').value;
    textValue = textValue.replace(/\s+/g, ' ');
    textValue = textValue.trim();
    let numSpaces = textValue.split(" ").length;
    let textValueNoSpaces = textValue.replace(/[\s1234567890.,%:"'!`#$^&*()_+|',-/.../'?;@ АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЬЭЫЮЯабвгдеёжзийклмнопрстуфхцчшщьыэюя]/g, '');
    let textLength = textValueNoSpaces.length;
    let p = document.getElementById("result");
    let textResult = document.querySelector('#text-result');
    let h3 = document.querySelector('h3');
    p.innerText = ` Количество символов : ${textLength}.Количество слов : ${numSpaces}`;
    textResult.innerText = textValueNoSpaces;
    h3.innerText = 'Полученный текст(без пробелов, знаков препинания и кирических букв):'
    h3.style.padding = '1rem 2rem'

}
