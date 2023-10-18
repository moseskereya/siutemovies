import { StarIcon } from '@heroicons/react/20/solid';
import { ClockIcon } from '@heroicons/react/20/solid';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Moviedetails() {
  const {id} =  useParams();
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  const [movie, setMovie] = useState({});
  const [relatedmovie, setRelatedMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
        const api_key = "fa1875db1f08a7d5f9887db721a0a94e";
        const movieId = id;

   const fetchData = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&append_to_response=videos,images,credits`);
        const similarmovies = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${api_key}`);
        const jsonData = await response.json();
        const jsonData2 = await similarmovies.json();
       setMovie(jsonData);
       setRelatedMovie(jsonData2.results)
       setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div className="bg-white">
      {isLoading? (
          <div className="text-center p-4">
          <span>Loading movie detail ...</span>
        </div>
      ) : 
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">{movie.tagline}</h1>
      <div className="mt-8">
        <div className="space-y-24">
            <div
              key={movie.id}
              className="grid grid-cols-1 text-sm sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-6 md:gap-x-8 lg:gap-x-8"
            >
              <div className="sm:col-span-4 md:col-span-5 md:row-span-2 md:row-end-2">
                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-50">
                  <img src={`${baseUrl}/${movie.poster_path}`} alt={movie.title}/>
                </div> 
              </div>
              <div className="mt-6 sm:col-span-7 sm:mt-0 md:row-end-1">
                <h3 className="text-lg font-medium text-gray-900">
                  <a href={movie.href}>{movie.title}</a>
                </h3>
                <p className="mt-1 font-medium text-primary">Popularity  {movie.popularity}</p>
                <p className="mt-3 text-gray-500">{movie.overview}</p>
              </div>
              <div className="sm:col-span-12 md:col-span-7">
                <p className="mt-6 font-medium text-gray-900 md:mt-10">
                  {movie.status} on <time dateTime={movie.release_date}>{movie.release_date}</time>
                </p>
                <div className="mt-6">
                  <div className="overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="h-2 rounded-full bg-primary"
                      style={{ width: `calc((${movie.step} * 2 + 1) / 8 * 100%)` }}
                    />
                  </div>
                  <div className="container mx-auto p-4">
                  <h2 className="text-lg font-medium text-gray-900">Casts</h2>
                  <div className="flex overflow-x-scroll">
                    {movie.credits.cast?.map((cast, index) => (
                      <div key={index} className="flex flex-col items-center m-4">
                        <div className="w-32 h-32 overflow-hidden rounded-full">
                          <img
                            src={`${baseUrl}/${cast.profile_path}`}
                            alt={`Cast ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="mt-2 text-gray-900">{cast.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                </div>
              </div>
            </div>
        </div>
      </div>

      <div className=' m-4 p-4'>
         <h4 className="text-3xl font-bold tracking-tight text-gray-900"> Related Movies</h4>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
        {relatedmovie?.map((movie) => (
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
                  <span aria-hidden="true" className="absolute inset-0" />
                  {movie.title}
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
  )
}
