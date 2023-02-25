import fs from 'fs'
import ReactMarkdown from 'react-markdown'
import matter from 'gray-matter'
import Layout from '../../components/Layout'

const Article = ({ frontmatter, markdown }) => {
	return (
		<Layout
			pageClass="article"
			title={frontmatter.title}
			description=""
		>
			<section>
				<div className={`container`}>
					<h1 className={`blog-title size-h-xxl`}>{frontmatter.title}</h1>
					<p className={'blog-date size-p-l weight-400'}>{frontmatter.date}</p>
					<hr />
					<div className={`blog-content`}>
						<ReactMarkdown>
							{markdown}
						</ReactMarkdown>
					</div>
				</div>
			</section>
		</Layout >
	);
}

export async function getStaticProps({ params: { slug } }) {
	const fileContent = matter(fs.readFileSync(`./content/blogs/${slug}.md`, 'utf8'))
	let frontmatter = fileContent.data
	const markdown = fileContent.content

	return {
		props: { frontmatter, markdown }
	}
}

export async function getStaticPaths() {
	const filesInProjects = fs.readdirSync('./content/blogs')

	// Getting the filenames excluding .md extension
	// and returning an array containing slug (the filename) as params for every route
	// It looks like this
	// paths = [
	//		{ params: { slug: 'my-first-blog' }},
	//		{ params: { slug: 'how-to-train-a-dragon' }},
	//		{ params: { slug: 'how-to-catch-a-pokemon' }},
	// ]
	const paths = filesInProjects.map(file => {
		const filename = file.slice(0, file.indexOf('.'))
		return { params: { slug: filename } }
	})

	return {
		paths,
		fallback: false // This shows a 404 page if the page is not found
	}
}

export default Article;