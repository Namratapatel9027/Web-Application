const getUsersBtn = document.getElementById('getUsersBtn');
const loader = document.getElementById('loader');
const userGrid = document.getElementById('userGrid');

getUsersBtn.addEventListener('click', () => {
  loader.style.display = 'block';
  userGrid.innerHTML = ''; // Clear existing user cards

  fetch('https://reqres.in/api/users?page=1')
    .then(response => response.json())
    .then(data => {
      loader.style.display = 'none';
      data.data.forEach(user => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
          <img src="${user.avatar}" alt="${user.first_name}">
          <h3>${user.first_name} ${user.last_name}</h3>
          <p>Email: ${user.email}</p>
        `;
        userGrid.appendChild(card);
      });
    })
    .catch(error => {
      loader.style.display = 'none';
      console.error('Error fetching users:', error);
    });
});
