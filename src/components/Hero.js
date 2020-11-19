import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import hero from "../assets/hero.jpg"

const heroquery = graphql`
  {
    allStrapiHero {
      nodes {
        title
        desc {
          id
          name
        }
      }
    }
  }
`
const Hero = () => {
  const data = useStaticQuery(heroquery)
  const {
    allStrapiHero: { nodes },
  } = data
  //   console.log(nodes)
  return (
    <div
      className="bg-gray-100 flex flex-col md:flex-none"
      style={{ height: "calc(100vh - 80px)" }}
    >
      <div className="md:hidden grid justify-items-center content-center h-full text-gray-700 font-semibold text-xl">
        <h1>{nodes[0].title}</h1>
        <h2>{nodes[0].desc[0].name}</h2>
      </div>
      <img
        className="h-full w-screen  md:block object-cover"
        src={hero}
        alt="loona-hero"
      />
    </div>
  )
}

export default Hero
