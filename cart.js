const cartList = document.getElementById("cart-contain");

getCourses();
async function getCourses() {
  const cartData = await axios.get("http://localhost:3000/cartdata");
  console.log(cartData);
  const cdata = cartData.data.cartData;
  console.log(cdata);
  showCart(cdata);
}

function showCart(cart) {
  console.log(cart);
  cartList.innerHTML = " ";
  const now = new Date();
  const cutoffDate = new Date(now);
  cutoffDate.setDate(now.getDate() - 1); // 2 days ago

  // Filter cart items added in the last 2 days
  const recentItems = cart.filter(
    (item) => new Date(item.date_added) >= cutoffDate
  );

  // Handle the case where no recent items are found
  if (recentItems.length === 1) {
    cartList.innerHTML = "<p>No items added in the last 1 day.</p>";
    return;
  }

  recentItems.forEach((cartitem) => {
    console.log(cartitem);
    const { cart_id, courses_id, quantity, date_added, status } = cartitem;

    const cartEl = document.createElement("div");

    cartEl.classList.add("cartitem");

    cartEl.innerHTML = `
        
          <div class="cart-list-container">
  
           
            <div class="course-module">
              <div class="course-card">
                <div class="course-card-img-container">
                 
         </div>
  
                <div class="course-card-main-content">
               cart Id:${cart_id}
                    <h3>course Id:${courses_id}</h3>
                  </a>
                  <h4>
                   Quantity:${quantity}
                  </h4>
                  <div class="course-card-instructor">
                    
                  <div class="starrating">
               
                    <span class="numbers">Date:${date_added}</span>
                    <div class="levels">
                      Status:${status}
             
   
                  
                </div>

             
              </div>
            </div>
          </div>
        
      `;

    cartList.appendChild(cartEl);
  });
}

// const deletecart = document.querySelectorAll("delete-Cart");
// const coursecard = document.querySelectorAll("course-card");
// /* <div class="addto-Cart" onclick="deleteCart(${cart_id})"><h2>Delete Cart</h2></div> */
// deletecart.addEventListener("click", () => {
//   coursecard.classList.remove("course-card");
// });
