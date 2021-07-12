import React from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';

const ResultPage = ({ userName, moves, history }) => {

  const restartGame= () => {
    history.push("/game");
  }

  return (
    <div className="container mt-5">
      <Jumbotron className="w-50 mx-auto text-center">
        <p className="mb-2"><strong>{userName}</strong> you completed the game in {moves} moves</p>
        <div className="score mb-2">
          <div className="moves">
            <span className="bold">Moves:</span> {moves}
          </div>
        </div>
        <div className="restart">
          <Button onClick={restartGame} variant="primary">
            Restart
          </Button>
        </div>
      </Jumbotron>
    </div>
  )
};

export default ResultPage;
