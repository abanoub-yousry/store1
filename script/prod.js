let productImg = document.getElementById("product-img");
let productName = document.getElementById("name");
let productCategory = document.getElementById("brand");
let productPrice = document.getElementById("price");
let productPar = document.getElementById("par");
const id = new URLSearchParams(window.location.search).get("id");
fetch(`https://json-server-brown-five.vercel.app/products?id=${id}`)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    productImg.src = data[0].img;
    productName.innerHTML = data[0].name;
    productCategory.innerHTML = data[0].category;
    productPrice.innerHTML = `$${data[0].price}`;
    productPar.innerHTML = data[0].description;
  });

function scrollToTop() {
  document.documentElement.scrollTop = 0;
}

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollToTopBtn").style.display = "none";
  }
};

/** ----------- Navbar ----------- */
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
document.getElementById("share-button").addEventListener("click", function() {
  var pageUrl = window.location.href; // جلب رابط الصفحة الحالية
  var phoneNumber = "201094146311";  // الرقم الذي تريد إرسال الرابط إليه
  var message = `Hi! Check out this page: ${pageUrl}`; // الرسالة المرسلة
  var whatsappURL = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, "_blank"); // فتح WhatsApp مع الرابط
});
