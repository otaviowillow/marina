import ArrowBack from '../ArrowBack'
import project_courier01 from '../public/Courier/project_courier01.jpg'
import project_courier02 from '../public/Courier/project_courier02.jpg'
import project_courier03 from '../public/Courier/project_courier03.png'

export const Courier = () => (
  <div className='work'>
    <header>
      <h1>Courier</h1>
      <h2>Application</h2>
      <p>My role: Product Designer</p>
      <p>Responsibilities: User flows, low, mid and high fidelity prototypes.</p>
    </header>
    <main>
      <h4>About</h4>
      <p className='margin-bottom'>Courier is an app that tries to connect people that interacted somehow, for a brief period of time, and didn’t have the chance to actually meet.</p>
      <h4>Planning</h4>
      <p className='margin-bottom'>Starting this project, my first responsibility was creating the main user flow, based on the concept ideas that I had discussed with the client.</p>
      <div className='images margin-bottom'>
        <a href={project_courier01} target="_blank"><img src={project_courier01} /></a>
      </div>
      <h4>Design</h4>
      <p className='margin-bottom'>In the next step of the project, I initiated the design of the screens. You can see the final prototype here.</p>
    </main>
    <a href={project_courier02} target="_blank"><img src={project_courier02} /></a>
    <a href={project_courier03} target="_blank"><img src={project_courier03} /></a>
    <ArrowBack />
  </div>
)

export default Courier