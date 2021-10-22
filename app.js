function MostrarCampoPesquisar(){
    let campo = document.querySelector("#campo");
    if(campo.style.display == "inline"){
        campo.style.display = "none"
    }else{
        campo.style.display = "inline"
    }
}


projeto1 = {
    titulo: 'Mentalista',
    descricao: 'Projeto desenvolvido utilizando Javascript, HTML e CSS, para adivinhar um número escolhido.',
    foto: 'site-mentalista.png'
}

projeto2 = {
    titulo: 'Conversor',
    descricao: 'Projeto desenvolvido utilizando Javascript, HTML e CSS, para converter moedas.',
    foto: 'site-conversor.png'
}

projeto3 = {
    titulo: 'AndreaFlix',
    descricao: 'Projeto desenvolvido utilizando Javascript, HTML e CSS, para indicar/mostrar filmes, séries e vídeos.',
    foto: 'andreaflix.png'
}

let projetos = [projeto1 , projeto2, projeto3]

let projetoAtual = 0

function ProximoProjeto(){
    if(projetoAtual < 2){
        projetoAtual++
    }else{
        projetoAtual = 0
    }

    titulo = document.querySelector(".titulo-projeto") 
    titulo.innerHTML = projetos[projetoAtual].titulo

    descricao = document.querySelector(".texto-corpo")
    descricao.innerHTML = projetos[projetoAtual].descricao

    imagem = document.querySelector(".foto-perfil")
    imagem.src= "imagens/" + projetos[projetoAtual].foto

}
