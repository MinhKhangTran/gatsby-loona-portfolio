import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FaBars } from "react-icons/fa"
import { Link } from "gatsby"

const Navquery = graphql`
  {
    allStrapiLinks {
      nodes {
        url
        text
        strapiId
      }
    }
  }
`

const Navbar = ({ navToggle, toggle }) => {
  const {
    allStrapiLinks: { nodes: links },
  } = useStaticQuery(Navquery)
  // console.log(links)
  return (
    <nav className="bg-gray-800">
      <div className="w-11/12 bg-gray-800 md:w-2/3 mx-auto md:flex md:items-center md:justify-center p-2 overflow-hidden">
        <div className="flex justify-between items-center text-xl text-gray-100 md:w-1/2">
          <Link to="/" className="text-3xl h-16 flex items-center">
            LOOΠΔ
          </Link>
          <button onClick={navToggle} className="md:hidden text-2xl">
            <FaBars />
          </button>
        </div>
        <div
          className={`${
            toggle
              ? "h-auto transition transition-all duration-700 ease-in-out md:flex flex flex-col items-start md:flex-row md:h-16 md:w-3/4 md:items-center md:justify-between"
              : "h-0 transition transition-all duration-700 ease-in-out md:flex flex flex-col items-start md:flex-row md:h-16 md:w-3/4 md:items-center md:justify-between"
          }`}
        >
          {links.map(link => {
            return (
              <button
                className="inline-block mt-6 mb-2 md:mt-0 md:mb-0 text-gray-800 tracking-wider bg-gray-100 rounded-full px-3 py-1 hover:bg-gray-600 transition transition-all duration-300 ease-in-out"
                key={link.strapiId}
              >
                <Link to={link.url}>{link.text}</Link>
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
