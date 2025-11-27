import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';

const ImageWithFallback = ({ 
  src, 
  alt, 
  className = '', 
  fallbackSrc = null,
  showIcon = true 
}) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleError = () => {
    setError(true);
    setLoading(false);
  };

  const handleLoad = () => {
    setLoading(false);
  };

  // Jika ada fallback dan error terjadi, gunakan fallback
  if (error && fallbackSrc) {
    return (
      <img
        src={fallbackSrc}
        alt={alt}
        className={className}
        onError={() => setError(true)}
      />
    );
  }

  // Jika error dan tidak ada fallback, tampilkan placeholder
  if (error) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 ${className}`}>
        {showIcon && (
          <div className="text-center text-gray-400">
            <ImageOff className="w-12 h-12 mx-auto mb-2" />
            <p className="text-sm">Gambar tidak tersedia</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      {loading && (
        <div className={`animate-pulse bg-gray-200 ${className}`} />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${loading ? 'hidden' : ''}`}
        onError={handleError}
        onLoad={handleLoad}
      />
    </>
  );
};

export default ImageWithFallback;
