import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import Layout from '../../components/Layout'

const Products = ({ products }) => {
  return (
    <Layout
      pageClass="products"
      title="Products"
      description=""
    >
      <section>
        <div className={`container`}>
          <h1 className={`title size-h-xxl weight-600`}>Products</h1>
          <ul className={'blog-items'}>
            {products.map(product => (
              <li key={product.slug} className={'blog-item'}>
                <Link href={`${product.link}`}>
                  <a className={'blog-item-link'} target="_blank">
                    <span className={'blog-item-title size-h-m weight-300'}>{product.name}</span>
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
  const filesInProducts = fs.readdirSync('./content/products')

  // Get the front matter and slug (the filename without .md) of all files
  const products = filesInProducts.map(filename => {
    const file = fs.readFileSync(`./content/products/${filename}`, 'utf8')
    const matterData = matter(file)

    return {
      ...matterData.data, // matterData.data contains front matter
      slug: filename.slice(0, filename.indexOf('.'))
    }
  })

  return {
    props: {
      products
    }
  }

}

export default Products;