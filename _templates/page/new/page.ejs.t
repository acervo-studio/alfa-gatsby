---
to: src/pages/<%= h.inflection.camelize(name, true) %>.tsx
---

import React from "react"
import { PageProps } from "gatsby"
import Layout from "../components/Layout"
import Navigation from '../navigation'

export default function <%= h.inflection.capitalize(name) %>Route(props: PageProps) {
  return (
    <>
      <Layout>
        <Navigation></Navigation>
      </Layout>
    </>
  )
}



