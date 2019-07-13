import ReactCardFlip from 'react-card-flip';
import { reactShinyInput } from 'reactR';

const FlipCard = mobxReact.observer( ({ configuration, value, setValue }) => {
  const front = Object.assign({}, configuration.front);
  const back = Object.assign({}, configuration.back);
  let config = Object.assign({}, configuration);

  delete config.front;
  delete config.back;

  if(value !== "" && window.hasOwnProperty(value) && window[value].hasOwnProperty('isFlipped')){
    config.isFlipped = window[value].isFlipped;
  }

  return React.createElement(
    ReactCardFlip,
    config,
    [
      React.createElement(
        'div',
        (value !== "" && window.hasOwnProperty(value) && window[value].hasOwnProperty('isFlipped')) ?
          {key: 'front', onClick: function() {window[value].isFlipped = !window[value].isFlipped}} :
          {key: 'front'},
        React.createElement(
          front.tag,
          front.props,
          front.content
        )
      ),
      React.createElement(
        'div',
        (value !== "" && window.hasOwnProperty(value) && window[value].hasOwnProperty('isFlipped')) ?
          {key: 'back', onClick: function() {window[value].isFlipped = !window[value].isFlipped}} :
          {key: 'back'},
        React.createElement(
          back.tag,
          back.props,
          back.content
        )
      )
    ]
  )
});

reactShinyInput('.flipcard', 'flipcard.flipcard', FlipCard);
