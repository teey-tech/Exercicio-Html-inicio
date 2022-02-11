/**
 *
 * 1- Javascript é caseSensitive
 * 2- temos 3 jeitos de declarar variaveis
 *
 * var nome = "thiago" //variavel de escopo global
 * let nome = "thiago" //variavel de escopo fechado
 * const nome = "thiago" // escopo fechado e não deve ser alterada
 *
 *
 * 3- Document Selectors
 * Tag: getElementByTagName()
 * Id: getElementById()
 * Nome: getElementsByname
 * Classe: getElementsByClassName()
 * Selector: querySelector()
 * Selector: querySelectorAll()
 */

let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

function validaNome() {
  let txt = document.querySelector('#txtNome')
  if (nome.value.length <= 3) {
    txt.innerHTML = 'Nome Inválido'
    txt.style.color = '#e71837'
  } else {
    txt.innerHTML = 'Nome Válido'
    txt.style.color = '#90ee90'
    nomeOk = true
  }
  // console.log(nome.value)
}

// function validaEmail() {
//   let txtEmail = document.querySelector('#txtEmail')
//   if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
//     txtEmail.innerHTML = 'E-mail Inválido'
//     txtEmail.style.color = '#90ee90'
//     txtEmail.style.color = '#e71837'
//     txtEmail.style.visibility = 'visible'
//     txtEmail.style.marginTop = '0'
//   } else {
//     txtEmail.innerHTML = 'E-mail Válido'
//     txtEmail.style.color = '#90ee90'
//     txtEmail.style.visibility = 'visible'
//     txtEmail.style.marginTop = '0'
//     emailOk = true
//   }
// }

function validaEmail() {
  let txtEmail = document.querySelector('#txtEmail')
  if (email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    txtEmail.innerHTML = 'E-mail Valido'
    txtEmail.style.color = '#90ee90'
    emailOk = true
  } else {
    txtEmail.innerHTML = 'E-mail Invalido'
    txtEmail.style.color = '#e71837'
  }
}

function validaAssunto() {
  let txtAssunto = document.querySelector('#txtAssunto')
  if (assunto.value.length >= 100 && assunto.value.length != 0) {
    txtAssunto.innerHTML = 'Assunto muito grande digite apenas 100 caracteres!'
    txtAssunto.style.color = '#e71837'
    txtAssunto.style.marginLeft = '6rem'
  } else {
    txtAssunto.innerHTML = 'Assunto Válido'
    txtAssunto.style.color = '#90ee90'
    txtAssunto.style.marginLeft = '6rem'
    assuntoOk = true
  }
}

function enviar() {
  if (nomeOk == true && emailOk == true && assuntoOk == true) {
    alert('Formulario enviado com sucesso')
  } else {
    alert('Preencha o formulario corretamente antes de enviar...')
  }
}

function mapaZoom() {
  mapa.style.width = '200vh'
  mapa.style.height = '60vh'
}

function mapaNormal() {
  mapa.style.width = '100vh'
  mapa.style.height = '60vh'
}
