const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0);
})



let menu = document.querySelector('#menu-icon')
let navmenu = document.querySelector('.navmenu')

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}











/* Cart */






// /* Cards */

// #cards {
//     text-align: center;
// }
// #cards .pro-container {
//     display: flex;
//     justify-content: space-between;
//     padding-top: 20px;
//     flex-wrap: wrap;
// }
// #cards .pro{
//     width: 23%;
//     min-width: 250px;
//     padding: 10px 12px;
//     border: 1px solid #f3f4f6;
//     border-radius: 25px;
//     cursor: pointer;
//     box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.02);
//     margin: 15px 0;
//     transition: 0.2s ease;
//     position: relative;
// }
// --------------------------------
// #cards .pro:hover {
// box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.06);
// }
// #cards .pro img {
//     width: 100%;
//     border-radius: 20px;
// }
// #cards .pro .name-price {
//     text-align: start;
//     padding: 10px 0;
// }
// #cards .pro .name-price span {
//     color: #606063;
//     font-size: 12px;
// }
// #cards .pro .name-price h5 {
//     padding-top: 7px;
//     color: #1a1a1a;
//     font-size: 14px;
// }
// #cards .pro .name-price h4 {
//     padding-top: 7px;
//     font-size: 15px;
//     font-weight: 700;
//     color: #088178;
// }
// #cards .pro .cart {
//     width: 40px;
//     height: 40px;
//     line-height: 40px;
//     border-radius: 50px;
//     background-color: #e8f6ea;
//     font-weight: 500;
//     color: #088178;
//     border: 1px solid #cce7d0;
//     position: absolute;
//     bottom: 20px;
//     right: 10px;
// }
