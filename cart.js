// 1st cart-Item event handler program;
document.getElementById("phone-decrement").addEventListener("click", function () {
    handleProductChange('phone', false);
})

document.getElementById("phone-increment").addEventListener("click", function () {
    handleProductChange('phone', true);
})


// 2nd cart Item event handler program;
document.getElementById("case-decrement").addEventListener("click", function () {
    handleProductChange('case', false);
})

document.getElementById("case-increment").addEventListener("click", function () {
    handleProductChange('case', true);
})

// Optimize function for Case/Phone product;
function handleProductChange(product, isIncrease) {
    const productCount = getInputValue(product);

    // conditon for input increase or decrease;
    let productNewCount = productCount;
    if (isIncrease == true) {
        productNewCount = productCount + 1;
    }
    if (isIncrease == false && productCount > 0) {
        productNewCount = productCount - 1;
    }
    document.getElementById(product + '-count').value = productNewCount;

    // condition for phone price and case price;
    let productPrice = 0;
    if (product == 'phone') {
        productPrice = productNewCount * 599;
    }
    if (product == 'case') {
        productPrice = productNewCount * 59;
    }
    document.getElementById(product + "-price").innerText = '$' + productPrice;
    calculateTotal();
}

function calculateTotal() {
    const phoneCount = getInputValue('phone');
    const caseCount = getInputValue('case');

    const subTotalPrice = phoneCount * 599 + caseCount * 59;
    document.getElementById('subtotal-price').innerText = '$' + subTotalPrice;

    const productTax = Math.round(subTotalPrice * 0.4);
    document.getElementById('product-tax').innerText = '$' + productTax;

    const totalAmount = subTotalPrice + productTax;
    document.getElementById('total-amount').innerText = '$' + totalAmount;
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    return productCount;
}

//  Check Out button Event handler;
document.getElementById("check-out").addEventListener("click", function () {
    Swal.fire(
        'Good job!',
        'You bought a iPhone with iPhone cover by paid of too much money',
        'success'
    )
})




/**   working code;

// add a function for Phone product;
function handlePhoneChange(isIncrease) {
    const phoneInput = document.getElementById("phone-count");
    const phoneCount = parseInt(phoneInput.value);
    let newPhoneCount = phoneCount;
    if (isIncrease == true) {
        newPhoneCount = phoneCount + 1;
    }
    if (isIncrease == false && phoneCount > 1) {
        newPhoneCount = phoneCount - 1;
    }
    phoneInput.value = newPhoneCount;
    const phonePrice = newPhoneCount * 599;
    document.getElementById("phone-price").innerText = '$' + phonePrice;
}

//  add a function for case product;
function handleCaseChange(isIncrease) {
    const caseInput = document.getElementById("case-count");
    const caseCount = parseInt(caseInput.value);
    let newCaseCount = caseCount;
    if (isIncrease == true) {
        newCaseCount = caseCount + 1;
    }
    if (isIncrease == false && caseCount > 1) {
        newCaseCount = caseCount - 1;
    }
    caseInput.value = newCaseCount;
    const casePrice = newCaseCount * 59;
    document.getElementById("case-price").innerText = '$' + casePrice;
}
*/

/** working code;
//  Add eventListener for case-count;
document.getElementById("phone-increment").addEventListener('click', function(){
    const phoneInput = document.getElementById("phone-count");
    const phoneInputNumber = parseInt(phoneInput.value);
    const newphoneInputNumber = phoneInputNumber + 1;
    phoneInput.value = newphoneInputNumber;
    // multiply with price;
    const totalPrice = newphoneInputNumber * 60;
    document.getElementById("phone-price").innerText = '$' + totalPrice;
})
*/