import React from "react"
import Layout from "../components/Layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"
import { FaSearch } from "react-icons/fa"
import styled from "styled-components"
import SEO from "../components/SEO"

const albumPageQuery = graphql`
  {
    allStrapiAlbums {
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
  } = useStaticQuery(albumPageQuery)
  return (
    <Layout>
      <SEO title="Albums" description="Album" />
      <section className="bg-gray-200">
        <div className="w-11/12 md:w-2/3 mx-auto pb-8 pt-4">
          <h1 className="text-center text-2xl md:text-3xl text-gray-600 mb-4">
            Albums
          </h1>
          <article className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {albums.map(album => {
              return (
                <div className="album">
                  <ImageWrapper>
                    <div className="relative bild">
                      <Image
                        className="rounded-full "
                        fluid={album.image.childImageSharp.fluid}
                      />
                      <Link to={`/album/${album.slug}`}>
                        <button
                          className="button transition transition-all duration-300 ease-in-out absolute invisible bg-gray-700 text-gray-100 rounded-full h-8 w-8 flex justify-center items-center"
                          style={{
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%,-50%)",
                          }}
                        >
                          <FaSearch />
                        </button>
                      </Link>
                    </div>
                  </ImageWrapper>
                  <div className="text-center mt-2">
                    <h1>{album.title}</h1>
                    <h1>{album.date}</h1>
                  </div>
                </div>
              )
            })}
          </article>
        </div>
      </section>
    </Layout>
  )
}

const ImageWrapper = styled.div`
  .bild:hover .button {
    visibility: visible;
  }
`

export default Album
