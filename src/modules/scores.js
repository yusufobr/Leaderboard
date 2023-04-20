const listContainer = document.getElementById('list-scores');
const ul = document.createElement('ul');

const showScores = (data) => {
  let htmlToAdd = '';
  data.sort((a, b) => b.score - a.score);
  data.forEach((e, index) => {
    const li = `<li class="${index % 2 === 0 ? 'bg-gray' : ''} cap">${e.user} : ${e.score}</li>`;

    htmlToAdd += li;
  });

  ul.innerHTML = htmlToAdd;
  listContainer.appendChild(ul);
};

const fetchData = async () => {
  const key = 'yAtQ05XYzJj2yusufJCO';
  const base = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${key}/scores`;

  const res = await fetch(base);
  const data = await res.json();
  const { result } = data;

  showScores(result);
};

export default fetchData;
