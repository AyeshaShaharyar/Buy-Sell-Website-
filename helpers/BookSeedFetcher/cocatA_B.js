let a = [
  ['3','Portable Pets', 'Lorella Rizzati', 'https://covers.openlibrary.org/b/id/2646149-M.jpg'],
  [ '1','Owl babies', 'Martin Waddell', 'https://covers.openlibrary.org/b/id/6602047-M.jpg'],
  ['5',"Johnny Lion's book", 'Edith Thacher Hurd', 'https://covers.openlibrary.org/b/id/51606-M.jpg'],
  ['10','Growing frogs', 'Vivian French', 'https://covers.openlibrary.org/b/id/515082-M.jpg'],
  ['6','Pencil, paper, draw!', 'Steve Harpster', 'https://covers.openlibrary.org/b/id/1738755-M.jpg'],
  ['2','El canguro tiene Mama?', 'Eric Carle', 'https://covers.openlibrary.org/b/id/11625175-M.jpg'],
  ['4','Happy Baby', 'Roger Priddy', 'https://covers.openlibrary.org/b/id/2371344-M.jpg'],
  ['7','The little wood duck.', 'Brian Wildsmith', 'https://covers.openlibrary.org/b/id/4600916-M.jpg'],
  ['9','Lad, a dog', 'Margo Lundell', 'https://covers.openlibrary.org/b/id/385802-M.jpg'],
  ['8','Cowgirl Kate and Cocoa', 'Erica Silverman', 'https://covers.openlibrary.org/b/id/11024980-M.jpg']];

let b = [
  [
    286,
    4,
    'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    1,
    true,
    false
  ],
  [
    119,
    2,
    'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    2,
    false,
    false
  ],
  [
    206,
    1,
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    3,
    true,
    true
  ],
  [
    87,
    5,
    'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    4,
    true,
    false
  ],
  [
    11,
    2,
    'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    5,
    false,
    true
  ],
  [
    249,
    3,
    'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    6,
    true,
    false
  ],
  [
    83,
    5,
    'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    7,
    false,
    false
  ],
  [
    90,
    4,
    'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    8,
    true,
    false
  ],
  [
    161,
    2,
    'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    9,
    true,
    false
  ],
  [
    216,
    4,
    'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    10,
    true,
    false
  ]
]

;
 
let result = [];
// let aa = ["1","2","3"];
// let bb = ["a","b","c"];
for (let i = 0; i < a.length; i++) {
  result.push(a[i].concat(b[i]));
}
 

console.log(result);