import { connect } from 'react-redux';
import setCards from '../../redux/actions/setCards';
import setMoves from "../../redux/actions/setMoves";
import CardsGame from "./cards-game";

const mapStateToProps = state => {
  const {
    cards: {data: cards},
    moves: {data: moves},
    userName: {data: userName},
  } = state;
  return {
    userName,
    moves,
    cards
  };
}

const mapDispatchToProps = (dispatch) => ({
  setCards: (cards) => dispatch(setCards(cards)),
  dispatch,
});

const mergeProps = (stateToProps, dispatchStateToProps, ownProps) => {
  let { moves } = stateToProps;
  const { dispatch, ...restDispatchStateToProps } = dispatchStateToProps;
  return {
    ...stateToProps,
    ...restDispatchStateToProps,
    ...ownProps,
    setMoves: () => dispatch(setMoves(moves +=1)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(CardsGame);
