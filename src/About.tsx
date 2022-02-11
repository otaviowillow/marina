import imgMarina from './public/marina.png'
import resume from './public/MarinaBraholka_resume.pdf';


import './about.scss'

const About = () => {
  return (
    <>
      <div className="about">
        <h1>Hello,</h1>
        <div className='content'>
          <main>
            <p>My name is Marina Braholka, I am a Product Designer based in Vancouver, Canada. I graduated in 2014 in Graphic Design at the Federal University of Technology of Parana, Brazil. I was working, since 2011, in advertising agencies and mid-size companies, I was unsatisfied about it because I believe I couldn’t improve working with offline media and I think it was too boring. </p>
            <p>After changing my career to UX/UI design back in 2017, I have been working with digital agencies, software companies, improving and creating from scratch awesome digital products. </p>
            <p>I am highly skilled in creating user flows, user journeys, architecture information, personas, wireframes, prototypes and style guides, I also have a brief experience working with Lighting Design System from Salesforce. My toolset includes Miro, Adobe XD, Figma, Adobe Photoshop, Adobe Illustrator, Adobe InDesign, Adobe Lightroom, Invision App, Marvel App, UXPIN, Axure RP, and proto.io.In my free time I love illustrating for fun (you can see some of them on my Dribbble account).</p>
          </main>
          <figure>
            <img src={imgMarina} />
          </figure>
        </div>
        <h4><a href={resume}>See Resume</a></h4>
      </div>
    </>
  )
}

export default About