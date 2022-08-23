import axios from "axios";

export const fetchArticles = (topic) => {
  if (topic === "all") {
    return axios.get("https://news-api-08-22.herokuapp.com/api/articles").then(
      (res) => {
        return res.data
      }
    );
  } else {
    return axios.get(
      `https://news-api-08-22.herokuapp.com/api/articles?topic=${topic}`
    ).then((res) => {
      return res.data
    });
  }
};

export const fetchTopics = () => {
  return axios
    .get("https://news-api-08-22.herokuapp.com/api/topics")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchSingleArticle = (article_id) => {
  return axios
    .get(`https://news-api-08-22.herokuapp.com/api/articles/${article_id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};


export const updateArticleVotes = (article_id) => {
  return axios
    .patch(`https://news-api-08-22.herokuapp.com/api/articles/${article_id}`, {
      inc_votes : 1
    })
    .then((res) => {
    })
};