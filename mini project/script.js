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

                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`)
                    .then(response => response.json())
                    .then(user => {
                        let div = document.createElement('div')
                        div.classList.add('user');

                        let userId = document.createElement('p');
                        userId.innerText = `Id: ${user.id}`;

                        let name = document.createElement('h4');
                        name.innerText = `Name: ${user.name}`;

                        let username = document.createElement('h4');
                        username.innerText = `Username: ${user.username}`;

                        let email = document.createElement('p');
                        email.innerText = `Email: ${user.email}`;

                        let address = document.createElement('p');
                        address.innerText = `Address: street: ${user.address.street}, suite: ${user.address.suite}, city: ${user.address.city}, zipcode: ${user.address.zipcode}, geo: lat: ${user.address.geo.lat}, lng: ${user.address.geo.lng}`;

                        let phone = document.createElement('p');
                        phone.innerText = `Phone: ${user.phone}`;

                        let website = document.createElement('p');
                        website.innerText = `Website: ${user.website}`;

                        let company = document.createElement('p');
                        company.innerText = `Company: name: ${user.company.name}, catchPhrase: ${user.company.catchPhrase}, bs: ${user.company.bs}`;

                        div.append(userId, name, username, email, address, phone, website, company);
                        divUser.appendChild(div);

                    });
            }

            divUser.append(userId, userId, name, button);
            wrap.appendChild(divUser);
            document.body.appendChild(wrap);
        }
    });


