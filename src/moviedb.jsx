import axios from 'axios'
const apiKey = "fa1875db1f08a7d5f9887db721a0a94e";
const apiBaseUrl = 'https://api.themoviedb.org/3';
const trendingMoviesEndpoint = `${apiBaseUrl}/discover/movie?api_key=${apiKey}&with_genres=28`;
const upcomingMoviesEndpoint = `${apiBaseUrl}/movie/upcoming?api_key=${apiKey}`;
const topRatedMoviesEndpoint = `${apiBaseUrl}/movie/top_rated?api_key=${apiKey}`;
const actionmoviesEndpint = `${apiBaseUrl}/discover/movie?api_key=${apiKey}&with_genres=28`;
const comedymoviesEndpoint = `${apiBaseUrl}/discover/movie?api_key=${apiKey}&with_genres=35`; 
const horomoviesEndpoint = `${apiBaseUrl}/discover/movie?api_key=${apiKey}&with_genres=27`;
 const romanticmoviesEndpoint = `${apiBaseUrl}/discover/movie?api_key=${apiKey}&with_genres=10749`;
 const documentariemoviesEndpoint = `${apiBaseUrl}/discover/movie?api_key=${apiKey}&with_genres=99`;

 //movie details
 const moviedetailEndpoint = id => `${apiBaseUrl}movie/${id}?api_key=${apiKey}&append_to_response=videos,images,credits`
 const moviecreditsEndpoint = id => `${apiBaseUrl}/movie/${id}/credits?api_key=${apiKey}`
 const moviesimilarmoviesEndpoint = id => `${apiBaseUrl}/movie/${id}/similar?api_key=${apiKey}`

 //images
export const image500 = posterPath=> posterPath? 'https://image.tmdb.org/t/p/w500'+posterPath : null;
export const image342 = posterPath=> posterPath? 'https://image.tmdb.org/t/p/w342'+posterPath : null;
export const image185 = posterPath=> posterPath? 'https://image.tmdb.org/t/p/w185'+posterPath : null;

// fallback images 
export const fallbackMoviePoster = 'https://img.myloview.com/stickers/white-laptop-screen-with-hd-video-technology-icon-isolated-on-grey-background-abstract-circle-random-dots-vector-illustration-400-176057922.jpg';
export const fallbackPersonImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmUiF-YGjavA63_Au8jQj7zxnFxS_Ay9xc6pxleMqCxH92SzeNSjBTwZ0l61E4B3KTS7o&usqp=CAU';


const apiCall = async (endpoint, params)=>{
    const options = {
        method: 'GET',
        url: endpoint,
        params: params? params: {}
    }; 

    try{
        const response = await axios.request(options);
        return response.data;
    }catch(error){
        console.log('error: ',error);
        return {};
    }
}


export const fetchTrendingMovies = () => {
    return apiCall (trendingMoviesEndpoint);
}

export const fetchUpcomming = () => {
    return apiCall (upcomingMoviesEndpoint);
}

export const fetchTopRatedMovies = () => {
    return apiCall(topRatedMoviesEndpoint);
}


export const fetchactionmoviesEndpint = () => {
    return apiCall (actionmoviesEndpint);
}

export const fetchcomedymoviesEndpoint = () => {
    return apiCall (comedymoviesEndpoint);
}

export const fetchhoromoviesEndpoint = () => {
    return apiCall(horomoviesEndpoint);
}

export const fetchromanticmoviesEndpoint = () => {
    return apiCall (romanticmoviesEndpoint);
}

export const fetchdocumentariemoviesEndpoint = () => {
    return apiCall(documentariemoviesEndpoint);
}

export const fetchMoviedetails = id => {
    return apiCall(moviedetailEndpoint(id));
}

export const fetchcredits = id=> {
    return apiCall (moviecreditsEndpoint(id));
}

export const fetchsimilar = id => {
    return apiCall(moviesimilarmoviesEndpoint(id));
}