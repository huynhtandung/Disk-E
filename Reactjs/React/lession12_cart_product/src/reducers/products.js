/*var initialState = [
	{
		id : 1,
		name : 'Iphone 7 Plus',
		image : 'https://cdn.tgdd.vn/Products/Images/42/78124/iphone-7-plus-gold-400x460.png',
		description : 'San pham do Apple san xuat',
		price : 500,
		inventory : 5
	},
	{
		id : 2,
		name : 'Samsum Galaxy S7',
		image : 'https://cdn.tgdd.vn/Products/Images/42/194327/samsung-galaxy-a7-2018-128gb-black-400x400.jpg',
		description : 'San pham do Samsung san xuat',
		price : 400,
		inventory : 6
	},
	{
		id : 3,
		name : 'Real Me C1',
		image : 'https://cdn.tgdd.vn/Products/Images/42/193286/oppo-realme-c1-1-400x460.png',
		description : 'San pham do Oppo san xuat',
		price : 300,
		inventory : 7
	}
];
localStorage.setItem('products', JSON.stringify(initialState));*/

var data = JSON.parse(localStorage.getItem('products'));
var initialState = data ? data : [];

const products = (state = initialState, action) =>{
	switch(action.type){
		default: return [...state];
	}
}

export default products;