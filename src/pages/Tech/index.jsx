import { useState, useEffect } from "react";
import Navbar from "../../component/molecules/Navbar";
import axios from "axios";
import BoxContainer from "../../container/BoxContainer";
import NewsCard from "../../component/molecules/NewsCard";

export default function Tech() {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);

  const techNews = async () => {
    const abortController = new AbortController();
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=tech&from=2023-02-24&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_KEY}`,
        {
          signal: abortController.signal,
        }
      );

      const data = await response.data.articles;
      setNews(data);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  console.log(news);

  useEffect(() => {
    techNews();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="my-4 text-center">TECH NEWS</div>
      {loading && <div className="text-center">Loading...</div>}
      <BoxContainer>
        {news?.map((list, index) => (
          <NewsCard
            key={index}
            title={list.content}
            desc={list.description}
            image={list.urlToImage}
            url={list.url}
          />
        ))}
      </BoxContainer>
    </div>
  );
}
