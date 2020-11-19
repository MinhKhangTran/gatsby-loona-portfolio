import React from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import SEO from "../components/SEO"

const Members = () => {
  const data = useStaticQuery(memberpagequery)
  const {
    allStrapiJobs: { nodes: members },
  } = data

  return (
    <Layout>
      <SEO title="Members" description="Members" />
      <section className="bg-gray-200">
        <div className="w-11/12 md:w-2/3 mx-auto pb-8 pt-4">
          <h1 className="text-center text-2xl md:text-3xl text-gray-600 mb-4">
            Members
          </h1>
          <article className="">
            {members.map(member => {
              return (
                <div
                  key={member.strapiId}
                  className="grid grid-cols-1 md:grid-cols-2 my-8"
                >
                  <div>
                    <Image
                      className="md:rounded-l-lg rounded-t-lg md:rounded-t-none"
                      fluid={member.image.childImageSharp.fluid}
                    />
                  </div>
                  <div className="bg-blue-100 h-full flex flex-col p-8 justify-center md:rounded-r-lg rounded-b-lg md:rounded-b-none">
                    <h1 className="text-xl text-gray-800 font-semibold mb-2">
                      {member.name}
                    </h1>
                    <h1 className="text-lg text-gray-700">{member.birthday}</h1>
                    <h1 className="text-lg text-gray-700">{member.position}</h1>
                    <h1 className="text-lg text-gray-700">Some facts:</h1>
                    <ul className=" text-gray-600">
                      {member.desc.map(item => {
                        return (
                          <li className="list-disc" key={item.id}>
                            {item.name}
                          </li>
                        )
                      })}
                    </ul>
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

const memberpagequery = graphql`
  {
    allStrapiJobs {
      nodes {
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        birthday
        desc {
          id
          name
        }
        name
        position
        strapiId
      }
    }
  }
`

export default Members
