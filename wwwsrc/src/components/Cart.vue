<template>
    <v-container>
        <v-layout row wrap>
            Cart
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: 'cart',
        data() {
            return {

            }
        },
        mounted() {
            var myStore = new Commerce('pk_test_13385d294d91b3c24758a9a8dcdeccb1511bed4db0292', true)
            console.log(myStore)
            myStore.Cart.init(function (resp) {
                console.log(resp)
            })
            setTimeout(function () {
                myStore.Cart.retrieve(function (resp) {
                    console.log(resp)
                })
            }, 2000);
            // setTimeout(function () {
            //     myStore.Products.list(function (resp) {
            //         console.log(resp)
            //     },
            //         function (error) {
            //             console.log(error)
            //         }
            //     );
            // }, 2000);
            setTimeout(function () {
                myStore.Cart.add({
                    'id': "prod_NqKE50mB3ldgBL",
                    'quantity': 1,
                }, function (resp) {
                    console.log(resp)
                })
            }, 2500);
            setTimeout(function () {
                myStore.Cart.retrieve(function (resp) {
                    console.log(resp)
                })
            }, 3000);
            setTimeout(function () {
                myStore.Cart.add({
                    'id': "prod_NqKE50mB3ldgBL",
                    'quantity': 1,
                }, function (resp) {
                    console.log(resp)
                })
            }, 3500);
            setTimeout(function () {
                myStore.Cart.retrieve(function (resp) {
                    console.log(resp)
                })
            }, 4000);
        }
    }
</script>