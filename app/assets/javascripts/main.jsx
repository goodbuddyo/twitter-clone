class Main extends React.Component {
  render() {
    return (
      <h1>Hello from the main err components  .jsx Main class</h1>
    )
  }
}

let documentReady = () => {
  ReactDOM.render(
    <Main />,
    document.getElementById('react')
  )
}

$(documentReady);