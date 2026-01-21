import { useState } from "react";

const Thumbnail = (props) => {
  const { src, width, onLoad } = props;

  return (
    <div>
      <img src={src} alt="image" width={width} onLoad={onLoad} />
    </div>
  );
};

const WithImageLoader = (WrappedComponent) => {
  const [isLoading, setIsLoading] = useState(true);

  return function (props) {
    if (isLoading) {
      return <span>Loading Image...</span>;
    }

    return <WrappedComponent {...props} onLoad={() => setIsLoading(false)} />;
  };
};

const ThumbnailWithLoader = WithImageLoader(Thumbnail);
<ThumbnailWithLoader 
    src="https://marketplace.canva.com/EAFSv6o6be/Q/2/0/1600w/canva-red-bold-finance-youtube-thumbnail-vGSnQGShz3c.jpg" 
    width="200px"
/>;
