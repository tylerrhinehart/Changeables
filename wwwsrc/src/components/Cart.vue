<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card>
                    <v-card-title class="pink white--text">
                        <span>My Cart</span>
                    </v-card-title>
                    <v-list>
                        <v-list-tile v-for="item in items" v-bind:key="item.title" @click="">
                            <v-list-tile-action>
                                <v-icon class="pink--text">remove_circle</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title v-text="item.title"></v-list-tile-title>
                            </v-list-tile-content>
                            <v-spacer></v-spacer>
                            <v-spacer></v-spacer>
                            <v-spacer></v-spacer>
                            <v-spacer></v-spacer>
                            <v-spacer></v-spacer>
                            <v-list-tile-content>
                                <v-list-tile-title>Quantity: {{item.quantity}}</v-list-tile-title>
                            </v-list-tile-content>
                            <v-list-tile-content>
                                <v-list-tile-title>Price: ${{item.price}}</v-list-tile-title>
                            </v-list-tile-content>
                            <!-- <v-list-tile-avatar>
                                <img v-bind:src="item.avatar" />
                            </v-list-tile-avatar> -->
                        </v-list-tile>
                    </v-list>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: 'cart',
        data() {
            return {
                items: [
                    // { title: 'Jason Oner', quantity: 5, price: 19.99 },
                    // { title: 'Travis Howard', quantity: 5, price: 19.99 },
                    // { title: 'Ali Connors', quantity: 5, price: 19.99 },
                    // { title: 'Cindy Baker', quantity: 5, price: 19.99 },
                ]
            }
        },
        mounted() {
            // var myStore = new Commerce('pk_test_13385d294d91b3c24758a9a8dcdeccb1511bed4db0292', true)
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