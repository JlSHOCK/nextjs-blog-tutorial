import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import Layout from '../../components/Layout'

const Podcast = ({ podcasts }) => {
  return (
    <Layout
      pageClass="podcast"
      title="Podcast"
      description=""
    >
      <section>
        <div className={`container`}>
          <h1 className={`title size-h-xxl weight-600`}>Podcast</h1>
          <ul className={'blog-items'}>
            {podcasts.map(podcast => (
              <li key={podcast.slug} className={'blog-item'}>
                <Link href={`/podcast/${podcast.slug}`}>
                  <a className={'blog-item-link'}>
                    <span className={'blog-item-date size-p-xs weight-700'}>Episode {podcast.episode}</span>
                    <span className={'blog-item-title size-h-m weight-300'}>{podcast.title}</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout >
  );
}

export async function getStaticProps() {
  // List of files in blgos folder
  const filesInPodcasts = fs.readdirSync('./content/podcast')

  // Get the front matter and slug (the filename without .md) of all files
  const podcasts = filesInPodcasts.map(filename => {
    const file = fs.readFileSync(`./content/podcast/${filename}`, 'utf8')
    const matterData = matter(file)

    return {
      ...matterData.data, // matterData.data contains front matter
      slug: filename.slice(0, filename.indexOf('.'))
    }
  })

  return {
    props: {
      podcasts
    }
  }

}

export default Podcast;