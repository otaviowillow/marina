import React from 'react'
import RehypeReact from "rehype-react"

import { H3, P } from './index'

const renderAst = new RehypeReact({ 
  createElement: React.createElement,
  components: {
    h3: H3,
    p: P
  }
}).Compiler

export const MarkdownParser = ({ content }) => renderAst(content)