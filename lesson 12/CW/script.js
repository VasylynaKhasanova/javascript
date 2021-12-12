// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        let wrap = document.createElement('div');
        wrap.classList.add('wrap');
        for (const postElement of posts) {
            let divPost = document.createElement('div');
            divPost.classList.add('divPost');

            let userId = document.createElement('p');
            userId.innerText = `UserId: ${postElement.userId}`;

            let divId = document.createElement('p');
            divId.innerText = `ID: ${postElement.id}`;

            let title = document.createElement('h4');
            title.innerText = `Title: ${postElement.title}`;

            let body = document.createElement('p');
            body.innerText = `${postElement.body}`;

            let button = document.createElement('button');
            button.innerText = 'Get comments';
            button.onclick = function () {
                fetch(`https://jsonplaceholder.typicode.com/posts/${postElement.id}/comments`)
                    .then(response => response.json())
                    .then(comments => {

                        for (const comment of comments) {
                            if (postElement.id === comment.postId) {
                                let divComment = document.createElement('div')
                                divComment.classList.add('comment');

                                let postId = document.createElement('p');
                                postId.innerText = `PostId: ${comment.postId}`;

                                let commentId = document.createElement('p');
                                commentId.innerText = `Id: ${comment.id}`;

                                let name = document.createElement('h4');
                                name.innerText = `Name: ${comment.name}`;

                                let email = document.createElement('p')
                                email.innerText = `Email: ${comment.email}`;

                                let body = document.createElement('p');
                                body.innerText = `${comment.body}`;

                                divComment.append(postId, commentId, name, email, body);
                                divPost.appendChild(divComment);
                            }
                        }
                    });
            }

            divPost.append(userId, divId, title, body, button);
            wrap.appendChild(divPost);
            document.body.appendChild(wrap);

        }
    });
