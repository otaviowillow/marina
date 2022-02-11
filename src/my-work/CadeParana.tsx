import ArrowBack from '../ArrowBack'
import cadeparana01 from '../public/Marista/project-Cadeparana01.png'
import cadeparana02 from '../public/Marista/project-Cadeparana02.png'
import cadeparana03 from '../public/Marista/project-Cadeparana03.png'
import cadeparana04 from '../public/Marista/project-Cadeparana04.png'
import cadeparana05 from '../public/Marista/project-Cadeparana05.jpg'

export const CadeParana = () => (
  <div className='work'>
    <header>
      <h1>CadeParana</h1>
      <h2>Platform</h2>
      <p>Client: Marista</p>
      <p>My role: UX/UI Designer</p>
      <p>Responsibilities: Sitemap, wireframes, usability testing, mid and high fidelity prototypes.</p>
    </header>
    <main>
      <h4>About</h4>
      <p className='margin-bottom'>CADÊ Paraná, developed by the Marista Center of the Defense of Childhood, is a platform that facilitates access to data and promotes actions of political influence with a focus on the rights of children and adolescents in the state of Paraná. It starts from the premise that the analysis of information is fundamental in the transformation of their living conditions.</p>
      <h4>Planning</h4>
      <p className='margin-bottom'>My first step in this project was reading all the information the client gave to me, such as domain research, persona, interviews and user journeys. Afterward, I started to build the sitemap and wireframes.</p>
      {/* <a href={cadeparana01} target="_blank"><img src={cadeparana01} /></a>
      <div className='margin-bottom' /> */}
      <ul className='images'>
        <li><a href={cadeparana02} target="_blank"><img src={cadeparana02} /></a></li>
        <li><a href={cadeparana03} target="_blank"><img src={cadeparana03} /></a></li>
        <li><a href={cadeparana04} target="_blank"><img src={cadeparana04} /></a></li>
      </ul>
      <h4>Design</h4>
      <p className='margin-bottom'>In this phase I started to create the UI of the screens based in the colours, typography and the branding previously provided by the client.</p>
    </main>
    <img src={cadeparana05} />
    <ArrowBack />
  </div>
)

export default CadeParana