let basketItems = document.querySelector("#basketItems");
let cartEmpty = document.querySelector(".cart-empty");
let basketList = document.querySelector(".basket-list");

function removeProduct(el, productId) {
    let productIndex = products.findIndex((p) => p.id == productId);

    products.splice(productIndex, 1);

    localStorage.setItem("products", JSON.stringify(products));

    if (products.length > 0) {
        el.closest("tr").remove();
    } else {
        checkProductEmpty();
    }

    updateBasketCount();

    CalcTotal();
}

function checkProductEmpty() {
    if (products.length == 0) {
        cartEmpty.classList.remove("d-none");
        basketList.classList.add("d-none");
    } else {
        cartEmpty.classList.remove("d-block");
        basketList.classList.remove("d-none");
    }
}

checkProductEmpty();


updateBasketCount();

function updatePrice(el, price, productId) {
    let parent = el.closest("tr");
    let quantityInput = el.closest(".quantity").querySelector('.quantity-input');
    let act = el.classList[1]
    let quantity = +quantityInput.value;

    if (quantity <= 0) return;

    quantityInput.value = act == 'plus' ?
        quantity + 1 :
        quantity - 1;

    let currentCount = +quantityInput.value;

    let product = products.find((p) => p.id == productId);
    price *= currentCount;
    product.count = currentCount;

    parent.querySelector('.subtotal').innerText = price;

    localStorage.setItem("products", JSON.stringify(products));

    CalcTotal();

    // let totalPrice = el.parentElement.parentElement.querySelector(".total-price");

    // totalPrice.innerText = price;

    // updateTotalCount();
}

products.forEach((product) => {
    basketItems.innerHTML = `
    <tr>
        <td>
            <button class="remove-product border-0 bg-transparent" onclick="removeProduct(event.target, ${product.id})">
                <i class="far fa-trash-alt text-danger"></i>
            </button>
        </td>
        <td>
            <img 
                class="product-image"
                src="${product.image}"
                alt="">
        </td>
        <td>
            <span> ${product.title}</span>
        </td>
        <td>
            <span class="symbol">$ <span class="price">${product.price}</span></span>
        </td>
        <td>
            <div class="quantity">
                    <button class="quantity-btn minus" onclick="updatePrice(event.target, ${product.price}, ${product.id})">-</button>
                <input type="number" value="${product.count}" class="quantity-input">
                <button class="quantity-btn plus" onclick="updatePrice(event.target, ${product.price}, ${product.id})">+</button>
            </div>
        </td>
        <td>
            <span class="symbol">$ <span class="price subtotal">${product.price * product.count}</span></span>
        </td>
    </tr>
      ` + basketItems.innerHTML;
});


function CalcTotal() {
    var total = 0;

    products.forEach((product) => {
        total += product.price * product.count;
    });

    document.querySelector(".total-amount").innerText = total;
}

CalcTotal();