import React, { forwardRef, useRef, useImperativeHandle } from "react"
import { Container } from './styled';
import { TypeParagraph, TypeParagraphSizes } from '../../common/typography/TypeParagraph';

const ContactPage = forwardRef((props: any, ref) => {

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
      >Contact Page</TypeParagraph>
    </Container>
  )
})

export default ContactPage;



