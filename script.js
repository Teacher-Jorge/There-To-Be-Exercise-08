let btnAfew = document.getElementById("btnAfew")
let btnAlot = document.getElementById("btnAlot")
let btnMany = document.getElementById("btnMany")
let answer = document.getElementById('answer')
let btnTranslate = document.getElementById('btnTranslate')

btnAlot.addEventListener('click', function() {
    let audio = document.getElementById('right')
    audio.play()
    answer.innerHTML = "a lot of"
    btnAlot.style.background = 'lime'
    answer.style.color = 'lime'
    btnAlot.disabled = 'true'
    btnAfew.disabled = 'true'
    btnMany.disabled = 'true'
})

btnMany.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    answer.innerHTML = 'many'
    btnMany.style.background = 'red'
    answer.style.color = 'red'
    btnMany.disabled = 'true'
})

btnAfew.addEventListener('click', function() {
    let audio = document.getElementById('wrong2')
    audio.play()
    answer.innerHTML = "a few"
    answer.style.color = 'red'
    btnAfew.style.background = ' red'
    btnAfew.disabled = 'true'
})

btnTranslate.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    btnTranslate.innerHTML = 'Há muitas pessoas na praia nesse fim de semana.'
    setTimeout(() => {
        btnTranslate.innerHTML = 'Translate'
    }, 3000);
})



