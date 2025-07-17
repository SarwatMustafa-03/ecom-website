 let productsDiv = document.getElementById("products");
async function fetchFromServer() {
  try {
    let fetchData = await fetch("https://dummyjson.com/products");
    let jsonData = await fetchData.json();
    let productsArr = jsonData.products;
    productsArr.forEach((item) => {
      let productDets = document.createElement("div");
      productDets.innerHTML = `

    <div class="product-header">
    
             <img src="${item.thumbnail}" alt="${item.title}" />


                <div class="product-info">
                   <h3>${item.title}</h3>
                <p><strong>Brand</strong>: ${item.brand}</p>
                   <p><strong>Price</strong>:${item.price}$</p>
                   <p><strong>Rating</strong>: ${item.rating} ⭐</p>
                  <p><Strong>Availability</strong>:${item.availabilityStatus}</p>
    
                  <div>
                     <strong>Tag:</strong> ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ')}
                  </div>
                
           </div>

               <div class="reviews">
                 <h3>Customer Reviews:</h3>
                  ${item.reviews.map(review => `
                  <div class="review">
                      <span>${review.reviewerName}</span> (${review.rating}⭐): ${review.comment}
                  </div>
                  `).join('')}
              </div>
          
          <div class="footer>
              <p><strong>Warranty</strong>:${item.warrantyInformation}</p>
              <p><strong>Shipping</strong>:${item.shippingInformation}</p>
              <p><strong>Return Polich</strong>:${item.title}</p>
          </div>
    </div>
        `;
      productsDiv.appendChild(productDets);
    });
  } catch (error) {
    productsDiv.innerText = "There was some error fetching data from server";
    console.log(error);
  }
}

fetchFromServer();
