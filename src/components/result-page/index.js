import { connect } from 'react-redux';
import ResultPage from "./result-page";

const mapStateToProps = (state) => {
  const {
    userName: {data: userName},
    cards: {data: cards},
    moves: {data: moves},
  } = state;
  return {
    userName,
    moves,
    cards
  };
}

export default connect(mapStateToProps, null)(ResultPage);
