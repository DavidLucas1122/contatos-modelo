'use strict'

export async function lerContatos() {
    const url = 'https://bakcend-fecaf-render.onrender.com/contatos/'

    const response = await fetch(url)
    const contatos = await response.json()

    return contatos
}

export async function criarContato(contato) {
    const url = 'https://bakcend-fecaf-render.onrender.com/contatos/'

    const options = {
        'method': 'POST',
        'headers': {
            'content-type': 'application/json'
        },
        'body': JSON.stringify(contato)
    }

    const response = await fetch(url, options)

    return response.ok
}

const novoContato ={
        "nome": "Ba",
        "celular": "11 9 1111-2222",
        "foto": "semfoto.png",
        "email": "tche@gmail.com",
        "endereco": "Rua rua, 999",
        "cidade": "Itapevi"
}





async function atualizarContato(id,contato) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`

    const options = {
        'method': 'PUT',
        'headers': {
            'content-type': 'application/json'
        },
        'body': JSON.stringify(contato)
    }

    const response = await fetch(url, options)

    console.log(response.ok)
    return response.ok
}

const contatoAtualizado = {
    "nome": "David Lucas Atualizado",
    "celular": "11 9 1111-2222",
    "foto": "semfoto.png",
    "email": "davidlucas@gmail.com",
    "endereco": "Rua Aldeia, 999",
    "cidade": "Itapevi"
}


async function deleteContatos(id) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`
    const options = {
        method: 'DELETE'
    }
    const response = await fetch(url, options)
    
    console.log(response.ok)
    return response.ok
}
