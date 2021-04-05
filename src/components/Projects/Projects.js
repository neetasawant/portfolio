import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import reviews_slider_1 from "../../Assets/Projects/reviews_slider.png";
import reviews_slider_2 from "../../Assets/Projects/reviews_slider_2.png";
import lorem_generator from "../../Assets/Projects/lorem_generator.png";
import tour_cards from "../../Assets/Projects/tour_cards.png";
import menu from "../../Assets/Projects/menu.png";
import birthday_reminder from "../../Assets/Projects/birthday_reminder.png";
import accordion from "../../Assets/Projects/accordion.png";
import tabs from "../../Assets/Projects/tabs.png";
import user_list from "../../Assets/Projects/user_list.png";
import random_quote from "../../Assets/Projects/random_quote.png";
import youtube_ffmpeg from "../../Assets/Projects/youtube_ffmpeg.png";
import google_login from "../../Assets/Projects/google_login.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few React projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reviews_slider_2}
              isBlog={false}
              title="Review Slider"
              description=""
              link="https://github.com/neetasawant/reviews"
              demolink="https://nifty-einstein-07b65f.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reviews_slider_1}
              isBlog={false}
              title="Review Slider"
              description=""
              link="https://github.com/neetasawant/slider"
              demolink="https://happy-swartz-b854d1.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lorem_generator}
              isBlog={false}
              title="Lorem Generator"
              description=""
              link="https://github.com/neetasawant/lorem-ipsum-generator"
              demolink="https://xenodochial-gates-0a04dd.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tour_cards}
              isBlog={false}
              title="Tours List"
              description=""
              link="https://github.com/neetasawant/tours-list"
              demolink="https://compassionate-fermi-ee953e.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={menu}
              isBlog={false}
              title="Restaurant Menu"
              description=""
              link="https://github.com/neetasawant/restaurant-menu"
              demolink="https://restaurant-menu-0547c3.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={birthday_reminder}
              isBlog={false}
              title="Birthday Reminder"
              description=""
              link="https://github.com/neetasawant/birthday-reminder"
              demolink="https://stoic-brattain-191c75.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={accordion}
              isBlog={false}
              title="FAQ using accordion"
              description=""
              link="https://github.com/neetasawant/accordion-project"
              demolink="https://accordion-question-answer-717540.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tabs}
              isBlog={false}
              title="Portfolio"
              description=""
              link="https://github.com/neetasawant/tabs"
              demolink="https://quizzical-lewin-74da9f.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={user_list}
              isBlog={false}
              title="User Activity List"
              description=""
              link="https://github.com/neetasawant/user-list"
              demolink="https://nifty-nobel-5d7c04.netlify.app/"
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my blogs</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={random_quote}
              link="https://taptech.site/2020/08/18/build-a-random-quote-machine-freecodecamp/"
              title="Random Quote Generator using React"
              site=""
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={youtube_ffmpeg}
              link="https://taptech.site/2020/08/18/how-to-stream-mp4-video-to-youtube-using-node-js/"
              title="Stream mp4 video to youtube using node js"
              site=""
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={google_login}
              link="https://taptech.site/2020/08/18/how-to-use-google-login-api-in-angular-app/"
              title="Google login using api in Angular"
              site=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
