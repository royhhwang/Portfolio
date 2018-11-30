import React from 'react'
import Resume from '../static/docs/resume.pdf'
import Background from '../images/banner-bg.jpg'
import Git from "../images/github.png"
import Link from "../images/linkedin.png"
import Gmail from "../images/gmail.png"

const About = () => (
  <section className="about wrapper" id="about">
    <h1 className="section__header">About</h1>
    <article className="about__wrapper">
      <div className="about__wrapper__bio">
        <section className="about__wrapper__para">
          <p>
            I’m a <strong>full stack developer</strong> specializing in <strong>Javascript</strong> and the <strong>MERN</strong> stack.
            A gamer at heart, I bring experience in game programming and design to solve problems with imaginative, out-of-the-box solutions.
          <br />
            <br />
            In a past life, I worked as a <strong>jack-of-all-trades</strong> sales associate managing direct relationships with 120+ companies in the LA region, including Nobu, Matsuhisa, and the Marriott Hotel.
          </p>
          <hr />
          <p>
            I'm <strong>currently seeking</strong> a junior-level fullstack or frontend role for a software service I can believe in. Happy to relocate for my next adventure.
          </p>
          <aside className="about__aside">
            <button className="about__aside__contact">
              <a href="https://github.com/royhhwang" target="_blank" rel="noopener noreferrer">
                <img src={Git} alt="link to roy's github" />
              </a>
            </button>
            <button className="about__aside__contact">
              <a href="https://www.linkedin.com/in/royhhwang/" target="_blank" rel="noopener noreferrer">
                <img src={Link} alt="link to roy's linkedin" />
              </a>
            </button>
            <button className="about__aside__contact">
              <a href="mailto:royhhwang@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src={Gmail} alt="write me an email" />
              </a>
            </button>
          </aside>
        </section>
        <div className="about__experience">
          <ul>
            <li>
              <h3 className="about__experience__institute">
                The Coding Boot Camp |  UCI
                </h3>
              <p className="about__experience__role">Student</p>
              <p className="about__experience__date">Oct 2017 - Jan 2018</p>
            </li>
          </ul>
          <ul className="about__toolkit">
            <li>
              <h3 className="about__toolkit__title">
                Fullstack Development
                </h3>
            </li>
            <li>JavaScript ES5 / ES6</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>React</li>
            <li>Wordpress</li>
            <li>MongoDB</li>
            <li>jQuery</li>
            <li>Sass</li>
            <li>Gatsby.js</li>
          </ul>
          <button className="button--contact" style={{ backgroundImage: "url(" + Background + ")" }}>
            <a href={Resume} className="button--contact__link" target="_blank" rel="noopener noreferrer">View Resume</a>
          </button>
        </div>
      </div>
    </article>
  </section >
)

export default About
