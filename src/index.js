// write your code here

function loadRamenImgages(ramens) {
    const img = document.createElement('img')
    img.src = ramens.image
    img.addEventListener('click', (e) => {
        e.preventDefault()
        fetch(`http://localhost:3000/ramens/${ramens.id}`)
            .then(res => res.json())
            .then(data => loadRamenInfo(data))
    })

    document.querySelector('#ramen-menu').appendChild(img)

};

function loadRamenInfo(ramen) {
    const img = document.querySelector('.detail-image')
    const h2 = document.querySelector('.name')
    const h3 = document.querySelector('.restaurant')
    const span = document.querySelector('#rating-display')
    const p = document.querySelector('#comment-display')
    img.src = ramen.image
    h2.textContent = ramen.name
    h3.textContent = ramen.restaurant
    span.textContent = ramen.rating
    p.textContent = ramen.comment
};

function addNewRamen(data) {

    // fetch('http://localhost:3000/ramens', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         ...data
    //     })
    // })
    // .then(res => res.json())
    // .then(data => loadRamenImgages(data))

    const img = document.createElement('img')
    img.src = data.image
    img.addEventListener('click', (e) => {
        e.preventDefault()
        loadRamenInfo(data)
    })

    document.querySelector('#ramen-menu').appendChild(img)
};


document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/ramens')
    .then(res => res.json())
    .then(data => data.forEach(element => loadRamenImgages(element)))

    const form = document.querySelector('#new-ramen')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const formData = Object.fromEntries(new FormData(form))
        addNewRamen(formData)
    })

})