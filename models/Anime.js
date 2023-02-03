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

    async getRandom() {
        try {
            let anime = await axios.get(`https://api.jikan.moe/v4/random/anime`);

            console.log(anime.data.data.rating)

            // filter out nsfw results
            while (anime.data.data.rating === "R+ - Mild Nudity" || anime.data.data.rating === "Rx - Hentai") {
                anime = await axios.get(`https://api.jikan.moe/v4/random/anime`);
            }

            return anime.data;
        } catch (error) {
            console.log(error)
        }
    }

    async getMulti(url) {
        try {
            const anime = await axios.get(url);
            return anime;
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new AnimeModel;