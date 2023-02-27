const getWindowWidth = () => {
  if (typeof window !== 'undefined') {
    let windowWidth = window.innerWidth;
    return windowWidth;
  }  
}

export default getWindowWidth;