import { useSelector } from 'react-redux';
import searchParamInYoutube from '../../tools/searchParamInYoutube';

function Video() {
   const { searchFilm } = useSelector((store) => store.movies);
   const trailerurl = searchFilm.film.trailerUrl;
   const videoURL = searchParamInYoutube(trailerurl);

   console.log(videoURL);

   return (
      <>
         {searchFilm.status === 'loading' ? (
            <p>Loading...</p>
         ) : (
            <div className="video-wrapper">
               <iframe
                  width="100%"
                  height="700"
                  src={`https://www.youtube.com/embed/${videoURL}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
               ></iframe>
            </div>
         )}
      </>
   );
}

export default Video;
