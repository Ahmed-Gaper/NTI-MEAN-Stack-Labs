// function displayPosts(n) {
//   const container = document.getElementById('posts-container');
//   container.innerHTML = ''; // Clear previous content

//   function fetchAndRenderPost(id) {
//     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//       .then(response => {
//         return response.json();
//       })
//       .then(post => {
//         const card = document.createElement('div');
//         card.className = 'card';

//         card.innerHTML = `
//           <h3>${post.title}</h3>
//           <p>${post.body}</p>
//           <small>Post ID: ${post.id}</small>
//         `;

//         container.appendChild(card);
//       })
//   }

//   for (let id = 1; id <= n; id++) {
//     fetchAndRenderPost(id);
//   }
// }



async function displayPosts(n) {
  const container = document.getElementById('posts-container');
  container.innerHTML = ''; 
  for (let id = 1; id <= n; id++) {

      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const post = await response.json();

      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <small>Post ID: ${post.id}</small>
      `;

      container.appendChild(card);

  }
}

displayPosts(6);
