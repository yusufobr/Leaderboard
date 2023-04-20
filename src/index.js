import './style.css';
import fetchData from './modules/scores.js';
import addScore from './modules/addScore.js';

const refresh = document.getElementById('refresh-btn');
refresh.addEventListener('click', () => fetchData());

fetchData();
addScore();