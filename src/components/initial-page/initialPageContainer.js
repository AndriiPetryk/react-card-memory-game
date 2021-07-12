import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import 'bootstrap/dist/css/bootstrap.min.css';

const  InitialPageContainer = ({setUserName, history}) => {
  const [gameUserName, setGameUserName] = useState('');
  const [isUserNameValid, setUserNameValidation] = useState(true);

  const saveUserData = () => {
    if (gameUserName.length >= 3) {
      setUserNameValidation(false);
      setUserName(gameUserName);
      history.push("/game");
    } else {
      setUserNameValidation(false);
    }
  }

  return (
    <div className="container mt-5">
      <Jumbotron className="w-50 mx-auto">
        <Form className="mx-auto w-75">
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your Name"
              required
              isInvalid={!isUserNameValid}
              onChange={(event) => {
              setGameUserName(event.target.value) }}
            />
            {!isUserNameValid && <Form.Control.Feedback type="invalid">
              Please enter a username.
            </Form.Control.Feedback>}
            <Form.Text id="nameHelpBlock" muted>
              Your name must be min 3 characters long.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" onClick={saveUserData}>
            Save Name & Start Game
          </Button>
        </Form>
      </Jumbotron>
    </div>
  )
};

export default InitialPageContainer;
