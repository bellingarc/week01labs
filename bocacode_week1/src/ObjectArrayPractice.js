// let recipe = {
//     title: 'nachos',
//     servings: 3,
//     ingredients: ['cheese', 'jalapenos', 'chips']
// }
// const {title,  servings, ingredients} = recipe
// console.log(title)
// console.log(servings)
// console.log(ingredients[0])
// console.log(ingredients[1])
// console.log(ingredients[2])

//
//

let bookshelf = [
    {
        title: 'book1',
        author: 'author1',
        alreadyRead: true
    },
    {
        title: 'book2',
        author: 'author1',
        alreadyRead: false
    },
    {
        title: 'book3',
        author: 'author2',
        alreadyRead: true
    },
    {
        title: 'book4',
        author: 'author2',
        alreadyRead: false
    }
]

console.log(bookshelf[1].author)

for (i=0;i<bookshelf.length;i++){
    const {title, author, alreadyRead} = bookshelf[i]
if (alreadyRead){
    console.log(`You have already read ${title}`)
}
else{ console.log(`You have not yet read ${title}`)}
}
