const books = [];

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  let location = document.getElementById("location").value;

  if (title == "" || description == "" || location == "") {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'All fields are required.'
    })
  }
  else {
    Swal.fire({
      icon: 'success',
      title: 'Successful registration.',
      showConfirmButton: false,
      timer: 1500
    })

    const bookData = {
      title,
      description,
      location
    };
    books.push(bookData);
    console.log(books);

    createBooks();
    document.getElementById("form").reset();
  }
});

function createBooks() {
  let container = document.getElementById("tbody");
  container.innerHTML = "";

  for (let i = 0; i < books.length; i++) {
    let title = books[i].title;
    let description = books[i].description;
    let location = books[i].location;

    container.innerHTML += 
    `
    <tr id="${i}">
      <td>${title}</td>
      <td>${description}</td>
      <td>${location}</td>
      <td><button class="btn btn-warning" onclick="editBooks(${i})">Edit</button></td>
      <td><button class="btn btn-danger" onclick="deleteBook(${i})">Delete</button></td>
    </tr>
    `;
  }
}

function editBooks(i) {
  let container = document.getElementById(`${i}`);
  container.innerHTML = "";
  let title = books[i].title;
  let description = books[i].description;
  let location = books[i].location;

  document.getElementById("title").value = title;
  document.getElementById("description").value = description;
  document.getElementById("location").value = location;

  books.splice(i, 1);
}

function deleteBook(i) {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      let container = document.getElementById(`${i}`);
      container.innerHTML = "";
      books.splice(i, 1);
      createBooks();
      Swal.fire(
        'Deleted!',
        'Your traveler has been deleted.',
        'success'
      )
    }
  })
}

function logout() {
  localStorage.clear();
  window.location.replace("http://127.0.0.1:5500/pages/login.html");
}

document.getElementById("logout").addEventListener('onclick', logout());