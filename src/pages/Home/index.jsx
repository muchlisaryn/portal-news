import "./style.css";
import Navbar from "../../component/molecules/Navbar";
import NewsCard from "../../component/molecules/NewsCard";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState();
  const [news, setNews] = useState();

  useEffect(() => {
    if (value.length > 0) {
      axios
        .get(
          `https://newsapi.org/v2/everything?q=${value}&from=2023-01-28&sortBy=publishedAt&pageSize=20&apiKey=${process.env.REACT_APP_API_KEY}`
        )
        .then((result) => setResult(result.data.articles))
        .catch((err) => console.log(err));
    } else {
      axios
        .get(
          `https://newsapi.org/v2/everything?q=apple&from=2023-02-27&to=2023-02-27&sortBy=popularity&pageSize=4&apiKey=${process.env.REACT_APP_API_KEY}`
        )
        .then((result) => setNews(result.data.articles))
        .catch((err) => console.log(err));
    }
  }, [value]);

  console.log(news);

  return (
    <div>
      <Navbar setValue={setValue} />

      {value ? (
        <div className="container">
          <div className="text-center my-4">
            Hasil Pencarian "{value ? value : "..."}"
          </div>
          <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4 ">
            {result?.length ? (
              <>
                {result.map((list, index) => (
                  <NewsCard
                    key={index}
                    title={list.content}
                    desc={list.description}
                    image={list.urlToImage}
                    url={list.url}
                  />
                ))}
              </>
            ) : (
              <div className="bg-danger text-center w-100 py-2 text-light">
                News Not Found
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="container">
          <div className=" my-4 text-center ">
            <div className="fw-bold">WELLCOME PORTAL NEWS</div>
            <div className="fw-bold">
              (isi form "search" untuk mencari berita)
            </div>
          </div>
          <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4 ">
            {news?.map((list, index) => (
              <NewsCard
                key={index}
                title={list.content}
                desc={list.description}
                image={list.urlToImage}
                url={list.url}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
