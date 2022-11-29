const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '87dddabe4cmshcb45ed9d95cd3dap184f9cjsnfecb56f7cc73',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

fetch('https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


    export default options