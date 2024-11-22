let x = document.querySelector(".register");
console.log(x);
x.addEventListener("click", function () {
  let name = prompt("فروشنده یا خریدار ؟");
  alert(name);
  switch (name) {
    case "فروشنده": {
      window.location.href = "./Seller-Page.html";
      break;
    }
    case "خریدار": {
      window.location.href = "./buyer.html";
      break;
    }
    default: {
      alert("لطفا فروشنده یا خریدار را انتخاب کنید");
      break;
    }
  }
});
