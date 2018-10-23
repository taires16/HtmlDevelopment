import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      col1: [1, 2, 3, 4],
      col2: [5, 6, 7, 8]
    }
  }

handleClick(e, element, col){

console.log(col)





}

renderCol(data, col){
  return (
    data.map(element => <button  onClick={((e) => this.handleClick(e, element, col))} key={element}>{element}</button>)
  )
}


  render() {
    return (
      <div className='row'>
        <div className='col'>
          {this.renderCol(this.state.col1, 1)}
        </div>
        <div className='col'>
        {this.renderCol(this.state.col2, 2)}
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
