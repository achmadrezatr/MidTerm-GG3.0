# API Documentation

## Database Structure

### `thumbnail` Collection

- `videoId`: The ID of the video (String, required).
- `url`: The URL of the thumbnail image (String, required).

### `product` Collection

- `VideoID`: The ID of the video (String, required).
- `ProductID`: The ID of the product (String, required).
- `LinkProduct`: The link to the product page (String, required).
- `Title`: The title of the product (String, required).
- `Price`: The price of the product (Number, required).

### `comment` Collection

- `videoId`: The ID of the video (String, required).
- `username`: The username of the commenter (String, required).
- `comment`: The comment text (String, required).
- `timestamps`: The timestamp of the comment (automatically generated, Date type).

## API Structure

### `GET /thumbnail`

Retrieve all thumbnails, including their `videoId` and `url`.

### `GET /thumbnail/:id`

Retrieve the details of a specific thumbnail by `videoId`.

### `POST /thumbnail`

Add a new thumbnail to the database.

### `GET /product/:videoId`

Retrieve all products related to a specific video by `videoId`.

### `POST /comment`

Add a new comment for a video.

### `GET /comment/:videoId`

Retrieve all comments for a specific video by `videoId`.

## List of API Requests and Responses
### `GET /thumbnail`

**Description:** Retrieve all thumbnails, including their `videoId` and `url`.

**URL:** http://localhost:27017/thumbnail

**Response:**

Status Code: 200 (OK)

```json
[
  {
    "videoId": "abc123",
    "url": "https://example.com/thumbnail1.jpg"
  },
  {
    "videoId": "def456",
    "url": "https://example.com/thumbnail2.jpg"
  },
  ...
]
```
### `GET /thumbnail/:videoId`

**Description:** Retrieve all products related to a specific video by videoId.

**URL:** http://localhost:27017/thumbnail/qweasdzxc6

**Response:**

Status Code: 200 (OK)

```json
[
  {
    "VideoID": "abc123",
    "ProductID": "p1",
    "LinkProduct": "https://example.com/product1",
    "Title": "Product 1",
    "Price": 19.99
  },
  {
    "VideoID": "abc123",
    "ProductID": "p2",
    "LinkProduct": "https://example.com/product2",
    "Title": "Product 2",
    "Price": 29.99
  },
  ...
]
```
### `POST /thumbnail`

**Description:**  Add a new comment for a video.

**URL:** http://localhost:27017/thumbnail

**Request:**

```json
{
    "videoId": "1238dfsdfsd",
    "url":"asdjasdnkjasndkansdklaslkdm"
}
```
**Response:**

Status Code: 200 (OK)

```json
{
    "message": "success"
}
```

### `GET /product/:videoId`

**Description:** Retrieve all products related to a specific video by videoId.

**URL:** http://localhost:27017/product/qweasdzxc6

**Response:**

Status Code: 200 (OK)

```json
[
    {
        "_id": "64c2d31a89c7ec3ba9eaef69",
        "videoId": "qweasdzxc6",
        "productId": "66sadasfwesgfsd",
        "link Product": "https://www.tokopedia.com/ultramilk/ultra-milk-susu-uht-rasa-paket-isi-6pcs-moka-karamel-taro-moka",
        "title": "Susu UHT Strawberry",
        "price": 7000
    },
    {
        "_id": "64c2ea6e43aba3f9e51b61b8",
        "videoId": "qweasdzxc6",
        "productId": "73sadasfwesgfsd",
        "link Product": "https://www.tokopedia.com/ultramilk/ultra-milk-susu-uht-rasa-paket-isi-6pcs-moka-karamel-taro-moka",
        "title": "Susu UHT Strawhat 1L",
        "price": 20000
    }
]
```
### `POST /comment`

**Description:**  Add a new comment for a video.

**URL:** http://localhost:27017/comment

**Request:**

```json
{
    "username": "andi3",
    "comment": "saya suka susu",
    "videoId": "qweasdzxc6"
}
```
**Response:**

Status Code: 200 (OK)

```json
{
    "message": "success"
}
```
### `GET /comment/:videoId`

**Description:** Retrieve all products related to a specific video by videoId.

**URL:** http://localhost:27017/comment/qweasdzxc6

**Response:**

Status Code: 200 (OK)

```json
[
    {
        "_id": "64c2ffa357aadb3600b68e6c",
        "videoId": "qweasdzxc6",
        "username": "Lebah Ganteng",
        "comment": "saya suka susu rasa stawhat",
        "timestamps": "2023-07-27T23:37:07.754Z",
        "createdAt": "2023-07-27T23:37:07.759Z",
        "updatedAt": "2023-07-27T23:37:07.759Z",
        "__v": 0
    },
    {
        "_id": "64c30e71d8407cb0e308478c",
        "videoId": "qweasdzxc6",
        "username": "andi",
        "comment": "saya suka susu",
        "createdAt": "2023-07-28T00:40:17.252Z",
        "updatedAt": "2023-07-28T00:40:17.252Z",
        "__v": 0
    },
 ]
```

Status Code: 400 (Error)

```json
{
   message: "fail" 
}
```


## How to Run in Local

To run the API on your local machine, follow these steps:

1. Install Node.js and npm (Node Package Manager) if you haven't already.

2. Clone the API repository from the GitHub repository:

```bash
git clone https://github.com/achmadrezatr/MidTerm-GG3.0.git
```

3. Change into the project directory:

```bash
cd MidTerm-GG3.0.git
```

4. Install the required dependencies:

```bash
npm install
```

5.set env variable

```dotenv
DATABASE_URL=mongodb://localhost:27017/midTerm-GG3.0
PORT=3000
```

6. Start the API Server

```bash
npm start
```
