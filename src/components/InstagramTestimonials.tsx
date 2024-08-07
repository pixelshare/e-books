import React from 'react';
import InstagramEmbed from 'react-instagram-embed';

interface InstagramTestimonialsProps {
  urls: string[];
}

const InstagramTestimonials: React.FC<InstagramTestimonialsProps> = ({ urls }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
      {urls.map((url, index) => (
        <div key={index} className="flex justify-center items-center">
          <InstagramEmbed
            url={url}
            clientAccessToken='IGQVJ...'
            maxWidth={320}
            hideCaption={false}
            containerTagName='div'
            injectScript
          />
        </div>
      ))}
    </div>
  );
};

export default InstagramTestimonials;
