const scores = [
  {
    name: 'Yusuf',
    score: 200,
  },
  {
    name: 'Hamid',
    score: 100,
  },
  {
    name: 'Walid',
    score: 150,
  },
  {
    name: 'Said',
    score: 10,
  },
  {
    name: 'Hafid',
    score: 300,
  },
  {
    name: 'Rachid',
    score: 50,
  },
  {
    name: 'Alla',
    score: 250,
  },
];

const listContainer = document.getElementById('list-scores');
const ul = document.createElement('ul');

const showScores = () => {
  let htmlToAdd = '';
  scores.forEach((e, index) => {
    const li = `<li class="${index % 2 === 0 ? 'bg-gray' : ''}">${e.name} : ${e.score}</li>`;

    htmlToAdd += li;
  });

  ul.innerHTML = htmlToAdd;
  listContainer.appendChild(ul);
};

export default showScores;