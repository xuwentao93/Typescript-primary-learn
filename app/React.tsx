import React from 'react'

interface ReactClass {
  render: () => ReactClass
}

class com extends React.PureComponent implements ReactClass {
  render(): ReactClass {
    return (<div>123</div>)
  }
}
