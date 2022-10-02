const apiKey = 'pXLLIziGe5bn2CqQcs5rf2m1U7kcdRMc'

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

myRequest
    .then(response => response.json())
    .then(({ data }) =>{
        const {url} = data.images.original
        const img = document.createElement('img')
        img.src = url
        document.body.append(img)
    })
    .catch(console.warn)
