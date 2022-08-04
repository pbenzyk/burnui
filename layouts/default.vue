<template>
<v-app>

    <v-app-bar fixed app color="white" flat class="pl-20 pr-20">
        <img src="@/assets/images/svg/logo.svg" alt="">
        <v-spacer></v-spacer>
        <v-btn  style="border-radius:50px!important;" color="grey lighten-4" fab small elevation="0"  ><v-icon>mdi-cog</v-icon></v-btn>
    </v-app-bar>  
    <v-main>
       <Nuxt />
    </v-main>

    <v-footer color="#F2F2F5" fixed app class="esap-footer d-flex justify-center">
        <span>Copyright © {{ new Date().getFullYear() }} ESAP. All rights reserved</span>
    </v-footer>
</v-app>
</template>

<script>
export default {
    name: 'DefaultLayout',
    data() {
        return {
             
        }
    }
}
</script>
