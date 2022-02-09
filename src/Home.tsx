import { Link } from 'react-router-dom'

import './home.scss'

export const Home = () => {
  return (
    <div className="home">
      <main>
        <h1>Hello, my name is <strong>Marina Braholka</strong> and I am a Product Designer based in Vancouver, BC</h1>
      </main>
      <aside>
        <h4>My Work</h4>
        <ul>
          <li>
            <Link to={"/my-work/yandeh"} className="content">
              <h2>Yandeh</h2>
              <span>→</span>
              <p>_Design System</p>
            </Link>
          </li>
          <li>
            <Link to={"/my-work/tcp"} className="content">
              <h2>TCP</h2>
              <span>→</span>
              <p>_Design System and Dashboard</p>
            </Link>
          </li>
          <li>
            <Link to={"/my-work/cec"} className="content">
              <h2>CEC</h2>
              <span>→</span>
              <p>_Website</p>
            </Link>
          </li>
          <li>
            <Link to={"/my-work/courier"} className="content">
              <h2>Courier</h2>
              <span>→</span>
              <p>_App</p>
            </Link>
          </li>
          <li>
            <Link to={"/my-work/cadeparana"} className="content">
              <h2>CadeParana</h2>
              <span>→</span>
              <p>_Platform</p>
            </Link>
          </li>
          {/* <li>
            <Link to={"/my-work/zipgo"} className="content">
              <h2>Zipgo</h2>
              <span>→</span>
              <p>_App</p>
            </Link>
          </li> */}
        </ul>
      </aside>
    </div>
  )
}

export default Home