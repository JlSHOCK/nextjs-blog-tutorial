import Layout from '../../components/Layout'

const About = () => {
  return (
    <Layout
      pageClass="about"
      title="About"
      description=""
    >
      <section>
        <div className={`container`}>
          <h1 className={`title size-h-xxl weight-600`}>About</h1>
        </div>
      </section>
    </Layout >
  );
}

export default About;