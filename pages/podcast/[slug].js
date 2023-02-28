import fs from 'fs'
import ReactMarkdown from 'react-markdown'
import matter from 'gray-matter'
import Layout from '../../components/Layout'

const Episode = ({ frontmatter, markdown }) => {
	return (
		<Layout
			pageClass="episode"
			title={frontmatter.title}
			description=""
		>
			<section>
				<div className={`container`}>
					<h1 className={`blog-title size-h-xxl weight-600`}>{frontmatter.title}</h1>
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
	const fileContent = matter(fs.readFileSync(`./content/podcast/${slug}.md`, 'utf8'))
	let frontmatter = fileContent.data
	const markdown = fileContent.content

	return {
		props: { frontmatter, markdown }
	}
}

export async function getStaticPaths() {
	const filesInProjects = fs.readdirSync('./content/podcast')

	const paths = filesInProjects.map(file => {
		const filename = file.slice(0, file.indexOf('.'))
		return { params: { slug: filename } }
	})

	return {
		paths,
		fallback: false
	}
}

export default Episode;