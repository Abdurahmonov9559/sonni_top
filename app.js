

let inp = document.getElementById('inp')
let a = document.getElementById('a')
let time = document.getElementById('time')
let send = document.getElementById('send')
let res = document.getElementById('res')
let lose = document.getElementById('lose')
let start = document.getElementById('start')
let win = document.getElementById('win')
let rest = document.getElementById('rest')
let randomSon = document.querySelector('.randomSon')
let randomSon1 = document.querySelector('.randomSon1')
let life = 5
let count = 30
let random = null
let timer = null

const show = () => {
    document.querySelector('.modal').classList.toggle('show')
}
const ok = () => {
    document.querySelector('.modal').classList.toggle('show')
    inp.style.display = 'inline'
    send.style.display = 'inline'
    start.style.display = 'none'
    game()
}

function game(){
    random = parseInt(Math.random()*100)
    console.log(random)
    timer = setInterval(()=>{
        if(count==0){
            clearInterval(timer)
            lose.style.display = 'inline'
            randomSon.innerHTML = `O'ylagan sonimiz ${random}`
            life = 0
        } else if (life==0){
            clearInterval(timer)
            lose.style.display = 'inline'
            randomSon.innerHTML = `O'ylagan sonimiz ${random}`
            // a.innerHTML = `Topolmadingiz. O'ylagan sonimiz ${random}`
        } else if (life<0){
            a.innerHTML = ''
        }
        time.innerHTML = `${count--} sec`
    },1000);
}

send.addEventListener('click', ()=>{
    if(inp.value == ''){
        return false
    }else if(inp.value == random){
        // a.innerHTML = `topdingiz o'ylagan sonimiz ${random}.`
        clearInterval(timer)
        win.style.display = 'inline'
        randomSon1.innerHTML = `Topdingiz ${random}`

    } else if(inp.value > random){
        a.innerHTML = `Katta son kiritdingiz. Sizda ${life-1} ta urunish qoldi`
    } else if(inp.value < random){
        a.innerHTML = `Kichik son kiritdingiz. Sizda ${life-1} ta urunish qoldi`
    }

    if (life == 0 || count == 0){
        a.innerHTML = `Topolmadingiz. O'ylagan sonimiz ${random}`
    } else if (life<0) {
        a.innerHTML = ''
    }

    life--
    clear()
})

function clear(){
    inp.value = ''
}

function restart(){
    life = 5
    count = 30
    random = null
    timer = null
    win.style.display = 'none'
    lose.style.display = 'none'
    start.style.display = 'none'
}



res.addEventListener('click', ()=>{
    win.style.display = 'none'
    clearInterval(timer)
    a.innerHTML = ''
    restart()
    game()
})
rest.addEventListener('click', ()=>{
    clearInterval(timer)
    a.innerHTML = ''
    restart()
    game()
})

    


