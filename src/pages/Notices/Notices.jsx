import React, { useState, useEffect } from "react";
import { Heading } from "../../atoms";
import { Loading } from "../../atoms/Icons";
import { CardContent } from "../../molecules/CardContent";

const GOOGLENEWSKEY = process.env.REACT_APP_GOOGLE_NEWS_API;

const Notices = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    fetch(
      `http://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=${GOOGLENEWSKEY}`
    )
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Heading heading="h1">Notícias do dia</Heading>
      {articles ? (
        articles.map((article) => (
          <>
            <CardContent
              title={article.title}
              subtitle={article.description}
              paragraph={article.content}
            />
          </>
        ))
      ) : (
        <div style={{ display: "flex" }}>
          <Loading />
        </div>
      )}
    </div>
  );
};

export default Notices;
