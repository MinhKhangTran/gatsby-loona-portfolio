import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SingleMember from "./SingleMember"
import { Link } from "gatsby"

const memberquery = graphql`
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

const Member = () => {
  const data = useStaticQuery(memberquery)
  const {
    allStrapiJobs: { nodes: members },
  } = data

  return (
    <section className="bg-gray-200 py-4 md:py-8">
      <h1 className="text-center text-2xl md:text-3xl text-gray-600 mb-4">
        Members
      </h1>
      <article className="bg-gray-200 w-11/12 md:w-2/3 mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {members.map(member => {
          return <SingleMember key={member.strapiId} {...member} />
        })}
      </article>
      <div className="flex justify-center mt-8">
        <Link
          className="border-4 border-gray-700 px-3 text-xl rounded-full hover:bg-gray-700 hover:text-gray-100 transition transition-all duration-300 ease-in-out"
          to="/members"
        >
          Read More
        </Link>
      </div>
    </section>
  )
}

export default Member
