let timer;
const searchBar = document.querySelector('.main_search');

searchBar.addEventListener('keyup', e => {
    const text = e.target.value;

    clearTimeout(timer);

    timer = setTimeout(async () => {
        if (text) {
            const response = await fetch(`https://api.jikan.moe/v4/anime?q=${text.replace(/ /g, '%20')}&sfw`);
            const data = await response.json();

            console.log(data)
        }
        
    }, 500)
})