import Layout from '../../components/Layout'

const Podcast = () => {
  return (
    <Layout
      pageClass="podcast"
      title="Podcast"
      description=""
    >
      <section>
        <div className={`container`}>
          <h1 className={`title size-h-xxl weight-600`}>Podcast</h1>
        </div>
      </section>
    </Layout >
  );
}

export default Podcast;