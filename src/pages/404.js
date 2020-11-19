import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <SEO title="Error" description="Error" />
      <section className="bg-gray-200 h-full text-xl">
        <h1>Sorry this is a Dead end</h1>
        <Link to="/">Back to the homepage</Link>
      </section>
    </Layout>
  )
}

export default Error
