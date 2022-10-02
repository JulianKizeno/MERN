// 1...

// const getImagePromise = () => {
//     const promise = new Promise( (resolve, reject ) =>{
//         resolve('https://iebrfeurybfekruwb.com')
//     })
//     return promise
// }

// 2...

// const getImagePromise = () => {
//     return new Promise( (resolve, reject ) =>{
//         resolve('https://iebrfeurybfekruwb.com')
//     })
// }

// 3...

// const getImagePromise = () => {
//     return new Promise( (resolve) => resolve('https://iebrfeurybfekruwb.com'))
// }

// 4...

// const getImagePromise = () => new Promise( (resolve) => resolve('https://iebrfeurybfekruwb.com'))

// getImagePromise().then(console.log) 

// ----------------------

// ASYNC

const getImage = async() => {
    try {
        const apiKey = 'pXLLIziGe5bn2CqQcs5rf2m1U7kcdRMc';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json()
        const {url} = data.images.original
        const img = document.createElement('img')
            img.src = url
            document.body.append(img)
        console.log(url)
    } catch (error) {
        //MANEJO DEL ERROR 
        console.error(error)
    }
}

getImage()

