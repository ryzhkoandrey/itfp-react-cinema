import { useSelector } from 'react-redux';
import searchParamInYoutube from '../../tools/searchParamInYoutube';
import SkeletonVideo from '../skeletons/SkeletonVideo';

function Video() {
   const { searchFilm, status } = useSelector((store) => store.movies);

   if (status === 'loading') {
      return (
         <div className="video-wrapper">
            <SkeletonVideo />
         </div>
      );
   }

   const trailerurl = searchFilm.film?.trailerUrl;
   const videoURL = trailerurl ? searchParamInYoutube(trailerurl) : '';

   return (
      <div className="video-wrapper">
         <iframe
            width="1200"
            height="700"
            src={`https://www.youtube.com/embed/${videoURL}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
         ></iframe>
      </div>
   );
}

export default Video;
