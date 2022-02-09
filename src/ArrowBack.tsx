import { Link } from "react-router-dom";

import arrow from './public/arrow.png';

import './arrowBack.scss'

const ArrowBack = () => {
  return <Link className="arrow-back" to="/"><img src={arrow} /></Link>;
};

export default ArrowBack;
