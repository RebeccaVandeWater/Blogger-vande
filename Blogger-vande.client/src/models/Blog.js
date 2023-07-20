export class Blog {
  constructor(data) {
    this.id = data.id
    this.title = data.title
    this.body = data.body
    this.imgUrl = data.imgUrl
    this.tags = data.tags
    this.creator = data.creator
    this.creatorId = data.creatorId
    this.createdAt = new Date(data.createdAt).toLocaleDateString()
    this.updatedAt = new Date(data.updatedAt).toLocaleDateString()
    this.published = data.published
  }
}

// let blog = {
//   "_id": "6478fbb85bdd4f203d49d56b",
//   "title": "Cuppy cakes for my yummy face",
//   "body": "Cupcake ipsum dolor sit amet shortbread I love jelly. Lollipop chocolate soufflé candy lemon drops shortbread liquorice I love tart. Cookie candy sugar plum liquorice brownie cupcake pudding.\nCroissant soufflé marshmallow I love tiramisu shortbread cotton candy. Macaroon bonbon pie jujubes gummi bears halvah cotton candy. Apple pie cake gummies pastry bonbon. Ice cream candy canes wafer sweet bonbon chocolate bar powder.\nBrownie brownie soufflé macaroon I love. Tootsie roll gummies chupa chups dragée I love I love. Liquorice jelly-o candy croissant pudding macaroon carrot cake I love. Pie I love chupa chups cake cotton candy caramels pudding.\nFruitcake jelly-o halvah liquorice chupa chups. Lemon drops powder pastry macaroon sugar plum. Tiramisu lollipop sesame snaps chupa chups macaroon brownie apple pie gingerbread.\nTart soufflé jelly-o candy canes I love jelly beans. Croissant I love chupa chups tiramisu lemon drops wafer. Croissant pudding I love cookie bonbon caramels pastry candy canes. Biscuit bonbon sugar plum liquorice toffee.",
//   "imgUrl": "https://images.unsplash.com/photo-1615832494873-b0c52d519696?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
//   "tags": [
//     "cups",
//     "cakes",
//     "cupcakes",
//     "yummy face"
//   ],
//   "published": true,
//   "creatorId": "6303ba27fb047e3d0d698660",
//   "createdAt": "2023-06-01T20:12:40.870Z",
//   "updatedAt": "2023-06-01T20:12:40.870Z",
//   "__v": 0,
//   "creator": {
//     "_id": "6303ba27fb047e3d0d698660",
//     "subs": [
//       "auth0|6303ba26837b0d2b62e68435"
//     ],
//     "email": "jerms@jerms.jerms",
//     "name": "BIG GUY",
//     "picture": "https://media2.giphy.com/media/PXL0Co0RcDQu4/giphy.gif?cid=ecf05e47zvanfbnauf04qu5hfasl17byue24w60wnj6otwl9&ep=v1_gifs_search&rid=giphy.gif&ct=g",
//     "bio": "A troll figurine comes to life, and decides to roam the countryside eating garbage.",
//     "coverImg": "https://media2.giphy.com/media/4ayiIWaq2VULC/giphy.gif?cid=ecf05e47h4186v6v8l8aet14vlv8xsxjxzud2yikt2ciqq1p&ep=v1_gifs_search&rid=giphy.gif&ct=g",
//     "github": "",
//     "linkedin": "",
//     "resume": "",
//     "class": "",
//     "graduated": true,
//     "createdAt": "2023-06-01T15:20:58.001Z",
//     "updatedAt": "2023-06-01T15:42:47.495Z",
//     "__v": 0,
//     "id": "6303ba27fb047e3d0d698660"
//   },
//   "id": "6478fbb85bdd4f203d49d56b"
// }