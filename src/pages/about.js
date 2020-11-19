import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import hero from "../assets/hero.jpg"
import SEO from "../components/SEO"

const ComponentName = ({ data }) => {
  const { strapiMenuLinks: daten } = data

  return (
    <Layout>
      <SEO title="About" description="About" />
      <section className="bg-gray-300">
        <h1 className="text-center text-2xl md:text-3xl text-gray-600 py-4">
          About
        </h1>
        <div className="w-11/12 md:w-2/3 mx-auto py-4">
          <div>
            <img src={hero} alt={daten.name} />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-700 my-2">
              {daten.name}
            </h1>
            <p className="text-lg text-gray-600 tracking-wider my-2">
              {daten.desc}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    strapiMenuLinks {
      image {
        formats {
          medium {
            publicURL
          }
        }
      }
      desc
      strapiId
      name
    }
  }
`

export default ComponentName
