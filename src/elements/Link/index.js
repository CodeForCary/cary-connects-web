/**
 * Link component - opens external links in new tabs, or uses router library to navigate internally
 */
import React from 'react'
import { Link as InternalLink } from 'react-router-dom'

export default class Link extends React.Component {

  render () {
    const { url, ...attrs } = this.props
    if (url[0] === '/') {
      return (
        <InternalLink to={url} {...attrs}>
          { this.props.children }
        </InternalLink>
      )
    }
    else {
      return (
        <a href={url} target='_blank' rel='noopener noreferrer' {...attrs}>
          { this.props.children }
        </a>
      )
    }
  }
}
