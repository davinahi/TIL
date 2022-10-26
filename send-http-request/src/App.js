import { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //이 함수가 변경되면 밑에 useEffect가 실행됨 (외부 상태를 이용한다면 이 함수도 바뀔 수 있으니)
  // useCallback으로 불필요한 재생성을 막음
  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    //요청 보내기
    //fetch를 호출할 때 마다 요청이 보내지는 것임

    try {
      const res = await fetch("https://swapi.dev/api/films/");

      if (!res.ok) throw new Error("Something went wrong!");

      const data = await res.json();

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
      console.log("error");
    }
    setIsLoading(false);
  }, []);

  //fetchMoviesHandler가 함수이기 때문에 의존성으로 추가하면 무한루프가 발생함
  // 해결책 1. useEffect의 의존성 배열에 들어있는 fetchMoviesHandler를 삭제하고 [] 빈 배열로 만들면 되는데, 만약 외부 상태를 사용하면
  //          의도치 않은 버그가 발생할 수도 있음
  // 해결책 2. 이를 방지하기 위해서 useCallback 훅을 써주면 됨 => fetchMoviesHandler 함수 자체를 감싸주면 됨
  //            =>  fetchMoviesHandler는 useCallback의 결과를 저장하는 상수가 되어야 함으로 상수형태로 변경하여 감싸줌
  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    console.log("movie");
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    console.log("error");
    content = <p>{error}</p>;
  }
  if (isLoading) {
    console.log("loading");
    content = <p>Loading...</p>;
  }

  return (
    <>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {/* {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>Found no movies</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>} */}
        {content}
      </section>
    </>
  );
}

export default App;
