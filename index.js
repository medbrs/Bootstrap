let btnDelete = document.querySelectorAll('#btnDelete')
let btnAdd = document.querySelectorAll('#btnAdd')
let btnRemove = document.querySelectorAll('#btnRemove')
let price = document.querySelectorAll('#price')
let Total = document.querySelector('.Total')
let span = document.getElementById('span')






for (let i = 0; i < btnDelete.length; i++) {
    btnDelete[i].addEventListener('click', function (e) {
       span.innerHTML = Number(span.innerHTML) - btnAdd[i].parentElement.nextElementSibling.children[0].innerHTML.replace("$","") * btnAdd[i].nextElementSibling.innerHTML
       
       
        
        btnDelete[i].parentElement.parentElement.remove()
        // parseFloat(btnRemove[i].parentElement.nextElementSibling.children[0].innerHTML)
        
    })
}

for (let i = 0; i < btnAdd.length; i++) {

    btnAdd[i].addEventListener('click', function () {
        btnAdd[i].nextElementSibling.innerHTML++     
      span.innerHTML = Number(span.innerHTML) + parseFloat(btnAdd[i].parentElement.nextElementSibling.children[0].innerHTML)
     
    })
}


for (let i = 0; i < btnRemove.length; i++) {
    btnRemove[i].addEventListener('click', function () {
        if (btnRemove[i].previousElementSibling.innerHTML > 0) {
            btnRemove[i].previousElementSibling.innerHTML--
            span.innerHTML = Number(span.innerHTML) - parseFloat(btnRemove[i].parentElement.nextElementSibling.children[0].innerHTML)

        }

        // btnRemove[i].nextElementSibling.innerHTML = Number(btnRemove[i].nextElementSibling.innerHTML)+1
    })
}


