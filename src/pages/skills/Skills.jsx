import React from 'react';
import './skills.css';
import Title from '../../components/title/Title';

const Skills = () => {
  return (
    <section id='projects'>
        <Title title_name='Skills & Projects'/>
        <article className='project-article'>

        <div className="project-container proj-one">

        <div className="one-left">
        <h2 className='projects-title'>E-Commerce Web-Application</h2>
        <p className='projects-p'>Built and styled modern E-Commerce Web-Application using React.js.
        The application mimics real world E-Commerce websites in its look and feel and provides a fresh
        user friendly experience.
        </p>
        </div>

        <div className='one-right'>
            <div className="img-one"></div>
        </div>

        </div>

        <div className="project-container">
        <div className='one-right'>
            <div className="img-two"></div>
        </div>

        <div className="one-left">
            <h2 className='projects-title'>Business Dashboard Web-Application</h2>
            <p className='projects-p'>Using advanced technologies, such as React.js, Material UI, and
             public API's, I single handedly created a fully functional front end, mock, reusable
              dashboard that could theoretically be integrated wtih companies and businesses around 
              the world.</p>
        </div>
        </div>

        <div className="three-container proj-three">
            <div className="three-right">
                <h2 className='projects-title'>Real World Login Page</h2>
                <p className='projects-p'>
                In order to be considered a well-rounded front end developer in todays market, one must be able to
                 create, and recreate widely used web pages that serve a functional purpose. Although the thought
                 might not be as fancy as we would like to hope, projects such as this one are fundemental for many
                 real world projects.
                </p>
            </div>
            <div className="three-left">
                <div className="img-three"></div>
            </div>
        </div>


        </article>
    </section>
  )
}

export default Skills;