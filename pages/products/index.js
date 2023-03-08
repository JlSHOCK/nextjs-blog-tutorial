import React from "react";
import Layout from '../../components/Layout'
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import styles from './products.module.scss';

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
          <ul className={`${styles.products}`}>
            {products.map(product => (
              product.name !== undefined &&
              <li key={product.slug} className={`${styles.product}`}>
                <Link href={`${product.link}`}>
                  <a className={`${styles.product_link}`} target="_blank" rel="noopener noreferrer"></a>
                </Link>
                <div className={`${styles.product_img_container}`}>
                  <img src={product.image ? product.image : "/images/placeholder-product.png"} alt={product.name} className={`${styles.product_img}`} />
                </div>
                <div className={`${styles.product_content}`}>
                  {
                    product.company &&
                    <p className={`${styles.product_company} size-p-xs weight-400`}>{product.company}</p>
                  }
                  <h3 className={`${styles.product_name} size-p-l weight-700`}>{product.name}</h3>
                  {/* {
                    product.link &&
                    <button className={`${styles.product_cta_btn} size-p-m weight-800`}>
                      Buy Now
                    </button>
                  } */}
                </div>
                {
                  product.category &&
                  <div className={`${styles.product_categories}`}>
                    {
                      product.category.map(catgry => (
                        <p key={`${catgry}`} className={`${styles.product_category} weight-700`}>{catgry}</p>
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