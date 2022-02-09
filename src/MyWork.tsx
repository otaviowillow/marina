import { useParams } from 'react-router-dom';

import data from './data'

export const MyWork = () => {
  const { workId } = useParams();
  const el = data.find((d) => d.id === workId);

  if(!el) return <p>no title</p>

  return (
    <div>
      <h1>{el.title}</h1>
      <h2>{el.role}</h2>
      {el.responsibilities.map((e, i) => <p key={i}>{e}</p> )}
      <h3>{el.title1}</h3>
      <p>{el.description1}</p>
    </div>
  )
}

export default MyWork;
