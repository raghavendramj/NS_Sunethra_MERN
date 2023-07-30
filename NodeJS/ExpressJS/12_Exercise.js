const express = require("express");
const app = express();

let products = [
  { id: 1, name: "Apple Iphone 13", category: "Mobile", price: "20_000" },
  { id: 2, name: "Sony Bravia A80J", category: "Television", price: "60_000" },
  { id: 3, name: "S22 Ultra", category: "Mobile", price: "30_000" },
  { id: 4, name: "Boat Lite Earpods", category: "Accessories", price: "2_000" },
  { id: 5, name: "Iphone Charger", category: "Accessories", price: "2_500" },
  { id: 6, name: "LG C12", category: "Television", price: "50_000" },
];

app.get("/api/products", (req, res) => {
  res.send(products);
});

app.get("/api/productshtml", (req, res) => {
  const start = `<table>
                <thead>
                <th>Id</th>  
                <th>Name</th> 
                <th>Category</th> 
                <th>Price</th> 
                </thead>
                <tbody> `;

  const end = `</tbody> 
              </table>`;
  let middle = products
    .map((each) => {
      return `
        <tr>
            <td>${each.id}</td> 
            <td>${each.name}</td> 
            <td>${each.category}</td> 
            <td>${each.price}</td> 
            <td><button><a href="http://localhost:8082/api/products/${each.id}"></a>Delete</button></td> 
        </tr>
    `;
    })
    .join("");

  res.send(start + middle + end);
});

app.delete("/api/products/:id", (req, res) => {
  const id = parseInt(req.param("id"));
  let cityIndex = cities.findIndex(city[query] === requestParam);
  console.log(`cityIndex :- ${cityIndex}`);

  if (cityIndex == -1) {
    return `No city found for ${query} ${requestParam}`;
  }
  products.splice(cityIndex, 1);
  res.send("http://localhost:8082/api/productshtml");
});

const port = process.env.PORT || "8082";
app.listen(port, () => console.log(`Listening to port ${port}`));
