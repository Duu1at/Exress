// document - объект нашей HTML разметки

// =============== создания элементов=========\
// const h1=document.createElement('h1')   // создания  элементов
// h1.innerHTML='duulat'                  //создание содержание элемента
// document.body.append(h1)               //отправка в HTML 

// const div=document.createElement('div')       //создание  элементов
// div.innerHTML=`<h2> hello this is h2 in div</h2>
//  <p> hi everyone </p>`
// document.body.append(div)                      //отправка  в HTML

// const ul=document.createElement('ul')
// ul.innerHTML=`<li> item1 </li> 
//  <li>  item1 </li>
//   <li>  item1 </li>                
//   <li>  item1 </li>`                      //создание содержание элемента
// div.append(ul)                            //отправка  в HTML

// стилизация внутри   js=====================
// const box =document.createElement('div') 
// document.body.append(box)
// =============написании стилей по - отдельность
// box.style.width='200px'
// box.style.height='200px'
// box.style.backgroundColor='red'

// =============написании нескольких стилей сразу===
// box.style.cssText=`
// width:200px;
// height:200px;
// background-color:black;
`


//  =====получение элементов из HTML====
// const h1 =document.getElementById('text')   получение по ID
// h1.style.cssText=`
// color:red;
// font-size:30px;
// text-align:center;`


// const div=document.getElementById('header')
// div.style.cssText=`
// width:500px;
// height:50px;
// display: flex;
// justify-content: space-around;
// color:black:
// background-color: slategrey;
// list-style: none;
// `

// const buuton=document.createElement('button')
// buuton.innerHTML='Show'
// document.body.append(buuton)


// const show=()=>{
//     return alert('hello ,my dear friend')
// }
// buuton.addEventListener('click',show)


// получение по  класс
// const span = document.getElementsByClassName('text')
// console.log(span[2])

// получение по  тег

// const span = document.getElementsByTagName('span')  возврашает псевдомассив
// console.log(span)
  
// получение по селекторы=======\
// const span1=document.querySelector("#text1")     //ПОЛУЧЕНИЕ ПО ID 
// console.log(span1)

// const span2=document.querySelector(".text2")     //ПОЛУЧЕНИЕ ПО классу
// console.log(span2)

// const span3=document.querySelector("span")     //ПОЛУЧЕНИЕ ПО тег
// console.log(span3)

// const span3=document.querySelectorAll("span")     //ПОЛУЧЕНИЕ всех тегов
//  console.log(span3)



// работа  с класами в JS


// const h1=document.createElement('h1')
// h1.innerHTML=`hello,how are you?`
// document.body.append(h1)
// // h1.className="word"  //первый способ
// // h1.classLsit.add('word')  //второй способ
// h1.classList.remove('word')

// =====Добавление элемента в HTML====
// append==appendChild   добовляет по очереди в конец 
// prepend  //Добавляет в начало

const body= document.body
const container=document.createElement('div')
container.className='container'
 const row=document.createElement('div')
 row.className='row'
 row.innerHTML=`
 <div> <h1>Express</h1></div>
   <div class='menu'> <li>Home</li>
    <li>About us</li>
    <li> Our services</li>
    <li> Contact us</li></div>
<div><img src="./img/Button.png" alt=""></div>
 `

 container.style.cssText=`
 width:90%;
 margin:0 5%;
 background-color: #E5E5E5;
 `
row.style.cssText=`
 width:100%;
 height:50px;
 display: flex;
 justify-content: space-around;
 align-items: center;
 `
 body.append(container)
 container.append(row)

const wrapper=document.createElement('div')
wrapper.className='wrapper'
wrapper.innerHTML=``

wrapper.style.cssText=`
width: 50%;
  height: 450px;
  margin: 50px 25%;
 
`
container.append(wrapper)

const wrapper_items= document.createElement('div')
wrapper_items.className='wrapper_items'
wrapper_items.innerHTML=` <h1>Lorem ipsum set <br>
ammet test-test </h1>`

wrapper_items.style.cssText=`   width: 100%;
margin: 200px 0 0 0;
text-align: center;
font-size: 25px;
`
wrapper.append(wrapper_items)

const wrapper_text=document.createElement('div')
wrapper_text.className='wrapper_text'
wrapper_text.innerHTML=`LET US HELP YOU GET IT ALL BACK!
<img src="./img/Decor.png" alt="">
`
wrapper_text.style.cssText=`
width: 100%;
margin: 20px 0;
text-align: center;
margin:20px;
font-size: 28px;
color: blue;
`
wrapper.append(wrapper_text)

const buttons=document.createElement('div')
buttons.className='buttons'
buttons.innerHTML=``
buttons.style.cssText=` width: 70%;
margin:40px 15%;
display: flex;
justify-content: space-around;
`
wrapper.append(buttons)

const buttons_text=document.createElement('div')
buttons_text.className='buttons_text'
buttons_text.innerHTML=`We currently take cases <br>
that are $10,000 US and up`

buttons.append(buttons_text)

const buttons_child=document.createElement('div')
buttons_child.className='buttons_child'
buttons_child.innerHTML=`<img src="./img/Buttons (2).png" alt="">`
buttons.append(buttons_child)

