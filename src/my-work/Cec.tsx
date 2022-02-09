import ArrowBack from '../ArrowBack'
import project_Compost01 from '../public/compost/project_Compost01.png'
import project_Compost02 from '../public/compost/project_Compost02.png'
import project_Compost03 from '../public/compost/project_Compost03.png'
import project_Compost04 from '../public/compost/project_Compost04.png'
import project_Compost05 from '../public/compost/project_Compost05.png'
import project_Compost06 from '../public/compost/project_Compost06.png'
import project_Compost07 from '../public/compost/project_Compost07.jpg'

export const Yandeh = () => (
  <div className='work'>
    <header>
      <h1>Cec</h1>
      <h2>Website</h2>
      <p>My role: UX Designer</p>
      <p>Responsibilities of my team: UX Research (surveys and interviews), persona, user Journey, user flow, information architecture, wireframes, user testing, UI Research (gui test), mood board, style tile, style guide.</p>
    </header>
    <main>
      <h4>About</h4>
      <p className='margin-bottom'>Compost Education Centre is a non-profit organization with charitable status providing composting and ecological gardening education to residents of the Capital Regional District (CRD) and Greater Victoria, British Columbia. Our core funding is generously provided by the CRD and the City of Victoria.</p>
      <h4>Ux Research</h4>
      <p className='margin-bottom'>We started the project analyzing their Google Analytics account to understand who is accessing and how. With this data, we could define our priority as a type of devices, in this case, it was desktop (59,2%).</p>
      <h4>Interviews</h4>
      <p className='margin-bottom'>The next step was interviewing real users and people who are enthusiastic about this field.</p>
      <h5>Interview 01</h5>
      <ul className='margin-bottom'>
        <li><p>Anvit is an instructor on Red Academy</p></li>
        <li><p>Has been composting for 4 years</p></li>
        <li><p>Find community, read blogs and watch videos for instructions to begin</p></li>
        <li><p>Change shopping patterns to achieve zero waste</p></li>
      </ul>
      <h5>Interview 02</h5>
      <ul className='margin-bottom'>
        <li><p>Andy, Retired, Volunteer at CEC for 10 years</p></li>
        <li><p>Doesn’t use the website often</p></li>
        <li><p>Two age groups: Retired elderlies, and Mid 20s</p></li>
        <li><p>Reason for visiting the website: Workshop, Composting information.</p></li>
      </ul>
      <h5>Survey for CEC Website Users</h5>
      <p className='margin-bottom'>Simultaneously with the interviews and domain research, we deployed a survey for the real website users, to understand why and how they were using it, and try to get insights and pain points.</p>
      <h4>Planning</h4>
      <p className='margin-bottom'>In this second part of the project, with all the information in hand, we initiated to make our persona, user journey map, information architecture, and user flow to comprehend how it should behave and help the developers to understand the overall website.</p>
      <ul className='images margin-bottom'>
        <li><a href={project_Compost01} target="_blank"><img src={project_Compost01} /></a></li>
        <li><a href={project_Compost02} target="_blank"><img src={project_Compost02} /></a></li>
        <li><a href={project_Compost03} target="_blank"><img src={project_Compost03} /></a></li>
        <li><a href={project_Compost04} target="_blank"><img src={project_Compost04} /></a></li>
      </ul>
      <h3>Design</h3>
      <p className='margin-bottom'>After the part of research and planning, following the gui test applied by de UI team, we start to do our mid-fidelity wireframes.</p>
      <div className='images centered margin-bottom'>
        <a href={project_Compost05} target="_blank"><img src={project_Compost05} /></a>
        <a href={project_Compost06} target="_blank"><img src={project_Compost06} /></a>
      </div>
    </main>
    <img src={project_Compost07} />
    <ArrowBack />
  </div>
)

export default Yandeh
