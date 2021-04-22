
Vue.createApp({
	data() {
		return {
			//переменные
			products: [
			{img_src: 'img/1.png', price: 1000, about: 'Лодка надувная, зеленая.'},
			{img_src: 'img/2.png', price: 2000, about: 'Лодка надувная, желтая.'},
			{img_src: 'img/3.png', price: 3000, about: 'Лодка с веслами.'}
			],
			className: '',
			button_id: '',
			count: 1,
			show: true,
			show_basket: true,
			buy_products_img: [],
			buy_products_about: [],
			buy_products_price: [],
			buy_products_price_basket: [],
			total_basket: 0,
			buy_products_count: [],
			input_name: '',
			input_email: '',
			input_phone: ''
		}
	},
	methods: {
		//методы
		clickBuy(event){

			//console.log(event)

			//className = event.target.className;
			this.button_id = event.target.id;
			//console.log('button_id='+this.button_id)

			// нужно проверить нет ли совпадений
			if(this.buy_products_img.indexOf(this.products[this.button_id].img_src, 0) < 0) {
					//передаем src картинки
					this.buy_products_img.push(this.products[this.button_id].img_src);
		
					//передаем описание
					this.buy_products_about.push(this.products[this.button_id].about);
		
					//передаем цену
					this.buy_products_price.push(this.products[this.button_id].price);
					// передаем в массив для разной цене в корзине
					this.buy_products_price_basket.push(this.products[this.button_id].price);

					console.log('this.button_id = '+this.button_id);

					this.buy_products_count.push(1);
					console.log('this.buy_products_count = '+this.buy_products_count)
				}
			
			// ИТОГО в корзине
			this.total_basket = this.buy_products_price_basket.reduce(
				function(previousValue,item){
				return previousValue + Number(item);
			})

			console.log('summa = '+this.total_basket)

			this.show = false;
			this.button_id = '';
			/*console.log('this.buy_products_img = '+this.buy_products_img + "\n" +
							'this.buy_products_about = '+this.buy_products_about	+ "\n" +
							'this.buy_products_price = '+this.buy_products_price + "\n" +
							'this.buy_products_price_basket = '+this.buy_products_price_basket + "\n" +
							'this.buy_products_count[this.button_id] = '+this.buy_products_count[this.button_id]);*/

			
			//console.log('this.buy_products_img='+this.buy_products_img[0])
		},
		priceVolumeUp(index){
			//увеличиваем счетчик в массиве чтобы у каждого эл-та был свой count
			this.buy_products_count[index] = this.buy_products_count[index]+1;
			this.buy_products_price_basket[index] = this.buy_products_price[index]*this.buy_products_count[index];

			// ИТОГО в корзине
			this.total_basket = this.buy_products_price_basket.reduce(
				function(previousValue,item){
				return previousValue + Number(item);
			})

			console.log('summa = '+this.total_basket)
		},
		priceVolumeDown(index){
			if(this.buy_products_count[index] > 0){
				this.buy_products_count[index] = this.buy_products_count[index]-1;
				
				this.buy_products_price_basket[index] = this.buy_products_price[index]*this.buy_products_count[index];

				// ИТОГО в корзине
			this.total_basket = this.buy_products_price_basket.reduce(
				function(previousValue,item){
				return previousValue + Number(item);
			})

			console.log('summa = '+this.total_basket)
			}
		},
		toDelete(index){
			this.buy_products_img.splice([index],1);
			this.buy_products_about.splice([index],1);
			this.buy_products_price.splice([index],1);
			this.buy_products_price_basket.splice([index],1);
			this.buy_products_count.splice([index],1);
			
			if(this.buy_products_img.length == 0){
				this.show = true;
			}

			// ИТОГО в корзине
			this.total_basket = this.buy_products_price_basket.reduce(
				function(previousValue,item){
				return previousValue + Number(item);
			})

			console.log('summa = '+this.total_basket)
			
		},
		goOrder(){
			this.show_basket = false;
		},
		sendForm(){
			//запрещаем стандартную отправку
			event.preventDefault()

			if(this.input_name == ''||this.input_email == ''||this.input_phone == ''){
				alert('Заполните данные!')
			}
			else {
				alert('Поставьте мне сервер с php и письма полетят! '+"\n"+'уже проверено ^_^'+"n"+
					'На сервер улетели данные:'+"\n"+
					'Имя: '+this.input_name+"\n"+
					'Почта: '+this.input_email+"\n"+
					'Телефон: '+this.input_phone+"\n"+
					'Так как данные у нас в реале не являются формой,'+"\n"+
					'мы парсим их в php-файле с помощью json-декодера');

				axios.post('post.php', {
	                'name': this.input_name,
	                'email': this.input_email,
	                'phone': this.input_phone
	            }).then(response => {
	                console.log('success', response.data.message)
	            }).catch(error => {
	                console.log(error.response)
	            });



				console.log(this.input_name+this.input_email+this.input_phone)
				console.log('зачищаем поля')
				this.input_name='';
				this.input_email='';
				this.input_phone = '';
			}

		}
	},
	/*computed: {
		getIndex(index){
			return this.index = index;
		}
	}*/
}).mount('#app');

