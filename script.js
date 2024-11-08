// const { default: axios } = require("axios");

let data = [];
const courseList = document.querySelector(".course-list");
const cartList = document.getElementById("cart-contain");
console.log(cartList);
// console.log(courseList);
const highest = document.querySelector(".highest");
getCourses();
async function getCourses() {
  const courseData = await axios.get("http://localhost:3000/");
  data = courseData.data.courseData;
  const cartData = await axios.get("http://localhost:3000/cartdata");
  console.log(cartData);
  console.log(courseData);

  showCourses(courseData.data.courseData);
}

async function addToCart(id) {
  const { data } = await axios.post(`http://localhost:3000/cart/${id}`, {
    quantity: 1,
    status: "active",
  });

  console.log(id, "123");
}

function showCourses(courses) {
  console.log(courses);

  courseList.innerHTML = " ";

  courses.forEach((course) => {
    const {
      id,
      image,
      coursename,
      courselink,
      description,
      source,
      rating,
      ratingimage,
      ratingnumber,
      duration,
      scores,
      popups,
      firstprice,
      secondprice,
    } = course;
    const Rating = [rating, ratingimage, ratingnumber];
    const courseEl = document.createElement("div");

    courseEl.classList.add("course");

    courseEl.innerHTML = `
      
        <div class="course-list-container">

         
          <div class="course-module">
            <div class="course-card">
              <div class="course-card-img-container">
                <img src="${image}"/>
       </div>

              <div class="course-card-main-content">
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
  
  <div class="prices">
      <div class="first">${firstprice}</div>
        <div class="second">${secondprice}</div>
      </div>

<div class="popup">

<div class="popup-heading"><h2>What you'll learn</h2></div>

<p class="one">${popups}</p>

<div class="addto-Cart" onclick="addToCart(${id})"><h2>Add to Cart</h2></div>


<div class="circle"></div>
<i class="fa fas-heart"></i>
</div>

                
              </div>
            </div>
          </div>
        </div>

            <div class="toggle-udcartlist">
      <h2>Your cart is${id}</h2>
      <a href="https://www.udemy.com/"><h3>keep shopping</h3></a>
    </div>
      
    `;

    courseList.appendChild(courseEl);

    // let Ratings = ["4.5", "4.0", "3.5", "3.0"];

    const coursecontent = document.querySelectorAll(
      ".course-card-main-content"
    );

    coursecontent.forEach((element) => {
      const popup = element.querySelector(".popup");

      element.addEventListener("mouseover", () => {
        popup.classList.add("popup-show");
      });

      element.addEventListener("mouseout", () => {
        popup.classList.remove("popup-show");
      });
      popup.addEventListener("mouseover", () => {
        popup.classList.add("popup-show");
      });
      popup.addEventListener("mouseout", () => {
        popup.classList.remove("popup-show");
      });
    });
  });
}

const categories = document.querySelector(".nav-categories");
const hovsection = document.querySelector(".hove-section");

categories.addEventListener("mouseover", () => {
  hovsection.classList.add("hove-section-active");
  toggleUdbusiness.classList.remove("toggle-Udbusiness-active");
});

categories.addEventListener("mouseout", () => {
  hovsection.classList.remove("toggle-hovesection-active");
});

hovsection.addEventListener("mouseover", () => {
  hovsection.classList.add("hove-section-active");
});

hovsection.addEventListener("mouseout", () => {
  hovsection.classList.remove("hove-section-active");
});

const udbusiness = document.querySelector(".udbusiness");
const toggleUdbusiness = document.querySelector(".toggle-Udbusiness");
const udteach = document.querySelector(".udteach");
const toggleUdteach = document.querySelector(".toggle-Udteach");

udbusiness.addEventListener("mouseover", () => {
  hovsection.classList.remove("hove-section-active");
  toggleUdteach.classList.remove("toggle-Udteach-active");
  toggleUdbusiness.classList.add("toggle-Udbusiness-active");
});

udbusiness.addEventListener("mouseout", () => {
  toggleUdbusiness.classList.remove("toggle-Udbusiness-active");
});
toggleUdbusiness.addEventListener("mouseover", () => {
  toggleUdbusiness.classList.add("toggle-Udbusiness-active");
});
toggleUdbusiness.addEventListener("mouseout", () => {
  toggleUdbusiness.classList.remove("toggle-Udbusiness-active");
});

