function nota() {
    alert('Digite a primeira nota:');
    let nota1 = prompt();
    alert('Digite a segunda nota:');
    let nota2 = prompt();
    alert('Digite a terceira nota:');
    let nota3 = prompt();
    alert('Digite a quarta nota:');
    let nota4 = prompt();

    let soma = (nota1 + nota2 + nota3 + nota4);
    let media = media + (soma / 4);

    alert(`Sua Média É ${media}`);
}

nota();