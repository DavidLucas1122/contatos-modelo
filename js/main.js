'use strict'

import { lerContatos } from "./contatos.js"
import { criarContato } from "./contatos.js"

function mostrarCardContato(lista) {
    const container = document.getElementById('container')
    container.replaceChildren()

    lista.forEach(contato => {
        const divContato = document.createElement('div')
        divContato.classList.add('card-contato')

        const img = document.createElement('img')
        img.src = contato.foto

        const nome = document.createElement('h2')
        nome.textContent = contato.nome

        const number = document.createElement('p')
        number.textContent = contato.celular

        container.append(divContato)
        divContato.append(img, nome, number)
    })
}


const novo = document.getElementById('novo-contato')
novo.addEventListener('click', function(){
    const main = document.querySelector('main')

    main.classList.remove('card-show')
    main.classList.add('form-show')
})

const cancelar = document.getElementById('cancelar')
cancelar.addEventListener('click', function(){
    const main = document.querySelector('main')

    main.classList.remove('form-show')
    main.classList.add('card-show')
})


function ExecutarCriarContato() {
    const campoNome = document.getElementById('nome')
    const campoEmail = document.getElementById('email')
    const campoFoto = document.getElementById('foto')
    const campoCelular = document.getElementById('celular')
    const campoEndereco = document.getElementById('endereco')
    const campoCidade = document.getElementById('cidade')

    campoFoto.addEventListener('change', function() {
        const preview = document.getElementById('preview-image')
        if (campoFoto.files && campoFoto.files[0]) {
            preview.src = URL.createObjectURL(campoFoto.files[0])
        } else {
            preview.src = './img/preview-icon.png'
        }
    })

    const novoContato = {
        nome: campoNome.value,
        celular: campoCelular.value,
        foto: campoFoto.value,
        email: campoEmail.value,
        endereco: campoEndereco.value,
        cidade: campoCidade.value
    }

    criarContato(novoContato)

    campoNome.value = ''
    campoEmail.value = ''
    campoCelular.value = ''
    campoEndereco.value = ''
    campoCidade.value = ''
    campoFoto.value = ''
}

const salvar = document.getElementById('salvar')

salvar.addEventListener('click', function() {
    ExecutarCriarContato()
    alert('Contato salvo com sucesso!')
})


mostrarCardContato(await lerContatos())