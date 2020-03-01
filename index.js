
const addItemPhone = document.getElementById("addItemPhone");
   addItemPhone.addEventListener('click', function(){
   const itemOneTotal = singleItemAdd("quantity",1219);
   document.getElementById("phonePrice").innerText = itemOneTotal;
   taxCalculation();
 });  
const addItemCase = document.getElementById("addItemCase");
      addItemCase.addEventListener('click',function(){
      const itemTwoTotal = singleItemAdd("quantity1",59);
      document.getElementById("casePrice").innerText = itemTwoTotal; 
      taxCalculation();
  });
  const deleteItem = document.getElementById("deleteItemPhone");
    deleteItem.addEventListener('click', function(){
       const itemOneTotalAfterdelete = singleItemDelete("quantity",1219);
        document.getElementById("phonePrice").innerText = itemOneTotalAfterdelete;  
        taxCalculation();
     });  

const deleteItem1 = document.getElementById("deleteItemCase");
     deleteItem1.addEventListener('click', function(){
        const itemTwoTotalAfterdelete = singleItemDelete("quantity1",59);
        document.getElementById("casePrice").innerText = itemTwoTotalAfterdelete;
        taxCalculation();
      });       

taxCalculation();

//Funcion For Tax and sub-total Calculation // 

function taxCalculation(){
const subTotal1 = convertSpantext("phonePrice");
const subTotal2 = convertSpantext("casePrice");
const subTotal = subTotal1 + subTotal2;
const tax = subTotal*0.10;
const Total = subTotal + tax ;
document.getElementById("subTotal").innerText = subTotal;   
document.getElementById("tax").innerText = tax;      
document.getElementById("Total").innerText = Total; 
}     

const removeItem1 = document.getElementById("remove-item1");
    removeItem1.addEventListener("click", function(){
    document.getElementById("phonePrice").innerText = 0;
    taxCalculation();
    hideBlock("cartItem1");

});
const removeItem2 = document.getElementById("remove-item2");
    removeItem2.addEventListener("click", function(){
    document.getElementById("casePrice").innerText = 0;
    taxCalculation();
    hideBlock("cartItem2");

});

function convertSpantext(id){
    return parseFloat(document.getElementById(id).innerText);
}
function singleItemAdd(id,phonePrice){
    const qunatity = document.getElementById(id).value;
    const quantityNumber = parseFloat(qunatity);
    const newQuantity = quantityNumber + 1 ;
    document.getElementById(id).value = newQuantity;
    const totalPrice = phonePrice * newQuantity;
    return totalPrice;
 }

 function singleItemDelete(id,phonePrice){
    const qunatity = document.getElementById(id).value;
    const quantityNumber = parseFloat(qunatity);
    const newQuantity = quantityNumber - 1 ;
    document.getElementById(id).value = newQuantity;
    const totalPrice = newQuantity * phonePrice;
    return totalPrice;
 }

function hideBlock(id){
    const cartItem1 = document.getElementById(id);
    cartItem1.style.display = "none";
    
} 



//









//