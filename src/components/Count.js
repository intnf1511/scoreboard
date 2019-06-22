import React from 'react'

export class Count extends React.Component {

    constructor() {
        super();
        //this.incrementScore = this.incrementScore.bind(this);
    }

    handleScore = (delta) => {    //메서드가 아닌 속성이됨 (애로우 펀션안의 this는 lexical this로써 자기 자신을 가리킨다.
        console.log("increment", this);
        //this.state.score += 1;
        // setState를 호출해야만 UI 렌더링이 된다.
        //this.setState({score: this.state.score +1});
        this.setState(preScore => {
            return {score: this.preScore.score +delta}
        })
    }

    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={() => this.handleScore(-1)}>-</button>
                <span className="counter-score">{this.props.score}</span>
                <button className="counter-action increment" onClick={() => this.handleScore(1)}>+</button>
            </div>
        )
    }

}