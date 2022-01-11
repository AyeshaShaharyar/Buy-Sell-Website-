const books = [{"price":286,"rating":4,"review":"Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.","seller_id":1,"isFeatured":true,"isSold":false},
  {"price":119,"rating":2,"review":"Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.","seller_id":2,"isFeatured":false,"isSold":false},
  {"price":206,"rating":1,"review":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.","seller_id":3,"isFeatured":true,"isSold":true},
  {"price":87,"rating":5,"review":"In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.","seller_id":4,"isFeatured":true,"isSold":false},
  {"price":11,"rating":2,"review":"Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.","seller_id":5,"isFeatured":false,"isSold":true},
  {"price":249,"rating":3,"review":"In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.","seller_id":6,"isFeatured":true,"isSold":false},
  {"price":83,"rating":5,"review":"Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.","seller_id":7,"isFeatured":false,"isSold":false},
  {"price":90,"rating":4,"review":"Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.","seller_id":8,"isFeatured":true,"isSold":false},
  {"price":161,"rating":2,"review":"Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.","seller_id":9,"isFeatured":true,"isSold":false},
  {"price":216,"rating":4,"review":"Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.","seller_id":10,"isFeatured":true,"isSold":false}];
let result = [];
for (let i = 0; i < books.length; i++) {
  let halfResult = [];
  for (const key in books[i]) {
    // console.log(books[i][key]);
    halfResult.push(books[i][key]);
  }
  result.push(halfResult);
}
console.log(result);
