import Layout from '../../components/Layout'
import { attributes as AboutContent } from '../../content/about.md';

const About = () => {
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
            AboutContent.staffMembers &&

            <ul className={'members'}>
              {
                AboutContent.staffMembers.map(({ image, title, name }, index) => {
                  return (
                    <li className={'member'} key={`staff-${index}`}>
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
      </section>
    </Layout >
  );
}

export default About;