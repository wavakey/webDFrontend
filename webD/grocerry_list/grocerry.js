// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
form.addEventListener('submit',(e)=>{
 e.preventDefault();
 const prod = form.elements.product;
 const qtyy = form.elements.qty;
 const newLi = document.createElement('li');
 const bj = document.createElement('b');

 newLi.innerHTML = `${qtyy.value} ${prod.value}`;
 console.log(newLi);
 const ulContainer = document.querySelector('#list'); 
 ulContainer.insertAdjacentElement('afterbegin',newLi);

//  newLi.append(qtyy.value);
//  newLi.append(` ${prod.value}`);
//  console.log(newLi); 
//  const ulContainer = document.querySelector('#list');
//  ulContainer.append(newLi);
 prod.value='';
 qtyy.value='';
});