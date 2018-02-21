import React from 'react'
import Mde from 'simplemde'
import './simpleMDE.css'
import './markdown.css'
import {observer, inject} from 'mobx-react'
import {withRouter} from 'react-router-dom'

@inject('articleState') @observer

@withRouter

class Markdown extends React.Component {

  componentDidMount() {
    console.log(this.props)
    this.mde = new Mde({
      element: document.getElementById("marked"),
      status: false,
      spellChecker: false,
      autofocus:true,
      forceSync:true
    })

    this.mde.codemirror.on('change', () => {
      this.props.handleMde(this.mde.value())
    })

  }

  componentDidUpdate() {
    this.mde.value(this.props.value)
    console.log(this.props.value)
    console.log(this.mde.value())
  }

  render() {

    return (
      <div className="simpleMDE">
        <textarea id="marked"></textarea>
      </div>
    )
  }
}

export default Markdown