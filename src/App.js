import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(1);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const json = await( 
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(0);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return <div>{loading ? <h1>Loading...</h1> : movies.map((movie) => (
    <div key={movie.id}>
      <h2>{movie.title}</h2>
      <p>{movie.summary}</p>  
      <ul>
        {movie.genres.map((g) => (
          <li>{g}</li>
        ))}
      </ul>
    </div>
    ))}
  </div>
}

export default App;