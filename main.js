//각 항목들의 element 요소 불러오기
const covers = document.querySelector('.covers');
const nextBtn = document.querySelector('.next__btn');
const prevBtn = document.querySelector('.previous__btn');
let photo = 1;

//1번과 2번 photo 일떄, 좌로 1보 갓!
//3번일떄는 photo 번호를 1로 초기화 시키고, 맨 처음화면으로 돌아가기
nextBtn.addEventListener('click',function(){
    if(photo<3){
    covers.style.transform = `translateX(-${photo}00vw)`;
    photo++;
    }
    else{
    covers.style.transform = `translateX(0)`;
    photo = 1;
    }
});
prevBtn.addEventListener('click',function(){
    if(photo>1){
    covers.style.transform = `translateX(-${photo-2}00vw)`;
    photo--;
    }
    else{
    covers.style.transform = `translateX(-200vw)`;
    photo = 3;
    }
});

const Btn = document.querySelector('.arrow__up');
Btn.addEventListener('click',()=>{
    const scrollTo = document.querySelector('#coverss');
    scrollTo.scrollIntoView({behavior:'smooth'});
});

const cover = document.querySelector('#coverss');
const coverHeight = cover.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
    if(window.scrollY > coverHeight/2){
        Btn.classList.add('visible');
    }
    else{
        Btn.classList.remove('visible');
    }
});