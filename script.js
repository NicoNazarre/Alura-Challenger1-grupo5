const input = document.querySelector('#textarea')
const results = document.querySelector('#mensaje')
const warningSection = document.querySelector('#warningSection')
const resultsSection = document.querySelector('#resultsSection')

const DICTIONARY = {
  e: 'enter',
  i: 'imes',
  o: 'ober',
  a: 'ai',
  u: 'ufat'
  
}

// ESCUCHAR EL EVENTO DE CLICK
const handleClick = (type) => {
  const inputValue = input.value
/*   textarea.value = ""; */

  const newText = encryptDecrypt(inputValue, type)
  showResults(newText)
}

// ENCRIPTAR O DESENCRIPTAR TEXTO
const encryptDecrypt = (text, type) => {
  for (const key in DICTIONARY) {

    if (type === 'encrypt') {
      text = text.replace(new RegExp(key, 'g'), DICTIONARY[key])
    } else {
      text = text.replace(new RegExp(DICTIONARY[key], 'g'), key)
    }
  }
  return text
}

/* function encriptar(stringEncriptada) {
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringEncriptada = stringEncriptada.toLowerCase()

  for(let i = 0; i < matrizCodigo.length; i++) {
    if(stringEncriptada.includes(matrizCodigo[i][0])){
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }
  }
} */

// MOSTRAR RESULTADOS, ALTERNAR ENTRE LAS SECCIONES
const showResults = (text) => {
  results.value = text

  warningSection.classList.toggle('novisible', !!text)
  resultsSection.classList.toggle('novisible', !text)
}

// COPIAR TEXTO
const copyText = () => {
  navigator.clipboard.writeText(results.value)

  // ** cambiar estilos del boton
  copyButton.innerText = 'Texto copiado!!'
  copyButton.classList.add('button--copy')
  setTimeout(() => {
    copyButton.innerText = 'Copiar'
    copyButton.classList.remove('button--copy')
  }, 1500)
}
