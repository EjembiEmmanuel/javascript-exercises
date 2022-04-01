const getTheTitles = function(obj) {
  let titles = [];
  obj.forEach(function(obj) {
      titles.push(obj["title"]);
  });
  return titles;
};

const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]

console.log(getTheTitles(books));

// Do not edit below this line
module.exports = getTheTitles;
