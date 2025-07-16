import ContentLoader from 'react-content-loader';

function SkeletonVideo(props) {
   return (
      <>
         <ContentLoader
            speed={2}
            width={1200}
            height={700}
            viewBox="0 0 1238 700"
            backgroundColor="#363636"
            foregroundColor="#4f4f4f"
            {...props}
         >
            <rect x="0" y="700" rx="10" ry="10" width="1238" height="200" />
            <rect x="0" y="0" rx="10" ry="10" width="1238" height="700" />
         </ContentLoader>
      </>
   );
}

export default SkeletonVideo;
