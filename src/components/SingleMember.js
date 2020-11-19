import React from "react"
import Image from "gatsby-image"
import styled from "styled-components"

const SingleMember = ({ image, name, position }) => {
  return (
    <Wrapper>
      <div className="overflow-hidden relative bild">
        <Image className="rounded-lg" fluid={image.childImageSharp.fluid} />
        <footer className="rounded-b-lg opacity-70 beschreibung absolute p-2 bottom-0 left-0 right-0 bg-gray-300 text-gray-700 font-mono transform translate-y-full transition transition-all duration-700 ease-in-out">
          <h1>{name}</h1>
          <h1>{position}</h1>
        </footer>
      </div>
    </Wrapper>
  )
}

export default SingleMember

const Wrapper = styled.div`
  .gatsby-image-wrapper img {
    filter: grayscale(75%);
  }
  .bild > * {
    transition: all 0.5s ease-out;
  }
  .bild:hover .beschreibung {
    transform: translateY(0);
  }
  img {
    transition: filter 1s ease-out;
    /* transition: transform 1s ease-out; */
  }
  img:hover {
    filter: grayscale(0);
    /* transform: scale(1.1); */
  }
`
