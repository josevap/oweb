  const formRef = document.querySelector('form');

let id = 1;

formRef.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = formRef.querySelector('input[type="text"]').value;
  const body = formRef.querySelector('textarea').value;

  localStorage.setItem(id, JSON.stringify({ title, body }));
  id++;
  formRef.querySelector('input[type="text"]').value = '';
  formRef.querySelector('textarea').value = '';
});

const getButton = document
  .querySelector('button[data-get]')
  .addEventListener('click', () => {
    Object.keys(localStorage).forEach((blogId) => {
      const parsed = JSON.parse(localStorage.getItem(blogId));
      console.log('Blog:', parsed.title, 'So sodrzina:', parsed.body);
    });
  });

/*
  let newBlogForm = document.getElementById('blog')
  let postedBlog = document.getElementById('postedBlog')
  var today = new Date();
  var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();

  newBlogForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let blogTitle = document.getElementById('blog-title').value
    let blogContent = document.getElementById('blog-content').value
    let blogAuthor = document.getElementById('blog-author').value
 

    html = `<div class="BlogStyle">
    <h3>${blogTitle}</h3>
    <h4>${blogAuthor}</h4>
    <p>${blogContent}</p>
    <p>${date}</p>
</div>`
postedBlog.innerHTML += html
}) 
*/