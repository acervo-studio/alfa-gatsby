import React from "react"
import { PageProps } from "gatsby"
import Layout from "../components/Layout"
import Navigation from '../navigation'

export default function ContactRoute(props: PageProps) {
  return (
    <>
      <Layout>
        <Navigation></Navigation>
      </Layout>
    </>
  )
}



