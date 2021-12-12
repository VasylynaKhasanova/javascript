// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then (response=> response.json())
//     .then (posts => {
//         let wrap = document.createElement('div');
//         wrap.classList.add('wrap');
//         for (const postElement of posts) {
//             let divPost = document.createElement('div');
//             divPost.classList.add('divPost');
//
//             let userId = document.createElement('p');
//             userId.innerText = `UserId: ${postElement.userId}`;
//
//             let divId = document.createElement('p');
//             divId.innerText = `ID: ${postElement.id}`;
//
//             let title = document.createElement('h4');
//             title.innerText = `Title: ${postElement.title}`;
//
//             let body = document.createElement('p');
//             body.innerText = `${postElement.body}`;
//
//             divPost.append(userId, divId, title, body);
//             wrap.appendChild(divPost);
//             document.body.appendChild(wrap);
//
//         }
//     });

//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(response => response.json())
//     .then(comments => {
//         let wrap = document.createElement('div');
//         wrap.classList.add('wrapper');
//         for (const comment of comments) {
//             let divComment = document.createElement('div')
//             divComment.classList.add('comment');
//
//             let postId = document.createElement('p');
//             postId.innerText = `PostId: ${comment.postId}`;
//
//             let commentId = document.createElement('p');
//             commentId.innerText = `Id: ${comment.id}`;
//
//             let name = document.createElement('h4');
//             name.innerText = `Name: ${comment.name}`;
//
//             let email = document.createElement('p')
//             email.innerText = `Email: ${comment.email}`;
//
//             let body = document.createElement('p');
//             body.innerText = `${comment.body}`;
//
//             divComment.append(postId, commentId, name, email, body);
//             wrap.appendChild(divComment);
//             document.body.appendChild(wrap);
//         }
//     })