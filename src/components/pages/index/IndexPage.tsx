import React, { forwardRef, useRef, useImperativeHandle } from "react"
import { TypeParagraph, TypeParagraphSizes } from '../../common/typography/TypeParagraph';

const IndexPage = forwardRef((props, ref) => {

  useImperativeHandle(ref, () => ({
    transitionIn(req, done) {
      console.log('transitionIn index');
      done();
    },
    transitionOut(req, done) {
      console.log('transitionOut index');
      done();
    }

  }));

  return (
    <>
      <TypeParagraph
        size={TypeParagraphSizes.XL}
      >Index Page</TypeParagraph>
    </>
  )
})

export default IndexPage;
