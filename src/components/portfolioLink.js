import React from 'react'

import { Link, P } from '../styles'

import ArrowRight from '../img/arrow-right.svg'

const ViewProjectLink = ({ to }) => <P altColor><Link to={to}>See resume <ArrowRight /></Link></P>

export default ViewProjectLink