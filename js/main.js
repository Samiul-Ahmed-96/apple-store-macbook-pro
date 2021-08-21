
const memoryPrice = document.getElementById('memory-cost');
const storagePrice = document.getElementById('storage-cost');
const deliveryCharge = document.getElementById('delivery-cost');
const basePrice = document.getElementById('base-price');
const total = document.getElementById('total-cost');

function updateTotal(){
	const baseCost = Number(basePrice.innerText);
	const memoryCost = Number(memoryPrice.innerText);
	const storageCost = Number(storagePrice.innerText);
	const deliveryCost = Number(deliveryCharge.innerText);
	const grandTotal = baseCost + memoryCost + storageCost + deliveryCost;
	total.innerText = grandTotal;
}

document.getElementById('memory-8gb').addEventListener('click',function(){
	memoryPrice.innerText = 0;
	updateTotal();
	
})
document.getElementById('memory-16gb').addEventListener('click',function(){
	memoryPrice.innerText = 180;
	updateTotal();
	
})
document.getElementById('storage256').addEventListener('click',function(){
	storagePrice.innerText = 0;
	updateTotal();
	
})
document.getElementById('storage512').addEventListener('click',function(){
	storagePrice.innerText = 100;
	updateTotal();
	
})
document.getElementById('storage1tb').addEventListener('click',function(){
	storagePrice.innerText = 180;
	updateTotal();
	
})
document.getElementById('delivery-late').addEventListener('click',function(){
	deliveryCharge.innerText = 0;
	updateTotal();
	
})
document.getElementById('delivery-quick').addEventListener('click',function(){
	deliveryCharge.innerText = 20;
	updateTotal();
	
})