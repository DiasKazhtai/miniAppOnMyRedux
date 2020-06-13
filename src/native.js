import './styles.css'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const theme = document.getElementById('theme')
const async = document.getElementById('async')

let state = 0

function render (){
    counter.textContent = state.toString()
}
addBtn.addEventListener('click', () => {
   state++
    render()
})

subBtn.addEventListener('click', () => {
    state--
    render()
 })

 async.addEventListener('click', () => {
     setTimeout(()=>{
         state++
         render()
     }, 2000)
 })

 theme.addEventListener('click', () => {
     document.body.classList.toggle('dark')
 })

render()