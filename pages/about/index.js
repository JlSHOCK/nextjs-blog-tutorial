import React, { useState } from 'react';
import Popup from "reactjs-popup";
import Layout from '../../components/Layout';
import { attributes as AboutContent } from '../../content/about.md';

const About = () => {
  const [staffPopupData, setStaffPopupData] = useState({
    id: '',
    name: '',
    position: '',
    copy: '',
    image: '',
  });

  const staff = AboutContent.staffMembers;

  const [popupStatus, setPopupStatus] = useState(false);

  const openPopup = (clickedStaffName) => {
    const clickedStaffData = staff.find(person => person.name === clickedStaffName);
    setStaffPopupData(clickedStaffData)
    setPopupStatus(true);
  }

  const closePopup = () => {
    setPopupStatus(false);
  }

  return (
    <Layout
      pageClass="about"
      title="About"
      description=""
    >
      <section>
        <div className={`container`}>
          <h1 className={`title size-h-xxl weight-600`}>{AboutContent ? AboutContent.title : "About Us"}</h1>
          {console.log(AboutContent)}
          {
            staff &&

            <ul className={'members'}>
              {
                staff.map(({ image, title, name }, index) => {
                  return (
                    <li className={'member'} key={`staff-${index}`} onClick={() => (openPopup && openPopup(name))}>
                      <div className={'member-img-container'}>
                        <img src={image ? image : "/images/placeholder-product.png"} alt={name} className={`member-img`} />
                      </div>
                      <div className={'member-content'}>
                        <h3 className={'member-name size-p-l weight-700'}>{name}</h3>
                        {
                          title &&
                          <p className={'member-title size-p-xs weight-400'}>{title}</p>
                        }
                      </div>
                    </li>
                  );
                })
              }
            </ul>
          }
        </div>
        <Popup open={popupStatus} closeOnDocumentClick onClose={closePopup} className="popup">
          <button className="close" onClick={closePopup}></button>

          <div className={'member-popup'}>
            <div className={'member-popup-img-container'}>
              <img src={staffPopupData.image ? staffPopupData.image : "/images/placeholder-product.png"} alt={staffPopupData.name} className={`member-popup-img`} />
            </div>
            <div className={'member-popup-content'}>
              <h3 className={'member-popup-name size-h-m weight-700'}>{staffPopupData.name}</h3>
              {
                staffPopupData.title &&
                <p className={'member-popup-title size-p-m weight-400'}>{staffPopupData.title}</p>
              }
              {
                staffPopupData.copy &&
                <p className={'member-popup-copy size-p-s weight-400'}>
                  The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.
                </p>
              }
            </div>
          </div>

        </Popup>
      </section>
    </Layout >
  );
}

export default About;