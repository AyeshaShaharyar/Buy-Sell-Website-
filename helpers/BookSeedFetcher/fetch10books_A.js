const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


let title, coverMedium,authors;
let isbnNum;

const tenBooksISBN = [
//first ten is children's books
  // "1564021017",
  // "0060011106",
  // "9780810956339",
  // "9780312490263",
  // "0064442977",

  // "9781402729768",
  // "0192796860",
  // "9780152053901",
  // "0590929747",
  // "0763603171"

//next five is science fiction
// "0688131379",
// "0060929871",
// "0375761187",
// "0486270718",
// "0452284236"

//next five is history
"0321047907",
"0205406211",
"8420660132",
"0312330022",
"0764552422"



]



let responses=[];

for (let i=0; i<tenBooksISBN.length; i++)
{
    fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${tenBooksISBN[i]}&jscmd=data&format=json`, {
  method: 'GET',
})
  .then(res => res.json())
  .then(json => {
    let book=`ISBN:${tenBooksISBN[i]}`;
    // console.log(book);
    // console.log(json[book].subjects);
    // console.log(json[book].title);
    title = json[book].title;
    coverMedium=json[book].cover.medium;
    authors=json[book].authors[0].name;
    // category=json[book].subjects[0].name;
    // console.log({authors, coverMedium, title});
    let price,rating,review,seller_id,isFeatured,isSold;
    let j=i+1;
    responses.push( `'${j}','${title}', '${authors}', '${coverMedium}'` );

    console.log(responses);
  })
  .catch(err => console.log(err));
}


