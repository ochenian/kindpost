import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Showcase = () => {
  const data = useStaticQuery(graphql`
    query PostcardQuery {
      postcardSampleImg: file(relativePath: { eq: "Sample.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 2000, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardEncouragementImg: file(
        relativePath: { eq: "Encouragement.jpg" }
      ) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <React.Fragment>
      <div className="showcase">
        <Img
          className="showcase-image"
          fluid={data.postcardSampleImg.childImageSharp.fluid}
        />
        {/* <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50"/>
        </svg> */}
        <div className="showcase-copy">
          <div>Vintage</div>
          <div>Kindness</div>
        </div>
      </div>
      <div className="showcase">
        <div className="showcase-copy">
          <div>Handwritten</div>
          <div>Positivity</div>
        </div>
        <Img
          className="showcase-image"
          fluid={data.postcardEncouragementImg.childImageSharp.fluid}
        />
      </div>
    </React.Fragment>
  );
};

export default Showcase;
