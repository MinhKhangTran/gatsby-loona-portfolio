import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SingleAlbum from "./SingleAlbum"
import { Link } from "gatsby"

const albumQuery = graphql`
  {
    allStrapiAlbums(sort: { fields: date, order: DESC }, limit: 3) {
      nodes {
        strapiId
        slug
        title
        date(formatString: "MMM Do, YYYY")
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const Album = () => {
  const {
    allStrapiAlbums: { nodes: albums },
  } = useStaticQuery(albumQuery)
  return (
    <section className="bg-gray-300 py-4 md:py-8">
      <h1 className="text-center text-2xl md:text-3xl text-gray-600 mb-4">
        Latest Albums
      </h1>

      <article className="grid grid-cols-1 md:grid-cols-3 w-11/12 md:w-2/3 mx-auto gap-4">
        {albums.map(album => {
          return <SingleAlbum key={album.strapiId} {...album} />
        })}
      </article>
      <div className="flex justify-center mt-8">
        <Link
          className="border-4 border-gray-700 px-3 text-xl rounded-full hover:bg-gray-700 hover:text-gray-100 transition transition-all duration-300 ease-in-out"
          to="/album"
        >
          Read More
        </Link>
      </div>
    </section>
  )
}

export default Album
