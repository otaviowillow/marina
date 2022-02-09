import ArrowBack from '../ArrowBack'
import project_zipgo01 from '../public/zipgo/project-zipgo01.png'
import project_zipgo02 from '../public/zipgo/project-zipgo02.png'

export const Zipgo = () => (
  <div className='work'>
    <header>
      <h1>Zipgo</h1>
      <h2>Application</h2>
      <p>My role: UX/UI Designer</p>
      <p>Responsibilities: Style guide, mid and high fidelity prototypes.</p>
    </header>
    <main>
      <p className='margin-bottom'>Zipgo is an NFT application that allows the user to catch NFT cards through 12.000 cities in the USA.</p>
    </main>
    <img src={project_zipgo01} />
    <img src={project_zipgo02} />
    <ArrowBack />
  </div>
)

export default Zipgo