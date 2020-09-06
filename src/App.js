import React from 'react';

// function Food(props) {
//   return <h1>I like { props.abc }</h1>;
// }

function Food({ fav }) {
  return <h1>I like { fav }</h1>;
}

// function Food({ fav, abc }) {
//   return <h1>I like { fav } and { abc }</h1>;
// }



function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="kimchi" abc="chunkee" />
      <Food fav="samgiopsal" abc="seungmin"/>
      <Food fav="chukumi" />
      <Food fav="ramen" />
    </div>
  );
}
export default App;