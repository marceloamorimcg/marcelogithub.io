/**
 * Created with JetBrains PhpStorm.
 * User: marcelo
 * Date: 11/03/17
 * Time: 15:15
 * To change this template use File | Settings | File Templates.
 */


var pessoa ={
    nome: 'Marcelo Amorim',
    cargo: 'Analista',
    foto: 'imagens/olaa.jpg'


}

document.getElementById('nome-cabecalho').innerHTML = pessoa.nome;
document.getElementById('cargo-cabecalho').innerHTML = pessoa.cargo;
document.getElementById('img-cabecalho').src = pessoa.foto;