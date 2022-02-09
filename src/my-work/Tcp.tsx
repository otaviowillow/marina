import ArrowBack from '../ArrowBack'
import project_TCP01 from '../public/tcp/project_TCP01.png'
import project_TCP02 from '../public/tcp/project_TCP02.png'
import project_TCP03 from '../public/tcp/project_TCP03.png'
import project_TCP04 from '../public/tcp/project_TCP04.png'
import project_TCP05 from '../public/tcp/project_TCP05.png'
import project_TCP06 from '../public/tcp/project_TCP06.png'
import project_TCP07 from '../public/tcp/project_TCP07.png'
import project_TCP08 from '../public/tcp/project_TCP08.png'
import project_TCP09 from '../public/tcp/project_TCP09.png'

export const Tcp = () => (
  <div className='work'>
    <header>
      <h1>TCP</h1>
      <h2>Dashboard / Design System</h2>
      <p>My role: Product Designer</p>
      <p>Responsibilities: User research, interviews, surveys and results, design sprint with the developers, personas, scenarios, user flows, usability testing, style guide, mid and high fidelity prototypes.</p>
    </header>
    <main>
      <h4>About</h4>
      <p className='margin-bottom'>The Paranaguá Container Terminal (TCP) moves an average of 1240 containers per day. In 2018 there were 724 ships operating. The port has been modernized in recent years and most of the operations are now digital. The fast growth of information available on the TCP Customer Application made usability, information architecture, and user experience to be set aside. The first challenge was understanding how the system works in real-time with several numbers of processes and user flows, improving the user experience for almost 4.200 clients with 100 accesses per minute. Dealing with this, another big issue was to change the culture of their development team, because the developers didn’t know their user’s needs and that made they built a non-user friendly system.</p>
      <h4>Research</h4>
      <p className='margin-bottom'>The TCP system has an average of 100 user accesses per minute as I said before and an infinity of possible user flows. So, the question was: “How can I start it?” My first step was analyzing their Google Analytics page, at least to see how these accesses working, the profiles, permissions, and overall numbers. After this part, I started to contact real users for a quick interview and send them a survey.</p>
      <h5>Pain Points:</h5>
      <ul className='margin-bottom'>
        <li><p>- Too many screens to complete the same task</p></li>
        <li><p>- User flows totally broken or confused</p></li>
        <li><p>- The users didn’t receive any feedback about the processes and sometimes they had to call Customer Service.</p></li>
      </ul>
      <h4>Planning</h4>
      <p className='margin-bottom'>In this phase, I started to create the Personas to make all the processes easier to understand as a real user of the system. I also have built the user flows for each permission profile to help the developers to see the relationship between the screens, create the components, and get the overall complexity of the system.</p>
      <ul className='images'>
        <li><img src={project_TCP01} /></li>
        <li><img src={project_TCP02} /></li>
        <li><img src={project_TCP03} /></li>
        <li><img src={project_TCP04} /></li>
        <li><img src={project_TCP05} /></li>
        <li><img src={project_TCP06} /></li>
      </ul>
      <h4>User Testing</h4>
      <p className='margin-bottom'>After the part of research and planning, I started to do the wireframes and de mid-fi prototypes. We selected six companies to start to test our beta version of the system. Subsequently the period of tests and improvements (3 months), we delivered the first version of the new feature with a new style guide.</p>
      <iframe src="https://player.vimeo.com/video/394276391?h=c752df8df7" width="640" height="361" allow="autoplay; fullscreen; picture-in-picture" />
      <div className='margin-bottom' />
      <h4>User Interface</h4>
      <div className='images'>
        <img src={project_TCP07} />
      </div>
      <h4>Style Guide</h4>
    </main>
    <img src={project_TCP08} />
    <img src={project_TCP09} />
    <ArrowBack />
  </div>
)

export default Tcp
