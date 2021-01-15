---
to: src/components/pages/<%= h.inflection.camelize(name, true) %>/<%= h.capitalize(name) %>Page.tsx
---

import React, { forwardRef, useRef, useImperativeHandle } from "react"
import { Container } from './styled';
import { TypeParagraph, TypeParagraphSizes } from '../../common/typography/TypeParagraph';

const <%= h.capitalize(name) %>Page = forwardRef((props: any, ref) => {

  useImperativeHandle(ref, () => ({
    transitionIn(req, done) {
      done();
    },
    transitionOut(req, done) {
      done();
    }
  }));

  return (
    <Container className={props.className}>
      <TypeParagraph
        size={TypeParagraphSizes.XL}
      ><%= h.capitalize(name) %> Page</TypeParagraph>
    </Container>
  )
})

export default <%= h.capitalize(name) %>Page;