udteach.addEventListener("mouseover", () => {
  toggleUdbusiness.classList.remove("toggle-Udbusiness-active");
  toggleUdlearning.classList.remove("toggle-Udlearning-active");

  toggleUdteach.classList.add("toggle-Udteach-active");
});
udteach.addEventListener("mouseout", () => {
  toggleUdteach.classList.remove("toggle-udteach-active");
});
toggleUdteach.addEventListener("mouseover", () => {
  toggleUdteach.classList.add("toggle-Udteach-active");
});

toggleUdteach.addEventListener("mouseout", () => {
  toggleUdteach.classList.remove("toggle-Udteach-active");
});

const udlearning = document.querySelector(".udlearning");
const toggleUdlearning = document.querySelector(".toggle-Udlearning");

udlearning.addEventListener("mouseover", () => {
  toggleUdteach.classList.remove("toggle-Udteach-active");
  toggleUdwishlist.classList.remove("toggle-udwishlist-active");

  toggleUdlearning.classList.add("toggle-Udlearning-active");
});

udlearning.addEventListener("mouseout", () => {
  toggleUdlearning.classList.add("toggle-Udlearning-active");
});

toggleUdlearning.addEventListener("mouseover", () => {
  toggleUdlearning.classList.add("toggle-Udlearning-active");
});

toggleUdlearning.addEventListener("mouseout", () => {
  toggleUdlearning.classList.remove("toggle-Udlearning-active");
});

const udwishlist = document.querySelector(".udwishlist");
const toggleUdwishlist = document.querySelector(".toggle-udwishlist");
const udcartlist = document.querySelector(".udcartlist");
const toggleUdcartlist = document.querySelector(".toggle-udcartlist");

udwishlist.addEventListener("mouseover", () => {
  toggleUdlearning.classList.remove("toggle-Udlearning-active");
  toggleUdcartlist.classList.remove("toggle-udcartlist-active");

  toggleUdwishlist.classList.add("toggle-udwishlist-active");
});

udwishlist.addEventListener("mouseout", () => {
  toggleUdwishlist.classList.remove("toggle-udwishlist-active");
});
toggleUdwishlist.addEventListener("mouseover", () => {
  toggleUdwishlist.classList.add("toggle-udwishlist-active");
});

toggleUdwishlist.addEventListener("mouseout", () => {
  toggleUdwishlist.classList.remove("toggle-udwishlist-active");
});

udcartlist.addEventListener("mouseover", () => {
  toggleUdwishlist.classList.remove("toggle-udwishlist-active");
  toggleUdbellicon.classList.remove("toggle-udbellicon-active");

  toggleUdcartlist.classList.add("toggle-udcartlist-active");
});

udcartlist.addEventListener("mouseout", () => {
  toggleUdcartlist.classList.remove("toggle-udcartlist-active");
});

toggleUdcartlist.addEventListener("mouseover", () => {
  toggleUdcartlist.classList.add("toggle-udcartlist-active");
});
toggleUdcartlist.addEventListener("mouseout", () => {
  toggleUdcartlist.classList.remove("toggle-udcartlist-active");
});

const udbellicon = document.querySelector(".udbellicon");
const toggleUdbellicon = document.querySelector(".toggle-udbellicon");
const udnameAS = document.querySelector(".name-AS");
const toggleUdnameAS = document.querySelector(".toggle-name");
udbellicon.addEventListener("mouseover", () => {
  toggleUdlearning.classList.remove("toggle-name-active");
  toggleUdcartlist.classList.remove("toggle-udcartlist-active");
  toggleUdbellicon.classList.add("toggle-udbellicon-active");
});

udbellicon.addEventListener("mouseout", () => {
  toggleUdbellicon.classList.remove("toggle-udbellicon-active");
});
toggleUdbellicon.addEventListener("mouseover", () => {
  toggleUdbellicon.classList.add("toggle-udbellicon-active");
});

toggleUdbellicon.addEventListener("mouseout", () => {
  toggleUdbellicon.classList.remove("toggle-udbellicon-active");
});

udnameAS.addEventListener("mouseover", () => {
  toggleUdbellicon.classList.remove("toggle-udbellicon-active");

  toggleUdnameAS.classList.add("toggle-name-active");
});

udnameAS.addEventListener("mouseout", () => {
  toggleUdnameAS.classList.remove("toggle-name-active");
});

