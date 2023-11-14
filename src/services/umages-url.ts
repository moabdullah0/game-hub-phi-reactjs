const getCroppedImageUrl = (url: string) => {
  if(!url) return ''
    const target = "media/";
    const index = url.indexOf(target);
    
    if (index !== -1) {
      const startIndex = index + target.length;
      return url.slice(0, startIndex) + "crop/600/400/" + url.slice(startIndex);
    }
  
    // If the target substring is not found, return the original URL
    return url;
  };
  
  export default getCroppedImageUrl;
  