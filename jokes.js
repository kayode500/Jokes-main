// variable to hold references to html element
let display = document.querySelector('#jokes');
let createdAt = document.querySelector('#created_at');
let updatedAt = document.querySelector('#updated_at');
let btn1 = document.querySelector('#btn1');


let urlLink ="https://api.chucknorris.io/jokes/random";
//fetch data from api and update html element
btn1.addEventListener('click',function(){
    fetch("https://api.chucknorris.io/jokes/random").then (res => res.json()).then(
        data =>{
        let createdAt = data['created_at'];
        let updatedAt = data['updated_at'];
        let value = data['value'];

        // update the content of the html element

        display.innerHTML = `<span>${value}</span>`;
        createdAt.innerHTML = `<span>${createdAt}</span>`;
        updatedAt.innerHTML = `<span>${updatedAt}</span>`;
        



       
        

    })

}
)

