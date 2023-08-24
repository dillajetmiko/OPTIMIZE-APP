'use client'
import { useEffect, useState } from 'react';

function LazyLoadedIframe() {
  const [loadIframe, setLoadIframe] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the iframe should be loaded based on scroll position
      if (window.scrollY > 100) {
        setLoadIframe(true);
        // Remove the scroll event listener to load the iframe only once
        window.removeEventListener('scroll', handleScroll);
      }
    };

    // Add a scroll event listener to trigger lazy loading
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {loadIframe && (
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/mo8thg5XGV0"
          allow="autoplay; encrypted-media"
        >
        </iframe>
      )}
    </div>
  );
}

export default LazyLoadedIframe;
