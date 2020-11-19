import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"

const ComponentName = ({ data }) => {
  const { content, title } = data.albums
  return (
    <Layout>
      <SEO title={title} description="Album" />
      <div className="w-11/12 md:w-2/3 mx-auto mt-8">
        <ReactMarkdown>{content}</ReactMarkdown>
        <div className="flex justify-center my-8">
          <Link
            className="border-4 border-gray-700 px-3 text-xl rounded-full hover:bg-gray-700 hover:text-gray-100 transition transition-all duration-300 ease-in-out"
            to="/album"
          >
            Back to the albums
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleAlbum($slug: String) {
    albums: strapiAlbums(slug: { eq: $slug }) {
      content
      date
      title
    }
  }
`

export default ComponentName
