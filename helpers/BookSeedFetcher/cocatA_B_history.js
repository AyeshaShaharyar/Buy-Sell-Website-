let a = [
  ['Empires of the plain', 'Lesley Adkins', 'https://covers.openlibrary.org/b/id/7972506-M.jpg'],
  ['Nuestra especie', 'Marvin Harris', 'https://covers.openlibrary.org/b/id/9322618-M.jpg'],
  ['World prehistory and archaeology', 'Michael Chazan', 'https://covers.openlibrary.org/b/id/11746826-M.jpg'],
  ['Ancient lives', 'Brian M. Fagan', 'https://covers.openlibrary.org/b/id/191804-M.jpg'],
  ['World History For Dummies', 'Peter Haugen', 'https://covers.openlibrary.org/b/id/8400625-M.jpg']
];

let b = [
  [
    286,
    4,
    'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    1,
    true,
    false,
    'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    'New',
    14
  ],
  [
    119,
    2,
    'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    2,
    false,
    false,
    'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    'New',
    14
  ],
  [
    206,
    1,
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    3,
    true,
    true,
    'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    'New',
    14
  ],
  [
    87,
    5,
    'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    4,
    true,
    false,
    'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    'New',
    14
  ],
  [
    11,
    2,
    'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    5,
    false,
    true,
    'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    'New',
    14
  ],

]

;

let result = [];
// let aa = ["1","2","3"];
// let bb = ["a","b","c"];
for (let i = 0; i < a.length; i++) {
  result.push(a[i].concat(b[i]));
}


console.log(result);
