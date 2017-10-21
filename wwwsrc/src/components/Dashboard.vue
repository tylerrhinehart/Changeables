<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs4>
                <Products></Products>
            </v-flex>
            <v-flex xs4>
                <Orders></Orders>
            </v-flex>
            <v-flex xs4>
                <v-card>
                    <v-card-title class="blue white--text">
                        <span class="headline">Other Stuff</span>
                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
        <v-btn class="pink white--text" id="add-keep" primary fab fixed bottom right v-model="fab" @click="dialog = true">
            <v-icon>add</v-icon>
        </v-btn>
        <v-dialog v-model="dialog" persistent width="50%">
            <v-card>
                <v-card-title>
                    <span class="headline">Create New Product</span>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs12>
                                <v-text-field label="Title" required v-model="title"></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field label="Description" v-model="description"></v-text-field>
                            </v-flex>
                            <v-flex xs6>
                                <v-text-field label="Price" v-model="price"></v-text-field>
                            </v-flex>
                            <v-flex xs6>
                                <v-text-field label="Quantity" v-model="quantity"></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-btn @click.prevent="openCloud">Upload</v-btn>
                            </v-flex>
                            <!-- <v-switch label="Private" v-model="private"></v-switch> -->
                        </v-layout>
                    </v-container>
                    <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn class="blue--text darken-1" flat @click="closeDialog">Cancel</v-btn>
                    <v-btn class="blue--text darken-1" flat @click="createProduct">Create</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
    import Products from './AdminProducts'
    import Orders from './AdminOrders'
    export default {
        name: 'dashboard',
        data() {
            return {
                fab: false,
                dialog: false,
                title: '',
                description: '',
                imgUrl: '',
                price: '',
                quantity: ''
            }
        },
        methods: {
            openCloud() {
                cloudinary.openUploadWidget({ cloud_name: 'tattoo-me', upload_preset: 'tattoopng' },
                    (error, result) => {
                        this.imgUrl = result[0].secure_url
                    })
            },
            closeDialog() {
                this.dialog = false,
                    this.title = '',
                    this.description = '',
                    this.imgUrl = '',
                    this.price = '',
                    this.quantity = ''
            },
            createProduct() {
                var newProduct = {
                    title: this.title,
                    description: this.description,
                    price: this.price,
                    quantity: this.quantity,
                    url: this.imgUrl
                }
                this.$store.dispatch('addProduct', newProduct)
                this.closeDialog()
            }
        },
        components: {
            Products,
            Orders
        }
    }
</script>

<style scoped>
    #add-keep {
        z-index: 9999;
    }
</style>