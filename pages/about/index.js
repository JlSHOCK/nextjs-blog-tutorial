import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Popup from "reactjs-popup";
import styles from './about.module.scss';
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
          <h1 className={`title size-h-xxl weight-600`}>
            {AboutContent ? AboutContent.title : "About Us"}
          </h1>
          {
            staff &&

            <ul className={`${styles.members}`}>
              {
                staff.map(({ image, title, name }, index) => {
                  return (
                    <li className={`${styles.member}`} key={`staff-${index}`} onClick={() => (openPopup && openPopup(name))}>
                      <div className={`${styles.member_img_container}`}>
                        <img src={image ? image : "/images/placeholder-product.png"} alt={name} className={`${styles.member_img}`} />
                      </div>
                      <div className={`${styles.member_content}`}>
                        <h3 className={`${styles.member_name} size-p-l weight-700`}>{name}</h3>
                        {
                          title &&
                          <p className={`${styles.member_title} size-p-xs weight-400`}>{title}</p>
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

          <div className={`${styles.member_popup}`}>
            <div className={`${styles.member_popup_img_container}`}>
              <img src={staffPopupData.image ? staffPopupData.image : "/images/placeholder-product.png"} alt={staffPopupData.name} className={`${styles.member_popup_img}`} />
            </div>
            <div className={`${styles.member_popup_content}`}>
              <h3 className={`${styles.member_popup_name} size-h-m weight-700`}>{staffPopupData.name}</h3>
              {
                staffPopupData.title &&
                <p className={`${styles.member_popup_title} size-p-m weight-400`}>{staffPopupData.title}</p>
              }
              {
                staffPopupData.copy &&
                <p className={`${styles.member_popup_copy} size-p-s weight-400`}>
                  {staffPopupData.copy}
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