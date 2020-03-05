import React from 'react'

import { A, P } from '../styles'

import ArrowRight from '../img/arrow-right.svg'
import CV from '../img/marina_resume.pdf'

const ViewProjectLink = () => <P altColor><A href={CV}>See resume <ArrowRight /></A></P>

export default ViewProjectLink