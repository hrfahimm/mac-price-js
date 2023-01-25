
 function calctMacMemoryPrice(macMemorySelect){
    let memoryPrice = document.getElementById('memory-price');
    if (macMemorySelect == true){
        memoryPrice.innerText = 180;
        finalTotalPrice();
    }
    else{
        memoryPrice.innerText = 0;
        finalTotalPrice();
    }
}; 
 //memory
 document.getElementById("extend-memory").addEventListener('click', function(){
    calctMacMemoryPrice(true);
    
});
document.getElementById("default-memory").addEventListener('click', function(){
    calctMacMemoryPrice(false);
});

//
function calctMacStoragePrice(macStorageSelect){
    let storagePriceTag = document.getElementById('storage-price');
    if(macStorageSelect == true){
        storagePriceTag.innerText = 180;
        finalTotalPrice();
    }
    else if(macStorageSelect == false){
        storagePriceTag.innerText = 100;
        finalTotalPrice();
    }
    else{
        storagePriceTag.innerText = 0;
        finalTotalPrice();
    }
};
    //storage
    document.getElementById("extend-storage2").addEventListener('click', function(){
        calctMacStoragePrice(true);
    });
    document.getElementById("extend-storage").addEventListener('click', function(){
        calctMacStoragePrice(false);
    });
    document.getElementById("default-storage").addEventListener('click', function(){
        calctMacStoragePrice();
    });

//  
function calctMacDeliveryCharge(macDeliverySelect){
    let deliveryPrice = document.getElementById('delivery-price');
    if(macDeliverySelect == true){
        deliveryPrice.innerText = 20;
        finalTotalPrice();
    }
    else{
        deliveryPrice.innerText = 0;
        finalTotalPrice();
    }
};
    //delivery
    document.getElementById("paid-delivery").addEventListener('click', function(){
        calctMacDeliveryCharge(true);
    });
    document.getElementById("default-delivery").addEventListener('click', function(){
        calctMacDeliveryCharge(false);
    });


 
//finalTotalPrice();

function finalTotalPrice(){
    let defaultTotalPrice = document.getElementById('default-total-price').innerText;
    let memoryPrice = document.getElementById('memory-price').innerText;
    let storagePrice = document.getElementById('storage-price').innerText;
    let deliveryPrice = document.getElementById('delivery-price').innerText;
    //sum
    let convTotalPrice = (parseInt(defaultTotalPrice)+ parseInt(memoryPrice) + parseInt(storagePrice) + parseInt(deliveryPrice));
    //total
    let totalPrice = document.getElementById('total-price');
    totalPrice.innerText = convTotalPrice;
    //grandTotal
    let grandTotalPrice = document.getElementById('grand-total-price');
    grandTotalPrice.innerText = totalPrice.innerText;
};



document.getElementById('apply-promo-code-btn').addEventListener('click',function(){
    let promoCode = 'fahim'

    let promoCodeInput = document.getElementById('promo-code-input');
    let promoCodeInputValue = promoCodeInput.value.toLowerCase();

    if (promoCodeInputValue == promoCode){
        
        let discountPrcntge = 20;

        let totalPrice = document.getElementById('total-price').innerText;

        let discountAmount = (totalPrice / 100) * 20;
        totalPrice = totalPrice - discountAmount;


        let grandTotalPrice = document.getElementById('grand-total-price');
        grandTotalPrice.innerText = totalPrice;

        promoCodeInput.value = ' ';



        let successMessage = document.getElementById('success-alert');
        successMessage.innerText = 'wow, You Get $' + discountAmount.toFixed(2) + ' ' + 'discount!';

    }
    else if (promoCodeInputValue == ''){
        alert('input is Empty');

        let successMessage = document.getElementById("success-alert");//Get The Success Alert Tag
        successMessage.innerText = " ";
    }
    else if (promoCodeInputValue != promoCode){
        alert("Your Promo Code Did Not Matched!");
        promoCodeInput.value = " ";
        
        let successMessage = document.getElementById("success-alert");//Get The Success Alert Tag
        successMessage.innerText = " ";
    }
    else {
        alert("You Already Applied This Promo Code!"); 
        promoCodeInput.value = " ";
        
        let successMessage = document.getElementById("success-alert");//Get The Success Alert Tag
        successMessage.innerText = " ";
    }
    
});


 


     


 






document.getElementById('bye').addEventListener('click',function(){
        window.location.href = 'bye.html';
         
});




 
 
 