import React from "react";
import { graphql } from "gatsby";

import Banner from "../components/banner";
import Menu from "../components/menu";

export default ({ data }) => {
  console.log(data);
  const dataPage = data.coursesYaml;
  return (
    <div>
      <Menu>
        <Banner
          title="Become a Full-Stack Software Developer"
          subtitle="8 weeks (full-time)"
          textBtnLeft="Apply Now"
          linkBtnLeft=""
          textBtnRight="Request Syllabus"
          linkBtnRight=""
        />
      </Menu>
      <div className="col-12">
        Hello course
        <p>Info: {dataPage.info}</p>
      </div>
    </div>
  );
};

export const query = graphql`
  query($slug: String) {
    coursesYaml(basic_info: { slug: { eq: $slug } }) {
      info
      basic_info {
        slug
      }
      banner {
        subtitle
        title
        time
      }
      description {
        description
        time
        menu_program {
          program_detail {
            title
            detail {
              title
            }
          }
        }
      }
    }
  }
`;
