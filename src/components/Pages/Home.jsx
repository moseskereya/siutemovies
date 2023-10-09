import {useState, useEffect} from 'react'
import {fetchTrendingMovies} from '../../moviedb';
import { StarIcon } from '@heroicons/react/20/solid';


const Movies = () => {
    const [trending, setTrending] = useState([])
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('title');
    const [isLoading, setIsLoading] = useState(true);

    const baseUrl = "https://image.tmdb.org/t/p/original/"

    const getTrending = async () => {
        const data = await fetchTrendingMovies();
        if(data && data.results) setTrending(data.results)
        setIsLoading(false); 
    }

    useEffect(() =>{
        getTrending();
    }, []);


    const handleSortChange = (event) => {
      setSortBy(event.target.value);
    };

    function classNames(...classes) {
      return classes.filter(Boolean).join(' ');
    }
   
    function SortMovies(movies, sortBy) {
      switch (sortBy) {
        case 'popularity':
          return [...movies].sort((a, b) => b.popularity - a.popularity);
        case 'vote_average':
          return [...movies].sort((a, b) => b.vote_average - a.vote_average);
        default:
          return movies;
      }
    }

    return (
      <div className="flex w-full min-w-0">
        {isLoading ? (
          <div className='h-full w-full text-center p4'>
            <span>Loading movies.....</span>
          </div>
        ): (
          <div className="w-full p-4 overflow-y-auto">
          <h2 className="sr-only">Movies</h2>
          <section className='flex justify-between'>
        <div className="mb-4 py-7 ml-4">
          <label htmlFor="sort" className="mr-2">Sort by:</label>
          <select
            id="sort"
            className="border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            value={sortBy}
            onChange={handleSortChange}
          >
            <option value="title">Title</option>
            <option value="vote_average">Vote Average</option>
          </select>
        </div>

        <div className="mb-4 py-7 ">
          <input
            type="text"
            placeholder="Movie title"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
          </section>
          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
            {SortMovies(
              trending.filter((trending) =>
              trending.title.toLowerCase().includes(searchQuery.toLowerCase())
              )           
            ).map((movie) => (
              <div key={movie.id} className="group relative border-b border-r border-gray-200 p-4 sm:p-6">
              <div className="overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
                  <img
                    src={`${baseUrl}/${movie.poster_path}`}
                    alt={movie.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="pb-4 pt-10 text-center">
                  <h3 className="text-sm font-medium text-gray-900">
                    <a href={movie.href}>
                      <span aria-hidden="true" className="absolute inset-0"/>
                      {movie.title}
                    </a>
                  </h3>
                  <div className="mt-3 flex flex-col items-center">
                    <p className="sr-only">{movie.rating} out of 5 stars</p>
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            movie.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                            'h-5 w-5 flex-shrink-0'
                          )} 
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{movie.reviewCount} reviews</p>
                  </div>
                  <p className="mt-4 text-base font-medium text-gray-900">{movie.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        )}
      </div>
    );
  }

export default Movies