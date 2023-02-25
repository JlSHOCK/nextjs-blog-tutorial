import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import Layout from '../../components/Layout'

const Products = ({ products }) => {
  return (
    <Layout
      pageClass="product"
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
                  {
                    product.company &&
                    <p className={'product-company size-p-xs weight-400'}>{product.company}</p>
                  }
                  <h3 className={'product-name size-p-l weight-700'}>{product.name}</h3>
                  {/* {
                    product.link &&
                    <button className={`product-cta-btn size-p-m weight-800`}>
                      Buy Now
                    </button>
                  } */}
                </div>
                {
                  product.category &&
                  <div className={'product-categories'}>
                    {
                      product.category.map(catgry => (
                        <p key={catgry} className={'product-category weight-700'}>{catgry}</p>
                      ))}
                  </div>
                }
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