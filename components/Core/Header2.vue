<template>
<div :class="(!$vuetify.breakpoint.mobile)?'sticky top-64p':''" style="z-index:999;">
    <div :class="(!$vuetify.breakpoint.mobile)?'esap-header':'esap-header-h'">
        <div class="pt-6" :class="(!$vuetify.breakpoint.mobile)?'pl-20':'pl-4'">
            <span class="text-breadcrumbs ">{{title}}</span>
            <span class="text-breadcrumbs font-semibold">{{action}}</span>
        </div>
        <div class=" pt-2 pb-2  flex flex-row  w-full" :class="(!$vuetify.breakpoint.mobile)?'pl-20 pr-20 items-end pt-14':'pl-4 pr-4'">
            <h2 class="font-semibold text-xl md:text-3xl text-white">{{name}} </h2>
            <v-spacer></v-spacer>
            <v-btn v-if="($vuetify.breakpoint.mobile)" @click="nav =!nav" class="rounded-lg" small fab>
                <v-icon>mdi-menu</v-icon>
            </v-btn>
            <Core-HeaderMenu2 v-if="(!$vuetify.breakpoint.mobile)" headclass="flex flex-col md:flex-row flex-wrap justify-end"></Core-HeaderMenu2>
        </div>
    </div>
    <v-bottom-sheet v-model="nav">
        <v-card class="p-4">
            <Core-HeaderMenu2 divclass="w-full" inclass="w-full" headclass="flex flex-col"></Core-HeaderMenu2>
        </v-card>
    </v-bottom-sheet>
</div>
</template>

<script>
export default {
    name: 'Header.vue',
    created() {

    },
    data() {
        return {
            nav:false
        }
    },
    props: {
        name:{default:'DECLARATION CONTROL'},
        title:{default:'Import Declaration / Import Declaration List /'},
        action:{default:'Add New'},
    },
    methods: {

    },
}
</script>

<style lang="scss" scoped>

</style>
