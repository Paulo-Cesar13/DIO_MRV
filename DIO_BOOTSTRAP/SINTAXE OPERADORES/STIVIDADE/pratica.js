function nota() {
    alert('Digite a primeira nota:');
    let nota1 = prompt();
    alert('Digite a segunda nota:');
    let nota2 = prompt();
    alert('Digite a terceira nota:');
    let nota3 = prompt();
    alert('Digite a quarta nota:');
    let nota4 = prompt();

    alert(('Suas notas: \n primeira nota:` (${nota1});)`\n segunda nota: (nota2);`\n terceira nota: (nota3);\n quarta nita: (nota4).')

    let soma = 0;
    soma = soma = (nota1 + nota2 + nota3 + nota4);
    let media = 0;
    media = media + (soma / 4);

    alert(`Sua Média É ${media}`);
}

nota(prompt());