import {useState, useEffect} from 'react'
import {fetchTrendingMovies,fallbackMoviePoster, image185} from '../../moviedb';
import { StarIcon } from '@heroicons/react/20/solid';


const Movies = () => {
    const [trending, setTrending] = useState([])
    const [searchQuery, setSearchQuery] = useState('');
    const baseUrl = "https://image.tmdb.org/t/p/original/"

    const getTrending = async () => {
        const data = await fetchTrendingMovies();
        if(data && data.results) setTrending(data.results)
    }

    useEffect(() =>{
        getTrending();
    }, []);

    function classNames(...classes) {
      return classes.filter(Boolean).join(' ');
    }
    
    function SortMovies(trending, sortBy) {
        switch (sortBy) {
          case 'title':
            return [...trending].sort((a, b) => a.title.localeCompare(b.title));
          case 'vote_average':
            return [...trending].sort((a, b) => a.rating - b.rating);
          default:
            return trending;
      }
    }

    return (
      <div className="flex w-full min-w-0">
        <div className="w-full p-4 overflow-y-auto">
          <h2 className="sr-only">Movies</h2>
          <section className='flex justify-end'>
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
              <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
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
      </div>
    );
  }

export default Movies