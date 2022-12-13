const app = Vue.createApp({
    data (){
        return{
            cart :0,
            quantity : [
                {id : 210, product:'milk' , image : './assets/images/milk.jpg', stock :1, onList :0 },
                {id : 211, product:'eggs' ,image : './assets/images/eggs.jpg', stock :6, onList :0},
                {id : 212, product:'strawberry' ,image : './assets/images/strawberry.jpg', stock :6, onList :0 },
            ]
        }
    },
    methods:{
        addToList(quant){
            quant.onList++;
            this.cart++;
            console.log(quant.onList);
        },
        remove(quant){
            if(quant.onList>=1){
                quant.onList--;
                this.cart--;
            }
        }
    }
})