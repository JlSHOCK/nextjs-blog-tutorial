import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import Layout from '../../components/Layout'

const Blog = ({ blogs }) => {
  return (
    <Layout
      pageClass="blog"
      title="Blog"
      description=""
    >
      <section>
        <div className={`container`}>
          <h1 className={`title size-h-xxl weight-600`}>Blog</h1>
          <ul className={'blog-items'}>
            {blogs.map(blog => (
              <li key={blog.slug} className={'blog-item'}>
                <Link href={`/blog/${blog.slug}`}><a className={'blog-item-link'}></a></Link>
                <h3 className={'blog-item-title size-h-m weight-300'}>{blog.title}</h3>
                <p className={'blog-item-date size-p-xs weight-700'}>{blog.date}</p>
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
  const filesInBlogs = fs.readdirSync('./content/blog')

  // Get the front matter and slug (the filename without .md) of all files
  const blogs = filesInBlogs.map(filename => {
    const file = fs.readFileSync(`./content/blog/${filename}`, 'utf8')
    const matterData = matter(file)

    return {
      ...matterData.data, // matterData.data contains front matter
      slug: filename.slice(0, filename.indexOf('.'))
    }
  })

  return {
    props: {
      blogs
    }
  }

}

export default Blog;