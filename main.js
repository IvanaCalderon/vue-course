var app = new Vue ({
    el: '#app',
    data: {
        product: 'Socks',
        image: './assets/avocado-socks.jpeg',
        inStock: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants:[
            {
                variantId:2234,
                variantColor: "black",
                variantImage: "./assets/avocado-socks.jpeg"
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: "./assets/avocado-blue-socks.jpeg"
            }
        ],
        cart: 0,
        },
        methods: {
            addToCart() {
                this.cart += 1
            },
            updateProduct(variantImage){
                this.image = variantImage
            },
            eliminateToCart(){
                this.cart -= 1
            }
    }
})