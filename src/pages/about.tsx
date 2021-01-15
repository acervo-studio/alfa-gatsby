import React from "react"
import { PageProps } from "gatsby"
import Layout from "../components/Layout"
import Navigation from '../navigation'

export default function AboutRoute(props: PageProps) {
  return (
    <>
      <Layout>
        <Navigation></Navigation>
        <p>{props.path}</p>
      </Layout>
    </>
  )
}
