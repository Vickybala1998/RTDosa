
    let cartItems=[];
    var myCarousel = new bootstrap.Carousel(document.getElementById('myCarousel'), {
        interval: false,
        wrap: false
    });

    function goToOrderPage(){
        window.location.href='orderOnline.html'
    }

   

    function goToHome(){
        window.location.href='index.html'
    }

    function scrollToTop() {
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera

    }

    function scrollFunction(){
        console.log("document resie")
        var ScrollTopButton=document.getElementById("scrollToTopbtn");
        var header=document.querySelector('nav');
        if(document.body.scrollTop>20 || document.documentElement.scrollTop>20){
            ScrollTopButton.style.display="block";
        }
        else{
            ScrollTopButton.style.display="none";
        }
        if(document.body.scrollTop>50 || document.documentElement.scrollTop>50){
            header.classList.add('scrolled');
        }
        else{
            header.classList.remove('scrolled');
        }
    }


   //Add Item to cart
   function addToCart(row){
    const itemValue=row.querySelector('td[data-item]').dataset.item;
    const itemPrice=parseFloat(row.querySelector('td[data-price]').dataset.price);
    console.log(itemValue,itemPrice)
    const item={itemValue,itemPrice};
    cartItems.push(item);
    updateCart()
}

function updateCart(){
  const cartElement=document.getElementById("cart-items");
  const totalElement=document.getElementById("total");
  //clear previous items
  cartElement.innerHTML='';

  //display Current Items
  cartItems.forEach(item=>{
    console.log(item)
    const itemElement=document.createElement('div');
    itemElement.classList.add('cart-item');
    itemElement.innerHTML=`
    <span>${item.itemValue}</span><span>${item.itemPrice.toFixed(2)}</span>`;
    cartElement.appendChild(itemElement)
    
  });
  const total=cartItems.reduce((sum, item) => sum + item.itemPrice, 0);
  console.log(total)
  totalElement.textContent = total.toFixed(2);

  
}
function checkout(){
    alert("your order placed successfully")
}