import React, { forwardRef, useRef, useImperativeHandle } from "react"
import { TypeParagraph, TypeParagraphSizes } from '../../common/typography/TypeParagraph';

const AboutPage = forwardRef((props, ref) => {

  useImperativeHandle(ref, () => ({
    transitionIn(req, done) {
      console.log('transitionIn about');
      done();
    },
    transitionOut(req, done) {
      console.log('transitionOut about');
      done();
    }

  }));

  return (
    <>
      <TypeParagraph
        size={TypeParagraphSizes.XL}
      >About Page</TypeParagraph>
    </>
  )
})

export default AboutPage;
