<template>
    <v-card>
        <v-card-media :src="activeProduct.url" height="400px">
        </v-card-media>
        <v-card-title class="blue white--text">
            <span class="headline">{{activeProduct.title}}</span>
            <v-spacer></v-spacer>
            <v-menu bottom left>
                <v-btn icon slot="activator" dark>
                    <v-icon>more_vert</v-icon>
                </v-btn>
                <v-list>
                    <v-list-tile v-for="item in items" :key="item.title" @click="item.function">
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>
        </v-card-title>
        <v-card-text>
            <span>{{activeProduct.description}}</span>
        </v-card-text>
        <!-- <v-card-actions>
            <v-btn flat class="orange--text">Share</v-btn>
            <v-btn flat class="orange--text add-keep" @click="selectKeep">Keep</v-btn>
            <p>{{activeKeep.adds}}</p>
            <v-icon>remove_red_eye</v-icon>
        </v-card-actions> -->
    </v-card>
</template>

<script>
    export default {
        name: 'SingleProductView',
        data() {
            return {
                items: [
                    { title: 'Add to Cart', function: this.selectProduct },
                    { title: 'Share', function: '' }
                ]
            }
        },
        methods: {
            selectProduct() {
                this.$store.dispatch('showBottomVaultsBar')
            },
            // deleteKeep() {
            //     this.$store.dispatch('deleteKeep', this.keep._id)
            // }
        },
        computed: {
            activeProduct() {
                return this.$store.state.activeProduct
            }
        },
        mounted() {
            this.$store.dispatch('findProduct', this.$route.params.productId)
            // this.$store.dispatch('incrementKeep', this.$route.params.keepId)
            // if (this.$store.state.user._id == this.activeKeep.creatorId) {
            //     var remove = {
            //         title: 'Remove',
            //         function: this.deleteKeep
            //     }
            //     this.items.push(remove)
            // }
        }
    }

</script>