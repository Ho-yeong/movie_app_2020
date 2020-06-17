import React from "react";

function Love({ fav, pic }) {
  // 매개변수 안의 fav 키값을 지정
  // 만약 매개변수가 props 일시 밑에 값은 {props.fav} 로 입력 가능
  return (
    <div>
      <h2>I love {fav}</h2>
      <img src={pic} alt={fav} />
    </div>
  );
}

const personILike = [
  {
    id: 1,
    name: "Rick",
    image:
      "https://m.media-amazon.com/images/M/MV5BYTRhMjhjMTEtZTY0MC00NjAyLWJkNDQtZmYzN2FjNDM1NTI0XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY1200_CR744,0,630,1200_AL_.jpg",
  },
  {
    id: 2,
    name: "Morty",
    image: "https://static.tvtropes.org/pmwiki/pub/images/morty_smith_2.png",
  },
  {
    id: 3,
    name: "Summer",
    image:
      "https://vignette.wikia.nocookie.net/rickandmorty/images/a/ad/Summer_is_cool.jpeg/revision/latest/top-crop/width/360/height/360?cb=20160919183158",
  },
];

function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      {personILike.map((human) => {
        return <Love key={human.id} fav={human.name} pic={human.image} />;
      })}
    </div>
  );
}

export default App;
