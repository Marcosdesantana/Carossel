let foto = document.querySelector('.fotos')
let botao = document.querySelector('.botoes')
let imagem = document.createElement('img')
let c = 1
let quantidade = 9
//para alterar o tanto de fotos é só mudar a quantidade!!

imagem.setAttribute('src', `./imagens/${c}.jpg`)

for(let c = 1 ; c < quantidade ; c++){

let item = document.createElement('li')
item.innerHTML = `<button class="btn_nao_numerados" onclick="carrossel(${c})"></button>`
botao.appendChild(item)

}

foto.appendChild(imagem)

function proximo(){
    if(c == quantidade - 1){
       c = 1 
       imagem.setAttribute('src', `./imagens/${c}.jpg`)
    }else{
       c = c + 1
       imagem.setAttribute('src', `./imagens/${c}.jpg`)
       foto.appendChild(imagem)
    }
}

function voltar(){
    if(c == 1){
       c = quantidade - 1
       imagem.setAttribute('src', `./imagens/${c}.jpg`)
    }else{
       c = c - 1
       imagem.setAttribute('src', `./imagens/${c}.jpg`)
       foto.appendChild(imagem)
    }
}

function carrossel(id){
    c = id ; imagem.setAttribute('src',`./imagens/${c}.jpg`) 
}



 


