const axios = require('axios');

class AnimeModel {
    async getOne(id) {
        try {
            const anime = await axios.get(`https://api.jikan.moe/v4/anime/${id}/`);
            return anime.data;
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new AnimeModel;