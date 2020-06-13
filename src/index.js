import './styles.css'
import {createStore} from'./createStore'
import {rootReducer} from './redux/rootReducer'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const theme = document.getElementById('theme')
const async = document.getElementById('async')

const store = createStore(rootReducer, 0)



addBtn.addEventListener('click', () => {
    store.dispatch({type: 'ADD'})
})

subBtn.addEventListener('click', () => {
    store.dispatch({type: 'SUB'})
 })

 async.addEventListener('click', () => {
 })

 theme.addEventListener('click', () => {
 })

 store.subscribe(() => {
     const state = store.getState()

     counter.textContent = state
 })

 store.dispatch({type: 'INIT__APP'})