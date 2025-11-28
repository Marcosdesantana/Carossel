let foto = document.querySelector('.fotos')
let botao = document.querySelector('.botoes')
let imagem = document.createElement('img')
let c = 1
let quantidade = 8

imagem.setAttribute('src', `./imagens/${c}.jpg`)

for(let c = 1 ; c < quantidade ; c++){

let item = document.createElement('li')
item.innerHTML = `<button class="btn_nao_numerados" onclick="foto_${c}()"></button>`
botao.appendChild(item)

}

foto.appendChild(imagem)

function proximo(){
    if(c == 7){
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
       c = 7 
       imagem.setAttribute('src', `./imagens/${c}.jpg`)
    }else{
       c = c - 1
       imagem.setAttribute('src', `./imagens/${c}.jpg`)
       foto.appendChild(imagem)
    }
}

function foto_1(){ c = 1 ; imagem.setAttribute('src',`./imagens/${c}.jpg`) }
function foto_2(){ c = 2 ; imagem.setAttribute('src', `./imagens/${c}.jpg`) }
function foto_3(){ c = 3 ; imagem.setAttribute('src', `./imagens/${c}.jpg`) }
function foto_4(){ c = 4 ; imagem.setAttribute('src', `./imagens/${c}.jpg`) }
function foto_5(){ c = 5 ; imagem.setAttribute('src', `./imagens/${c}.jpg`) }
function foto_6(){ c = 6 ; imagem.setAttribute('src', `./imagens/${c}.jpg`) }
function foto_7(){ c = 7 ; imagem.setAttribute('src', `./imagens/${c}.jpg`) }


 


