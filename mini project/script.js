fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(users => {
        let wrap = document.createElement('div');
        wrap.classList.add('wrap');

        for (const user of users) {
            let divUser = document.createElement('div')
            divUser.classList.add('user');

            let userId = document.createElement('p');
            userId.innerText = `Id: ${user.id}`;

            let name = document.createElement('h4');
            name.innerText = `Name: ${user.name}`;

            let button = document.createElement('button');
            button.innerText = 'More information';
            button.onclick = function () {
                window.location.href = './user-details.html?userId=' + `${user.id}`;
            }

            divUser.append(userId, userId, name, button);
            wrap.appendChild(divUser);
            document.body.appendChild(wrap);
        }
    });