const main=document.createElement('div')
main.className='main'
main.innerHTML=``
container.append(main)

const main_header=document.createElement('div')
main_header.className='main_header'
main_header.innerHTML=``


main_header.style.cssText=` 
 width: 80%;
height: 500px;
background-color:white;
margin: 10%;
`
main.append(main_header)

const main_text=document.createElement('div')
main_text.className='main_text'
main_text.innerHTML=``

main_text.style.cssText=` 
width: 20%;
margin: 40px 40%;
display: flex;
justify-content: space-around;
text-align: center;
`
main_header.append(main_text)

const main_h1=document.createElement('div')
main_h1.className='main_h1'
main_h1.innerHTML=` <h1>Contact </h1>`
main_h1.style.cssText=`
color:  #018FDE;`
main_text.append(main_h1)

const main_h2=document.createElement('div')
main_h2.className='main_h2'
main_h2.innerHTML=`<h1>Us</h1>`
main_h2.style.cssText=``
main_text.append(main_h2)

const input=document.createElement('div')
input.className='input'
input.innerHTML=``
main_header.append(input)

const input_list=document.createElement('div')
input_list.className='input_list'
input_list.innerHTML=``

input_list.style.cssText=` 
width:80%;
haight:400px;
margin:0px 10%;
display: flex;
justify-content: space-around;`

input.append(input_list)

const input_list_1=document.createElement('div')
input_list_1.className='input_list_1'
input_list_1.innerHTML=`<input type="text"   placeholder="Enter text |">`
input_list.append(input_list_1)

const input_list_2=document.createElement('div')
input_list_2.className='input_list_2'
input_list_2.innerHTML=`<input type="text"    placeholder="Last name ">`
input_list.append(input_list_2)

const input_list2=document.createElement('div')
input_list2.className='input_list2'
input_list2.innerHTML=``

input_list2.style.cssText=` 
width:80%;
margin:40px 10%;
display: flex;
justify-content: space-around;`

input.append(input_list2)

const input_list_3=document.createElement('div')
input_list_3.className='input_list_3'
input_list_3.innerHTML=`<input type="text"   placeholder="Введите новое дело...">`

input_list2.append(input_list_3)

const input_list_4=document.createElement('div')
input_list_4.className='input_list_4'
input_list_4.innerHTML=`<input class='input' type="text"   placeholder="Enter email">`

input_list2.append(input_list_4)

const input_big=document.createElement('input')
input_big.className='input_big'
input_big.innerHTML=`<input type="text"  placeholder="Tell Us What Happened">`
input.append(input_big)
input_big.style.cssText=`width:60%;
height: 50px;
margin:0px 20%;`

const button_send=document.createElement('div')
button_send.className='button_send'
button_send.innerHTML=`    <img src="./img/Buttons (2).png" alt="">`
input.append(button_send)

button_send.style.cssText=`
margin:30px 40%;`

const footer_under=document.createElement('div')
footer_under.className='footer_under'
footer_under.innerHTML=`qwEARTEYRUITOYPU[I]POI`

footer_under.style.cssText=`
width:100%;
height:400px;
background-color: black;
`
container.append(footer_under)

const footer_flex=document.createElement('div')
footer_flex.className='footer_flex'
footer_flex.innerHTML=``

footer_flex.style.cssText=`
width:90%;
margin:0 5%;
padding:50px 0px;
display: flex;
justify-content: space-around;
color:white;
`
footer_under.append(footer_flex)


const footer_flex_1=document.createElement('div')
footer_flex_1.className='footer_flex_1'
footer_flex_1.innerHTML= `<h1>Express</h1>
<p>
    All Rights Reserved to info.com 
    <br>
    <br>
© DDD – Web Marketing 
<br>
<br>
Privacy Policy 
<br>
<br>
</p>
<img src="./img/DMCA.png" alt="">
`
footer_flex.append(footer_flex_1)

const footer_flex_2=document.createElement('div')
footer_flex_2.className='footer_flex_2'
footer_flex_2.innerHTML= `<h2>CONTACT US</h2>
<p>
UK
+44-2020202020
<br>
<br>
+44-2020202020
<br>
<br> 
AUT
+44-2020202020 
<br>
<br>
AUS
+44-2020202020 
<br>
<br>
</p>

`
footer_flex.append(footer_flex_2)


const footer_flex_3=document.createElement('div')
footer_flex_3.className='footer_flex_3'
footer_flex_3.innerHTML= `<h2>ADDRESS</h2>
<p>
Lorem ipsum 
<br>
<br>
set amet <br>
</p>
<h2>OUR OFFICE HOURS</h2>
<p>Mon-Fr: 8:00-18:00 GMT 
<br>
<br>  
Sat/Su: Closed</p>
`
footer_flex.append(footer_flex_3)

const footer_flex_4=document.createElement('div')
footer_flex_4.className='footer_flex_4'
footer_flex_4.innerHTML= `<h2>Email US</h2>
<p>

info@info.com
</p>

`
footer_flex.append(footer_flex_4)