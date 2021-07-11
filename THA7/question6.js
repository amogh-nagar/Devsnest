var library = [
  { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 },
  { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245,
  },
];

var temp=library.map(item=>  item.libraryID)
temp.sort((a,b)=>b-a)

for(var i of temp){
    
    for(var j of library){
        if(i===j.libraryID){
            console.log(j);
        }
    }
}