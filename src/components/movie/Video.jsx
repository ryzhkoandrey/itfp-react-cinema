import { useSelector } from 'react-redux';

function Video() {
   const { searchFilm } = useSelector((store) => store.movies);
   const videoURL = searchFilm.film.trailerUrl;

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
