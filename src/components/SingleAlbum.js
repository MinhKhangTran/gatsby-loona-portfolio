import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"

const SingleAlbum = ({ slug, image, title, date }) => {
  return (
    <Link to={`/album/${slug}`}>
      <div className="bg-blue-100 rounded-lg overflow-hidden hover:shadow-lg cursor-pointer">
        <div className="text-center">
          <h1 className="text-xl font-semibold">{title}</h1>
          <h1>{date}</h1>
        </div>
        <div>
          <Image fluid={image.childImageSharp.fluid} />
        </div>
      </div>
    </Link>
  )
}

export default SingleAlbum
