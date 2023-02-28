import React from 'react';

const LinkedinIcon = ({color}) => {
  return(
    <svg className={`social-icon ${color}`} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15.29">
      <path className="social-icon-fill" d="M3.63,15.29H.2V5H3.63ZM5.53,5H9V6.44a3.4,3.4,0,0,1,3.09-1.71C14.31,4.73,16,6.21,16,9.38v5.91H12.57V9.77c0-1.38-.5-2.33-1.74-2.33A1.89,1.89,0,0,0,9.07,8.7,2.32,2.32,0,0,0,9,9.53v5.76H5.53S5.57,5.94,5.53,5ZM1.94,0a1.79,1.79,0,1,1,0,3.57h0A1.79,1.79,0,1,1,1.94,0Z"/>
    </svg>
  );
}

export default LinkedinIcon;