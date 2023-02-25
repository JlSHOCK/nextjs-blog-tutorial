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
          <ul className={'products'}>
            {products.map(product => (
              product.name !== undefined &&
              <li key={product.slug} className={'product'}>
                <Link href={`${product.link}`}>
                  <a className={'product-link'} target="_blank"></a>
                </Link>
                <div className={'product-img-container'}>
                  <img src={product.image ? product.image : "/images/placeholder-product.png"} alt={product.name} className={`product-img`} />
                </div>
                <div className={'product-content'}>
                  <h3 className={'product-name size-p-l weight-600'}>{product.name}</h3>
                  {
                    product.company &&
                    <p className={'product-company size-p-m weight-300'}>{product.company}</p>
                  }
                  {
                    product.category &&
                    <div className={'product-categories'}>
                      <p className={'product-category weight-800'}>{product.category}</p>
                    </div>
                  }
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout >
  );
}

export async function getStaticProps() {
  const filesInProducts = fs.readdirSync('./content/products')

  const products = filesInProducts.map(filename => {
    const file = fs.readFileSync(`./content/products/${filename}`, 'utf8')
    const matterData = matter(file)

    return {
      ...matterData.data,
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