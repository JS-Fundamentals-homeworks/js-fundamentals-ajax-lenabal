// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

// task2.js

const userNameInput = document.querySelector('#userNameInput');
const getUserButton = document.querySelector('#getUserButton');
const userCity = document.querySelector('#userCity');

getUserButton.addEventListener('click', async () => {
    const userName = userNameInput.value;

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const users = await response.json();

        const user = users.find(user => user.name === userName);

        if (user) {
            userCity.textContent = `City: ${user.address.city}`;
        } else {
            userCity.textContent = 'User not found!';
        }
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
});
