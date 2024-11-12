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
    const {
      cart_id,
      courses_id,
      quantity,
      date_added,
      status,
      source,
      image,
      courselink,
      coursename,
      description,
      duration,
      scores,
      rating,
      ratingimage,
      ratingnumber,
    } = cartitem;
    const Rating = [rating, ratingimage, ratingnumber];
    const cartEl = document.createElement("div");

    cartEl.classList.add("cartitem");

    cartEl.innerHTML = `
        
          <div class="cart-list-container">

<div class="course-module">
<div class="course-card">
<div class="course-card-img-container">
<img src="${image}"/>
</div>

<div class="course-card-main-content">
<h3>cart Id :${cart_id}<h3>
<h3>Courses Id :${courses_id}<h3>
<h3>Quantity : ${quantity}<h3>
<h3>Date :${date_added}<h3>
<h3>Status :${status}<h3>
<a href="${courselink}">
<h3>${coursename}</h3>
</a>
<h4>
${description}
</h4>
<div class="course-card-instructor">
The <strong>Net</strong>
<strong>Ninja</strong> (Shaun pelling)
</div>
<div class="starrating">
<span class="point">${Rating[0]}</span>
<img src="${Rating[1]}" />
<span class="numbers">${Rating[2]}</span>
<div class="levels">
${duration}
</div>
<span class="highest">${scores}</span>

</div>
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
