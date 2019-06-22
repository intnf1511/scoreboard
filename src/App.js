import React from 'react';
import {Header} from "./components/Header";
import './App.css';

// render 함수에 컴포넌트를 배치하는 방법 두 가지 규칙
// 1. 함수명은 대문자로 시작
// 2. 리턴 : reactElement를 리턴
// function Header() {
//     // jsx 리턴시 아래와 같이 명확하게..
//     return (
//         <header className="header">
//             <h1 className="h1">ScoreBoard</h1>
//             <span className="stats">Players : </span>
//         </header>
//     )
// }

// const  players = [
//     {name:'QQQ', id:"1"},
//     {name:'WWW', id:"2"},
//     {name:'EEE', id:"3"},
//     {name:'RRR', id:"4"}
// ];

const Player = (props) => (
    <div className="player">
        <span className="player-name">
            <button className="remove-player" onClick={() => props.removePlayer(props.id)}>X</button>
          {props.name}
        </span>
      <Count/>
    </div>
)


class Count extends React.Component {

  constructor() {
    super();
    //시간에 따라 변하는 데이터
    this.state ={
      score: 0
    };
    //현재의 자기 자신을 넘겨줌
    //this.incrementScore = this.incrementScore.bind(this);
  }

  handleScore = (delta) => {    //메서드가 아닌 속성이됨 (애로우 펀션안의 this는 lexical this로써 자기 자신을 가리킨다.
    console.log("increment", this);
    //this.state.score += 1;
    // setState를 호출해야만 UI 렌더링이 된다.
    //this.setState({score: this.state.score +1});
    this.setState(preScore => {
      return {score: this.state.score +delta}
    })
  }

  render() {
    return (
        <div className="counter">
          <button className="counter-action decrement" onClick={() => this.handleScore(-1)}>-</button>
          <span className="counter-score">{this.state.score}</span>
          <button className="counter-action increment" onClick={() => this.handleScore(1)}>+</button>
        </div>
    )
  }

}

// const Count = (props) => (
//     <div className="counter">
//         <button className="counter-action decrement">-</button>
//         <span className="counter-score">{props.score}</span>
//         <button className="counter-action increment">+</button>
//     </div>
// )

class App extends React.Component {

  state = {
    players: [
      {name:'QQQ', id:"1"},
      {name:'WWW', id:"2"},
      {name:'EEE', id:"3"},
      {name:'RRR', id:"4"}
    ]
  }

  handleRemovePlayer = (id) => {
    console.log("Remove", id);

    /* this : 애로우 펀션으로 자기 자신을 찾음 */
    this.setState(prevState => ({
      players: prevState.players.filter(item => item.id !== id)
    }))
  }

  render() {
    return (
        <div className="scoreboard">
          <Header title="My Scoreboard" totalPlayers={11}/>
          {
            this.state.players.map(player => (
                <Player name={player.name} id={player.id} key={player.id}
                        removePlayer={this.handleRemovePlayer}/>
            ))
          }
        </div>
    )
  }

}
export default App;
