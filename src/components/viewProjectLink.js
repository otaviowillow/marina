import React from 'react'

import { Link, P } from '../styles'

import ArrowRight from '../img/arrow-right.svg'

const ViewProjectLink = ({ to }) => <P altColor><Link to={to}>View project <ArrowRight /></Link></P>

export default ViewProjectLink