let cards = document.querySelectorAll('.card'),
    link = document.querySelector('.info__link'),
    blockDisappear =  document.querySelectorAll('.block__disappear'),
    heading = document.querySelector('.container__heading');


for(let i =0;i<cards.length;i++){
    cards[i].addEventListener('click', ()=>{
        cards[i].classList.toggle('card__exchange');
    })
}

link.addEventListener('click', ()=>{
    cards[0].classList.toggle('card__exchange');
})

heading.addEventListener('click', ()=> {
    for(let g =0;g<blockDisappear.length;g++){
        blockDisappear[g].classList.toggle('block__disappear_none');
        
    }
})







 
    