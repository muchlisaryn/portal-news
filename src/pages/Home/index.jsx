import "./style.css";
import Navbar from "../../component/molecules/Navbar";
import NewsCard from "../../component/molecules/NewsCard";
import { useState, useEffect } from "react";
import axios from "axios";
import BoxContainer from "../../container/BoxContainer";

export default function Home() {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [news, setNews] = useState([]);

  const apiHotNews = `https://newsapi.org/v2/everything?q=apple&from=2023-02-27&to=2023-02-27&sortBy=popularity&pageSize=4&apiKey=${process.env.REACT_APP_API_KEY}`;

  const fetchData = async () => {
    const abortController = new AbortController();

    try {
      const response = await axios.get(apiHotNews, {
        signal: abortController.signal,
      });

      const data = await response.data.articles;
      setNews(data);
      setLoading(false);
    } catch (e) {
      setError(e);
    }
    return () => abortController.abort();
  };

  const searchNews = async () => {
    const abortController = new AbortController();

    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${value}&from=2023-02-24&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_KEY}`,
        {
          signal: abortController.signal,
        }
      );

      const data = await response.data.articles;
      setNews(data);
      setLoading(false);
    } catch (e) {
      setError(e);
    }

    return () => abortController.abort();
  };

  useEffect(() => {
    if (value?.length > 1) {
      searchNews();
    } else {
      fetchData();
    }
  }, [value]);

  console.log(error);
  return (
    <div>
      <Navbar setValue={setValue} onClick={searchNews} />
      <div className="container">
        <div className=" my-4 text-center ">
          {value?.length ? (
            <div>Hasil Pencarian "{value}"</div>
          ) : (
            <>
              <div className="fw-bold">WELLCOME PORTAL NEWS</div>
              <div className="fw-bold">
                (isi form "search" untuk mencari berita)
              </div>
            </>
          )}
        </div>

        {loading ? (
          <div className="text-center">Loding...</div>
        ) : (
          <>
            {news?.length >= 4 ? (
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
            ) : (
              <div className="text-center bg-danger text-light">
                Berita "{value}" tidak ditemukan
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
