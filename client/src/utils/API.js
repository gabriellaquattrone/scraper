import axios from 'axios';

export default {
    findAllWhereUnsaved: () => {
        return axios.get('/api/articles');
    },
    findAllWhereSaved: () => {
        return axios.get('api/articles/saved');
    },
    saveArticle: (articleId) => {
        return axios.put(`/api/articles/${articleId}`)
    },
    createArticle: () => {
        return axios.post('/api/articles');
    }
}