import React from "react"
import Hero from "../components/Hero"
import Member from "../components/Member"
import Album from "../components/Album"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" description="this is the homepage" />
      <Hero />
      <Member />
      <Album />
    </Layout>
  )
}
