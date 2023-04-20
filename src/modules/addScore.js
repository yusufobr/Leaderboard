const myForm = document.getElementById('add-score-form');

const addScore = () => {
  const key = 'yAtQ05XYzJj2yusufJCO';
  const base = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${key}/scores`;

  myForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const score = document.getElementById('score').value;

    await fetch(base, {
      method: 'POST',
      body: JSON.stringify({
        user: name,
        score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    window.location.reload();
  });
};

export default addScore;