import { useState, useEffect} from "react"
import { fetchTrendingMovies } from "../../moviedb";
import { StarIcon } from '@heroicons/react/20/solid';
import { ClockIcon } from '@heroicons/react/20/solid';
import { Link } from "react-router-dom";

export default function Home() {
  const [trending, setTrending] = useState([]);
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  
  const getTrending = async () => {
    const data = await fetchTrendingMovies();
    if (data && data.results){
      const firstSix = data.results.slice(0, 8);
      setTrending(firstSix)
    }
  }

  useEffect(() => {
    getTrending();
  }, []);

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }


  if(trending == undefined || trending.length == 0){
    return(
      <div className="h-full w-full">
        <h4 className="text-3xl ">Loading</h4>
      </div>
    )
  }else{
    return (
      <div className="bg-white">
        <main>
          <div className="relative isolate">
            <svg
              className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                  width={200}
                  height={200}
                  x="50%"
                  y={-1}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M.5 200V.5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                <path
                  d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                  strokeWidth={0}
                />
              </svg>
              <rect width="100%" height="100%" strokeWidth={0} fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
            </svg>
            <div
              className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
              aria-hidden="true"
            >
              <div
                className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                style={{
                  clipPath:
                    'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
                }}
              />
            </div>
            <div className="overflow-hidden">
              <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
                <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                  <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Discover, Explore, and Enjoy the World of Cinema
                    </h1>
                    <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    Discover an exciting world of movies with Movie Explorer, your go-to app for exploring trending movies and diving deep into movie details. Whether you are a casual movie enthusiast or a dedicated cinephile, Movie Explorer provides a seamless and engaging experience.
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                      <a
                        href="/movies"
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Movies
                      </a>
                      <a href="https://github.com/moseskereya/siutemovies" className="text-sm font-semibold leading-6 text-gray-900">
                        Live demo <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                  <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                    <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                      <div className="relative">
                        <img
                          src="https://th.bing.com/th/id/OIP.F11Z9ch58KohQfUrzs3-gAHaEK?pid=ImgDet&w=750&h=421&rs=1"
                          alt=""
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                    </div>
                    <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                      <div className="relative">
                        <img
                          src="https://img.freepik.com/free-photo/man-watching-movie-theater-seats-spectacle-generative-ai_188544-7929.jpg?w=1380&t=st=1697619179~exp=1697619779~hmac=a51e2bfbf17847464f0418752dfb9a72b539e33c288c95588794c2486b67bceb"
                          alt=""
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                      <div className="relative">
                        <img
                          src="https://th.bing.com/th/id/R.b64a6528747b22cc68e7d00b318016f1?rik=7I%2bHzqPpeOfFlg&pid=ImgRaw&r=0"
                          alt=""
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                    </div>
                    <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                      <div className="relative">
                        <img
                          src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                          alt=""
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                      <div className="relative">
                        <img
                          src="https://i1.sndcdn.com/artworks-pDG27KyI9AUeyRA6-MRt9Aw-t500x500.jpg"
                          alt=""
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"/>
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8 px-10">
          {trending.map((movie) => (
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
        </main>
      </div>
    )
  }






}
