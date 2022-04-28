
const nextBtn = document.querySelector('.next__btn');
const prevBtn = document.querySelector('.previous__btn');

nextBtn.addEventListener('click', function(){
    document.querySelector('.covers').style.transform = 'translate(+50vw)';
})

prevBtn.addEventListener('click', function(){
    document.querySelector('.covers').style.transform = 'translate(-50vw)';
})