toggleUdnameAS.addEventListener("mouseover", () => {
  toggleUdnameAS.classList.add("toggle-name-active");
});

toggleUdnameAS.addEventListener("mouseout", () => {
  toggleUdnameAS.classList.remove("toggle-name-active");
});

/////////////////////////////////////////////////////////////////////

const upArrow = document.querySelector(".uparrow1");
// console.log(upArrow);
const contentwrapper = document.querySelector(".panel-module-content-wrapper");

upArrow.addEventListener("click", () => {
  // console.log("123");

  {
    contentwrapper.classList.contains("panel-module-content-wrapper-hidden")
      ? contentwrapper.classList.remove("panel-module-content-wrapper-hidden")
      : contentwrapper.classList.add("panel-module-content-wrapper-hidden");
  }
});

// const languagecontent = document.querySelectorAll(".language-content");

const panelmodule = document.querySelectorAll(".panel-module");
// const uparrowall = document.querySelector(".uparrow");
panelmodule.forEach((module, index) => {
  const uparrowall = module.querySelector(".uparrow");
  const languagecontent = module.querySelector(".language-content");
  // console.log(languagecontent);
  uparrowall.addEventListener("click", () => {
    // console.log(index);
    {
      languagecontent.classList.contains("language-content-hidden")
        ? languagecontent.classList.remove("language-content-hidden") &&
          languagecontent.classList.add("language-content-show")
        : languagecontent.classList.add("language-content-hidden") &&
          languagecontent.classList.remove("language-content-show");
    }
  });
});

const btnbar = document.querySelector(".btn-bar");
const mobilename = document.querySelector(".mobile-name1");

const closebutton = document.querySelector(".close-btn");
// console.log(closebutton);

http: btnbar.addEventListener("click", () => {
  mobilename.classList.add("mobile-name1-show");
  closebutton.classList.remove("close-btn-hidden");
  closebutton.classList.add("close-btn-show");
});

closebutton.addEventListener("click", () => {
  mobilename.classList.remove("mobile-name1-show");
  closebutton.classList.add("close-btn-show");
  closebutton.classList.remove("close-btn-show");
});
const btnside = document.querySelector(".mobile-btn-side");
const btnright = document.querySelector(".mobile-btn-right");
const menubar = document.querySelector(".mobile-menu");

btnright.addEventListener("click", () => {
  menubar.classList.add("mobile-menu-show");
});
btnside.addEventListener("click", () => {
  menubar.classList.remove("mobile-menu-show");
  mobilename.classList.add("mobile-name1-show");
});
const closebuttonmobile2 = document.querySelector(".close-btn-mobile");

const headermobile = document.querySelector(".header-container-mobile");
const mainpage = document.querySelector(".main-page");
const results = document.querySelector(".results");
const btnfilter = document.querySelector(".btn-ud ");
const filtersidebar = document.querySelector(".filterpanel-sidebar");
btnfilter.addEventListener("click", () => {
  filtersidebar.classList.add("filterpanel-sidebar-show");
  results.classList.add("results-show");
  mainpage.classList.add("main-page-show");
  headermobile.classList.add("header-container-mobile-hidden");
  closebuttonmobile2.classList.add("close-btn-mobile-show");
});
closebuttonmobile2.addEventListener("click", () => {
  filtersidebar.classList.remove("filterpanel-sidebar-show");
  results.classList.remove("results-show");
  mainpage.classList.remove("main-page-show");
  headermobile.classList.remove("header-container-mobile-hidden");
  closebuttonmobile2.classList.remove("close-btn-mobile-show");
});

// const coursecard = document.querySelectorAll(".course-card");
// coursecard.forEach((cc) => {
// const maincontent = cc.getElementsByClassName("course-card-main-content");
// console.log(maincontent);
// maincontent[0].addEventListener("click", () => {
//   console.log("147");
// });

// });
btnheader = document.querySelector(".btn");
// console.log(btnheader);
barheader = document.querySelector(".btn-bar");
btnheaderimg = document.querySelector(".ud-img");
cartlistheader = document.querySelector(".udcartlistm");
searchfor = document.querySelector(".searchfor");
searchcontainer = document.querySelector(".searchcontainer");

