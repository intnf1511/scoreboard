import React from 'react';
import {Header} from "./components/Header";
import './App.css';
import {Player} from "./components/Player";

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
