import { graphql } from "gatsby";
import React from "react";

import Blocktech from "../img/event/blocktech.png";
import Airbnb from "../img/airbnb.png";
import Instagram from "../img/instagram.png";
import Slack from "../img/slack.png";
import Icon7 from "../img/icon7.png";

import Banner from "../components/banner";
import Menu from "../components/menu";
import RowEvent from "../components/rowEvent";
import Goals from "../components/goals";
import Skills from "../components/skillsRow";
import TecnologiesRow from "../components/technologies";
import LearningTechnologies from "../components/learnTechnologies";
import DownloadPdf from "../components/downloadPdf";
import StudentGraduate from "../components/studentGraduate";
import FormSubscribe from "../components/formSubscribe";
import Footer from "../components/footer";

import "../sass/index.scss";

const BlogIndex = ({ data, location }) => {
  return (
    <div>
      <Menu>
        <Banner
          title="&#60;Time to Code&#62;"
          subtitle="Learn coding skills that change you life"
          description="Learn to code and join than 500 graduates already working as coders. Get career support for life and a become a part of one of the biggest communities in the world"
          headerText="4Geeks Academy Miami Coding"
          textBtnLeft="Apply Now"
          linkBtnLeft=""
          textBtnRight="Request Syllabus"
          linkBtnRight=""
        />
      </Menu>
      <RowEvent date="Our next cohort starts on December 3, 2018" />
      <Goals title="6 Goals to change your life" />
      <Skills
        title="Gamified and focused on skills with modern technologies"
        subtitle="Complete challenges, projects and quizzes to gain all the skills from our Talent Tree"
      />
      <TecnologiesRow title="Learn and advanced stack of technologies to meet the demands that companies seek." />
      <LearningTechnologies />
      <DownloadPdf title="Download our syllabus PDF to get all the details" />

      <div className="row justify-content-center full-width event-4geeks">
        <div className="col-9 title-event-4geeks">
          <h2>Get immersed in Miami's</h2>
          <h2>Code Ecosystem</h2>
          <p>
            4Geeks Academy and our students actively participe in Miami's top
            coding initiatives.
          </p>
          <div className="flex-event">
            <div className="col-3 text-center">
              <img className="img-event" src={Blocktech} />
            </div>
            <div className="col-3 text-center">
              <img className="img-event" src={Blocktech} />
            </div>
            <div className="col-3 text-center">
              <img className="img-event" src={Blocktech} />
            </div>
            <div className="col-3 text-center">
              <img className="img-event" src={Blocktech} />
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center full-width event-4geeks">
        <div className="col-9 title-event-4geeks">
          <h2>Ace any job interview or code for yourself</h2>
          <p>
            As a student, you will develop real-life project similar to the most
            popular websites out there:
          </p>
          <div className="flex-event">
            <div className="col-3 text-center">
              <img className="img-event" src={Airbnb} />
              <div className="pto" />
            </div>
            <div className="col-3 text-center">
              <img className="img-event" src={Instagram} />
            </div>
            <div className="col-3 text-center">
              <img className="img-event" src={Slack} />
            </div>
            <div className="col-3 text-center">
              <img className="img-event" src={Icon7} />
            </div>
            <div className="col-12 line-project" />
          </div>
        </div>
      </div>

      <div className="row justify-content-center full-width event-4geeks">
        <div className="col-9 title-event-4geeks">
          <p>
            Become prepared with all the desired skills and tools that our
            network of hiring partners is cravina for:
          </p>
          <div className="flex-event">
            <div className="col-3 text-center">
              <img className="img-event" src={Airbnb} />
            </div>
            <div className="col-3 text-center">
              <img className="img-event" src={Instagram} />
            </div>
            <div className="col-3 text-center">
              <img className="img-event" src={Slack} />
            </div>
            <div className="col-3 text-center">
              <img className="img-event" src={Icon7} />
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center full-width pricing-4geeks">
        <div className="col-9 title-pricing-4geeks">
          <h2>Pricing & Fricing</h2>
          <div className="col-12 no-padding section-price">
            <h3>Pay Up-Front $6000</h3>
            <div className="flex-pricing pb-4 pt-1">
              <div className="col-3 no-padding">
                <div className="line align-middle" />
              </div>
              <div className="col-1">
                <p className="text-center text">Or</p>
              </div>
              <div className="col-8 no-padding">
                <div className="line align-middle" />
              </div>
            </div>
            <h3 className="no-margin pb-3">Extended Plan From $135/month</h3>
            <p>*Learn more about our payment plans</p>
          </div>
          <div className="col-12 no-padding section-price-description">
            <p className="no-margin">
              This was the most challenging part... our program was designed
              from the ground up aiming to make coding education universal.
            </p>
            <button className="btn btn-red mt-5">Apply to the program</button>
          </div>
        </div>
      </div>

      <StudentGraduate />
      <FormSubscribe />
      <Footer />
    </div>
  );
};

export default BlogIndex;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
