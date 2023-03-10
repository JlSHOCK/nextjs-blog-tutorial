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
          <ul className={'podcast-items'}>
            {podcasts.map(podcast => (
              <li key={podcast.slug} className={'podcast-item'}>
                <Link href={`/podcast/${podcast.slug}`}><a className={'podcast-item-link'}></a></Link>
                <h3 className={'podcast-item-episode size-p-xs weight-700'}>Episode {podcast.episode}</h3>
                <p className={'podcast-item-title size-h-m weight-300'}>{podcast.title}</p>
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