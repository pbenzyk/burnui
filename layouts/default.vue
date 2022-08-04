<template>
<v-app>

    <Core-Navbar></Core-Navbar>
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
