import React from "react";
import { graphql } from "gatsby";
import { StickyContainer, Sticky } from 'react-sticky';

import Banner from "../components/banner";
import Menu from "../components/menu";
import DescriptionCourse from '../components/course-template/descriptionCourse'
import MenuCourse from '../components/course-template/menuCourse'
import CourseStructure from "../components/course-template/courseStructure";
import DownloadPdf from "../components/downloadPdf";
import TrainerCourse from "../components/course-template/trainnerCourse";
import SkillsVertical from "../components/skillsVertical";
import TecnologiesRow from '../components/technologies'
import PriceFinancing from '../components/priceFinancing'
import StudentGraduate from "../components/studentGraduate";
import FormSubscribe from "../components/formSubscribe";
import Footer from "../components/footer";
import IconTech from "../components/iconTechnologies/iconTech";


export default ({ data }) => {
  const menuStructure = data.coursesYaml.description;
  const courseStructure = data.coursesYaml.course_structure;
  const banner = data.coursesYaml.banner;
  const training = data.coursesYaml.training;
  const skills = data.coursesYaml.skills;
  const pricing = data.coursesYaml.pricing;
  return (
    <div>
      <Menu>
        <Banner
          headerText={banner.headertext}
          title={banner.title}
          time={banner.time}
          textBtnLeft="Apply Now"
          linkBtnLeft=""
          textBtnRight="Request Syllabus"
          linkBtnRight=""
        />
      </Menu>
      <DescriptionCourse data={menuStructure}/>
      <StickyContainer>
        <Sticky bottomOffset={800}>{({ style}) => 
        <div className="menu" style={style}>
            <ul>
              <li>Hola</li>
            </ul>
            <button className="btn btn-red">
                Apply Now
            </button>
        </div>
        }</Sticky>
      <MenuCourse data={menuStructure}/>
      </StickyContainer>
      <CourseStructure data={courseStructure}/>
      <DownloadPdf title="Download our syllabus PDF to get all the details"/>
      <TrainerCourse data={training}/>
      <SkillsVertical data={skills}/>
      <TecnologiesRow 
        title="Learn and advanced stack of technologies to meet the demands that companies seek.">
        <div className="col-1">
          <IconTech icon="javascript" />
        </div>
        <div className="col-1">
          <IconTech icon="python" />
        </div>
        <div className="col-1">
          <IconTech icon="react" />
        </div>
        <div className="col-1">
          <IconTech icon="git" />
        </div>
        <div className="col-1">
          <IconTech icon="db" />
        </div>
        <div className="col-1">
          <IconTech icon="tech1" />
        </div>
        <div className="col-1">
          <IconTech icon="babel" />
        </div>
        <div className="col-1">
          <IconTech icon="sass" />
        </div>
      </TecnologiesRow>
      <PriceFinancing
        data={pricing}
        btnApply={true}
        btnLink=""
        btnFinancing={true}
        btnFinancingLink=""
      />
      <StudentGraduate/>
      <FormSubscribe />
      <Footer />
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
        headertext
        title
        time
      }
      description {
        description
        time
        menu {
            title
            detail {
              title
              text
            }
        }
      }
      course_structure{
        menu_structure{
          title
          detail{
            title
          }
        }
      }
      training{
        title
        subtitle
        description{
          trainer
          description
          img{
            childImageSharp {
              fluid(maxWidth: 350) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      skills{
        titleTechnology
        subtitle
        description{
          title
          description
          icon{
            childImageSharp {
              fluid(maxWidth: 350) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      pricing{
        description
        price
        description_price
        extend_plan
        extend_plan_description
        per_month{
          duration
          title_description_extended
          description_extensed
        }
      }
    }
  }
`;