searchclose = document.querySelector(".searchclose");
btnheader.addEventListener("click", () => {
  // console.log(123);
  barheader.classList.add("btn-bar-hidden");
  btnheaderimg.classList.add("ud-img-hidden");
  cartlistheader.classList.add("udcartlistm-hidden");
  btnheader.classList.add("btn-hidden");
  searchfor.classList.add("searchfor-show");
  searchcontainer.classList.add("searchcontainer-show");
});
searchclose.addEventListener("click", () => {
  barheader.classList.remove("btn-bar-hidden");
  btnheaderimg.classList.remove("ud-img-hidden");
  cartlistheader.classList.remove("udcartlistm-hidden");
  btnheader.classList.remove("btn-hidden");
  searchfor.classList.remove("searchfor-show");
  searchcontainer.classList.remove("searchcontainer-show");
});

ratingradio = document.querySelectorAll(".ulradio li #a");

// console.log(ratingradio);
ratingradio.forEach((r) => {
  // console.log(r);
  // atext = r.("label#a_text");
  // console.log(data);

  r.addEventListener("change", () => filterData(r.value));
});

function filterData(altText) {
  courseList.innerHTML = "";
  console.log(altText);
  data.forEach((d) => {
    console.log(d);
    if (Number(d.rating) >= Number(altText)) {
      const courseEl = document.createElement("div");
      courseEl.classList.add("course");

      courseEl.innerHTML = `
      
  <div class="course-list-container">

   
    <div class="course-module">
      <div class="course-card">
        <div class="course-card-img-container">
          <img src="${d.image}"/>
 </div>

        <div class="course-card-main-content">
          <a href="${d.courselink}">
            <h3>${d.coursename}</h3>
          </a>
          <h4>
           ${d.description}
          </h4>
          <div class="course-card-instructor">
            The <strong>Net</strong>
            <strong>Ninja</strong> (Shaun pelling)
          </div>
          <div class="starrating">
            <span class="point">${d.rating}</span>
            <img src="${d.ratingimage}" />
            <span class="numbers">${d.ratingnumber}</span>
            <div class="levels">
              ${d.duration}
            </div>
            <span class="highest">${d.scores}</span>

</div>

<div class="prices">
<div class="first">${d.firstprice}</div>
  <div class="second">${d.secondprice}</div>
</div>

<div class="popup">

<div class="popup-heading"><h2>What you'll learn</h2></div>

<p class="one">${d.popups}</p>

<div class="addto-Cart"><h2>Add to Cart</h2></div>
<div class="circle"></div>
<i class="fa fas-heart"></i>
</div>

          
        </div>
      </div>
    </div>
  </div>

`;
      courseList.appendChild(courseEl);
    }
  });
}
// optionfilter = document.querySelector(".optionfilter .select-form");
selectform = document.querySelector(".select-form");

console.log(selectform.value);

selectform.addEventListener("click", () => {
  filteroptions(4.5);
});
function filteroptions(optionfilter) {
  courseList.innerHTML = "";

  data.forEach((d) => {
    if (Number(d.rating) >= Number(optionfilter)) {
      const courseEl = document.createElement("div");
      courseEl.classList.add("course");

      courseEl.innerHTML = `
      
  <div class="course-list-container">

   
    <div class="course-module">
      <div class="course-card">
        <div class="course-card-img-container">
          <img src="${d.image}"/>
 </div>

        <div class="course-card-main-content">
          <a href="${d.courselink}">
            <h3>${d.coursename}</h3>
          </a>
          <h4>
           ${d.description}
          </h4>
          <div class="course-card-instructor">
            The <strong>Net</strong>
            <strong>Ninja</strong> (Shaun pelling)
          </div>
          <div class="starrating">
            <span class="point">${d.rating}</span>
            <img src="${d.ratingimage}" />
            <span class="numbers">${d.ratingnumber}</span>
            <div class="levels">
              ${d.duration}
            </div>
            <span class="highest">${d.scores}</span>

</div>

<div class="prices">
<div class="first">${d.firstprice}</div>
  <div class="second">${d.secondprice}</div>
</div>

<div class="popup">

<div class="popup-heading"><h2>What you'll learn</h2></div>

<p class="one">${d.popups}</p>

<div class="addto-Cart"><h2>Add to Cart</h2></div>
<div class="circle"></div>
<i class="fa fas-heart"></i>
</div>

          
        </div>
      </div>
    </div>
  </div>

`;
      courseList.appendChild(courseEl);
    }
  });
}
// function selectoptions() {
//   optionfilter[2].addEventListener("click", () => {
//     console.log(123);
//   });
// }
