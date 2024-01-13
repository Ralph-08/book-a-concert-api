const express = require("express");
const app = express();
const cors = require('cors');

let list = [ {
    id: "56404284-f74e-4419-a094-9597de574790",
    city: "Los Angeles, CA",
    venue: "Crypto Arena",
    date: "02/04/2024",
    image: "https://pics.craiyon.com/2023-07-17/14e09ab367ff42ef8015111da95a5843.webp",
    booked: true,
    confirmed: true
  },
  {
    id: "8785df9f-bbfd-4be4-a783-42271c5ae692",
    city: "New York City, NY",
    venue: "Madison Square Garden",
    date: "05/24/2024",
    image: "https://www.nyc.gov/assets/fdny/images/content/hero/2021-05-17-empire-ems-week.jpg",
    booked: false,
    confirmed: false
  },
  {
    id: "74dd40bb-90a4-42e3-b331-16eae0d41fcf",
    city: "Miami, FL",
    venue: "Kaseya Center",
    date: "09/29/2024",
    image: "https://pics.craiyon.com/2023-07-15/2cb7f0f6674e48b3abdf74bf21890f99.webp",
    booked: false,
    confirmed: false
  },
  {
  id: "74dd40bb-90a4-d42e3-b331-16eae0d41fcf",
  city: "Atlanta, GA",
  venue: "Mercedes Center",
  date: "08/18/2024",
  image: "https://assets-global.website-files.com/5ddedd0e3047ab406ee3c37e/64b82e133ccc91033dfb3418_MBS_20191117_ATLive-General-View_BM11916-scaled.jpg",
  booked: false,
  confirmed: false
},
{
  id: "74dd40bb-90fa4-42e3-b331-16eae0d41fcf",
  city: "Seattle, WA",
  venue: "Lumen Field",
  date: "06/29/2024",
  image: "https://cdn-alfeh.nitrocdn.com/qYQbJLwShodgTHXwdDypdovWRxrDsOQs/assets/images/optimized/rev-ffc2908/insightpestnorthwest.com/wp-content/uploads/2021/04/andrea-leopardi-QfhbK2pY0Ao-unsplash-1-1200x675.jpg",
  booked: false,
  confirmed: false
},
{
  id: "56404284-f74fe-4419-a094-9597de574790",
  city: "Los Angeles, CA",
  venue: "Crypto Arena",
  date: "02/04/2024",
  image: "https://pics.craiyon.com/2023-07-17/14e09ab367ff42ef8015111da95a5843.webp",
  booked: false,
  confirmed: false
},
]


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send(list);
});

app.put('/', (req, res) => {
  const foundvideo = list.find((video)=> req.body.id === video.id);
  foundvideo.booked = true;
  res.send(list);
})

app.listen("8080", () => {
  console.log("Server is running");
});
