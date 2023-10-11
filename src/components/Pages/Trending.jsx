import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../../moviedb';
import { StarIcon } from '@heroicons/react/20/solid';
import { ClockIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [trending, setTrending] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('title');
  const [isLoading, setIsLoading] = useState(true);
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  
  const getTrending = async () => {
    const data = await fetchTrendingMovies();
    if (data && data.results) setTrending(data.results);
    setIsLoading(false);
  }

  useEffect(() => {
    getTrending();
  }, []);

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  function SortMovies(movies, sortBy) {
    switch (sortBy) {
      case 'title':
        return [...movies].sort((a, b) => a.title.localeCompare(b.title));
      case 'vote_average':
        return [...movies].sort((a, b) => b.vote_average - a.vote_average);
        case 'popularity':
          return [...trending].sort((a, b) => b.popularity - a.popularity);
      default:
        return movies;
    }
  }

  return (
    <div className="flex w-full min-w-0">
      {isLoading? (
        <div className="text-center p-4">
          <span>Loading movies...</span>
        </div>
      ): 
      <div className="w-full p-4 overflow-y-auto">
      <h2 className="sr-only">Movies</h2>
      <section className='flex justify-between'>
      <div className="mb-4 py-7">
          <label htmlFor="sortSelect" className="block text-sm font-medium text-gray-700">
            Sort by:
          </label>
          <select
            id="sortSelect"
            name="sortSelect"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="title">Title</option>
            <option value="popularity">Popularity</option>
            <option value="vote_average">Vote Average</option>
          </select>
        </div>
        <div className="mb-4 py-7">
          <input
            type="text"
            placeholder="Search Movies"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </section>
      <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
        {SortMovies(
          trending.filter((movie) =>
            movie.title.toLowerCase().includes(searchQuery.toLowerCase())
          ),
          sortBy
        ).map((movie) => (
          <div key={movie.id} className="group relative border-b border-r border-gray-200 p-4 sm:p-6">
            <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
              <img
                src={`${baseUrl}/${movie.poster_path}`}
                alt={movie.title}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="pb-4 pt-10">
              <h3 className="text-sm font-medium text-gray-900">
              <Link to={`/movie/${movie.id}`}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {movie.title}
            </Link>
              </h3>
              <div className="mt-3 flex justify-between items-center">
                <p className="sr-only">{movie.vote_average} out of 10</p>
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        movie.vote_average > rating ? 'text-primary' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                <p className="mt-1 text-sm text-gray-500">{movie.vote_average}</p>
                </div>
                <div className='flex justify-between items-center'>
                <ClockIcon className='h-4 w-4 m-2 text-primary'/>
                <p className="mt-1 text-sm text-gray-500">{movie.release_date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
   }
    </div>
  );
}

export default Movies;
