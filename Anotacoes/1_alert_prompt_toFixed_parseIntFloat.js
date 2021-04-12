/*1 - alert() - Tem como função disparar um alerta, uma caixa de aviso, de texto ao abrir o site*/
//alert  (" ")                                    // Para saída de dados;

/*EX1.1*/alert("Olá Dev´s")                       // Dispara PRIMEIRO alerta no site com conteúdo dentro do: ( " " );

/*EX1.2*/var testeUm = "Teste nº 1"               // Var nomeada TesteUm com valor Teste 1;
alert ( testeUm )                                 // Dispara SEGUNDO alerta no site com conteúdo dentro do: ( " " );

/*EX1.3*/var testeDois = "Teste nº "              // Var nomeada TesteDois com valor Teste 2;
var numeroDois = "2"                              // Var nomeada numeroDois com valor 2;
alert (testeDois + numeroDois)                    // Dispara segundo alerta no site; 
// Símbolo de + para juntar os alert dentro do parênteses;

/*EX1.4*/var numeroTres = numeroDois + 1          // Para Atualizar uma Var;
var nomeDeTeste = "Nome de Teste"                 // CamelCase Java Scrip; 
// lembrando que não se deve utilizar palvras constituídas da biblioteca do JavaScript;

/*2 - prompt() - Tem como função disparar um alerta, uma caixa de texto com direito a entrada de dados*/
//prompt (" ")                                   // Para entrada de dados;                      

/*EX2.1*/ prompt("DIGITE SUA IDADE:(NÃO HAVERÁ ATRIBUIÇÃO)")                   
/*  O que foi inserido aqui, não tem paredeiro, pois não há variável atribuição, ou seja, é um campo de inserção de texto, 
    porém sem fundamento.*/

/*EX2.2*/var idadeUsuario = prompt("DIGITE SUA IDADE:(COM ATRIBUIÇÃO)")
alert(idadeUsuario)

/*EX2.3*/var idadeUsuario = idadeUsuario + 1
alert(idadeUsuario + 1)                         //APARECE DOIS NUMEROS
// Neste caso, não está havendo soma, pois o valor digitado antes, não é interepretado como número, mas sim como um texto.

/*3 - ParseInt(nome_Var) - tem como função transformar o número digitado dentro do prompt em número de verdade, e não em texto.*/
/*EX3.1*/var idadeUsuario2 = prompt("DIGITE NOVAMENTE IDADE: TESTE DE parseInt: ")

/* parseInt, vai fazer com que o texto-número digitado, seja transformado em um valor int, poderia ser usado parseFloat(nome_Var), para valores com
vírgula por exemplo*/ 

var idadeUsuarioComoNumero = parseInt (idadeUsuario2)
idadeUsuarioComoNumero = idadeUsuarioComoNumero + 1
alert(idadeUsuarioComoNumero)

/*4 - .toFixed() - tem como função, determinar o número de casas pós a vírgula quando se utiliza um número ponto flutuante, lembrando que 
o argumento usado dentro do parênteses serão o valor de números fixados pós a vírgula. */

/*EX4.1*/var valorEmDolar = prompt ("QUAL VALOR EM DOLAR DESEJA CONVERTER?")
valorEmDolar = parseFloat(valorEmDolar)
var valorEmReal = valorEmDolar * 5.50
valorEmReal = valorEmReal.toFixed(2)
alert(valorEmReal)
var valorEmEuro = prompt ("QUAL VALOR EM EURO DESEJA CONVERTER?")
valorEmEuro = parseFloat(valorEmEuro)
var valorEmReal2 = valorEmEuro * 6.90
valorEmReal2 = valorEmReal2.toFixed(2)
alert(valorEmReal2)