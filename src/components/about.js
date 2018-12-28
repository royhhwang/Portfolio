import React from 'react'
import Resume from '../static/docs/resume.pdf'

const About = () => (
  <section className="padding-bottom-6" id="about">
    <h2 className="section-header">About</h2>
      <div className="about__content">
        <section className="about__bio">
          <p>
            I’m a <strong>frontend developer</strong> specializing in <strong>Javascript</strong> and the <strong>MERN</strong> stack.
            A gamer at heart, I bring experience in game programming and design to solve problems with imaginative, out-of-the-box solutions.
          </p>
          <p class="divider">
            In a past life, I worked as a <strong>jack-of-all-trades</strong> sales associate managing direct relationships with 120+ companies in the LA region, including Nobu, Matsuhisa, and the Marriott Hotel.
          </p>
          <p>
            I'm <strong>currently seeking</strong> a junior-level frontend role for a software service I can believe in. Happy to relocate for my next adventure.
          </p>
          <aside className="about__contact">
            <p className="button">Contact:</p>
            <a className="button button--social" href="mailto:royhhwang@gmail.com" target="_blank" rel="noopener noreferrer">
              Email
            </a>
            <a className="button button--social" href="https://www.linkedin.com/in/royhhwang/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a className="button button--social" href="https://github.com/royhhwang" target="_blank" rel="noopener noreferrer">
              Github
            </a>
            <a className="button button--social" href="https://codepen.io/royhhwang/pens/public/#" target="_blank" rel="noopener noreferrer">
              Codepen
            </a>
          </aside>
        </section>
        <aside className="about__experience">
          <ul>
            <li class="padding-bottom-2">
              <h3 className="about__subheading">Freelance Web Developer</h3>
              <p className="color-light-gray">Oct 2018 - Present</p>
              <p>Current projects include custom Wordpress theme creation and an accessibility audit.</p>
            </li>
            <li>
              <h3 className="about__subheading">The Coding Boot Camp, University of CA Irvine</h3>
              <p className="color-light-gray">Oct 2017 - Jan 2018</p>
            </li>
          </ul>
          <h3 className="about__subheading padding-top-2">
            Frontend Development
          </h3>
          <ul>
            <li>JavaScript ES5 / ES6</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Sass</li>
            <li>React</li>
            <li>Gatsby</li>
            <li>Wordpress</li>
          </ul>
          <a href={ Resume } className="button button--contact" target="_blank" rel="noopener noreferrer">
            View Resume
          </a>
        </aside>
      </div>
  </section >
)

export default About
