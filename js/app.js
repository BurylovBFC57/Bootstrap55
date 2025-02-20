const btn = document.querySelector('#addLang')

btn.addEventListener('click', () => {
    let input = document.querySelector('input')
    console.log(input.value)
    if(input.value != '') {
    const li = document.createElement('li')
    li.innerHTML = input.value
    li.className = 'list-group-item'
    const ul = document.querySelector('ul')
    ul.appendChild(li)

    const bidon = document.createElement('button')
    bidon.innerHTML = 'Удалить'
    bidon.className = 'btn btn-danger'
    li.appendChild(bidon)
    bidon.addEventListener('click', function() {
        this.parentElement.remove();
    })
    input.value = ''
    }else{

    }
})