import React from 'react';
import PropTypes from 'prop-types';

// function Food(props) {
//   return <h1>I like { props.abc }</h1>;
// }

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like { name }</h2>
      <h4>{ rating }/5.0</h4>
      <img src={ picture } alt={ name } />
    </div>
  );
}

// function Food({ fav, abc }) {
//   return <h1>I like { fav } and { abc }</h1>;
// }

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://m.jnmall.kr/web/product/big/201910/4b83072de272a51edffa420ab3b2fa98.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'https://t1.daumcdn.net/liveboard/dailylife/222d88e5c7dc496c8e8a8a56c3452e52.JPG',
    rating: 4.8,
  },
  {
    id: 3,
    name: 'Bibimbap',
    image: 'https://craftlog.com/m/i/5708783=s1280=h960',
    rating: 3,
  },
  {
    id: 4,
    name: 'Doncasu',
    image: 'https://t1.daumcdn.net/cfile/tistory/998976505AA8C06921',
    rating: 2.3,
  },
  {
    id: 5,
    name: 'Kimbap',
    image: 'https://homecuisine.co.kr/files/attach/images/140/001/083/558d170258752df2dd76bef00861497f.JPG',
    rating: 1.8,
  },
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App;