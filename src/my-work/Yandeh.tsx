import './work.scss'

import project_yandeh01 from '../public/Yandeh/project_yandeh01.png'
import project_yandeh02 from '../public/Yandeh/project_yandeh02.png'
import project_yandeh03 from '../public/Yandeh/project_yandeh03.png'
import project_yandeh04 from '../public/Yandeh/project_yandeh04.png'
import ArrowBack from '../ArrowBack'

export const Yandeh = () => (
  <div className='work'>
    <header>
      <h1>Yandeh</h1>
      <h2>Design System</h2>
      <p>My role: Product Designer</p>
      <p>Responsibilities: Style guide, mid and high fidelity prototypes.</p>
    </header>
    <main className='margin-bottom'>
      <h4>About</h4>
      <p className='margin-bottom'>Yandeh is a B2B model company that focuses on the improvement of the relationship between retails and providers. I worked as a freelance contractor to help them to create a better e-commerce platform for their users, building a complex Design System that should work with all their products, to standardize and improve the development work.</p>
      <h4>Planning</h4>
      <p className='margin-bottom'>To start a develop a design system I had to know all products, applications and dashboards were being used (internal and external). With this data in hands, I created a list of all possible components would be necessary for this library to supply the demand. My steps were:</p>
      <ol className='green-list'>
        <li><p>List all existent components</p></li>
        <li><p>Research on other Design Systems</p></li>
        <li><p>Discuss components with the team</p></li>
        <li><p>Create components</p></li>
        <li><p>Implement</p></li>
      </ol>
      <div className='margin-bottom' />
      <h4>Design</h4>
      <p className='margin-bottom'>To create a concise Design System, I based all the components on the Branding color, typography, shapes and spaces.</p>
    </main>
      <a href={project_yandeh01} target="_blank"><img src={project_yandeh01} /></a>
      <h4  style={{ padding: "15px 25px" }}>Implemented library</h4>
    <div className='images centered'>
      <ul>
      <a href={project_yandeh02} target="_blank"><img src={project_yandeh02} /></a>
        <li><a href={project_yandeh03} target="_blank"><img src={project_yandeh03} /></a></li>
        <li><a href={project_yandeh04} target="_blank"><img src={project_yandeh04} /></a></li>
      </ul>
    </div>
    <ArrowBack />
  </div>
)

export default Yandeh