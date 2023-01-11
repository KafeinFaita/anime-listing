const axios = require('axios');

class AnimeModel {
    async getOne(id) {
        try {
            const anime = await axios.get(`https://api.jikan.moe/v4/anime/${id}/full`);
            return anime.data;
        } catch (error) {
            console.log(error)
        }
    }

    async getAiring() {
        try {
            const airingAnime = await axios.get('https://api.jikan.moe/v4/anime?status=airing&order_by=score&sort=desc&limit=10');
            return airingAnime;
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new AnimeModel;