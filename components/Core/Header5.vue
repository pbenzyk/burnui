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
            <div v-if="(!$vuetify.breakpoint.mobile)" class="flex flex-col md:flex-row flex-wrap justify-end">
             
                  <Core-ButtonHead name="Receive" :icon="require('@/assets/images/svg/receive.svg')"></Core-ButtonHead>
                    <Core-ButtonHead name="Send" :icon="require('@/assets/images/svg/send.svg')"></Core-ButtonHead>
                    <Core-ButtonHead name="Print" :icon="require('@/assets/images/svg/print.svg')"></Core-ButtonHead>
                    <Core-ButtonHead name="Export" :icon="require('@/assets/images/svg/export.svg')"></Core-ButtonHead>
                    <Core-ButtonHead name="Import File" :icon="require('@/assets/images/svg/import.svg')"></Core-ButtonHead>
                    <Core-ButtonHead name="Delete" :icon="require('@/assets/images/svg/delete.svg')"></Core-ButtonHead>
                    <Core-ButtonHead name="Copy" :icon="require('@/assets/images/svg/copy.svg')"></Core-ButtonHead>
                    <div @click="$router.push('/export/exportaddnew')"> 
                        <Core-ButtonHead otherclass="text-white"  color="#4F4BFF" name="Add New" :icon="require('@/assets/images/svg/plus.svg')"></Core-ButtonHead>

                    </div>
            </div>

        </div>
    </div>
    <v-bottom-sheet v-model="nav">
        <v-card  class="p-4"> 
           <Core-ButtonHead class="w-full mt-2" name="Receive" :icon="require('@/assets/images/svg/receive.svg')"></Core-ButtonHead>
                    <Core-ButtonHead class="w-full mt-2" name="Send" :icon="require('@/assets/images/svg/send.svg')"></Core-ButtonHead>
                    <Core-ButtonHead class="w-full mt-2" name="Print" :icon="require('@/assets/images/svg/print.svg')"></Core-ButtonHead>
                    <Core-ButtonHead class="w-full mt-2" name="Export" :icon="require('@/assets/images/svg/export.svg')"></Core-ButtonHead>
                    <Core-ButtonHead class="w-full mt-2" name="Import File" :icon="require('@/assets/images/svg/import.svg')"></Core-ButtonHead>
                    <Core-ButtonHead class="w-full mt-2" name="Delete" :icon="require('@/assets/images/svg/delete.svg')"></Core-ButtonHead>
                    <Core-ButtonHead class="w-full mt-2" name="Copy" :icon="require('@/assets/images/svg/copy.svg')"></Core-ButtonHead>
                    <div class="w-full mt-2" @click="$router.push('/export/exportaddnew')"> 
                        <Core-ButtonHead class="w-full" otherclass="text-white"  color="#4F4BFF" name="Add New" :icon="require('@/assets/images/svg/plus.svg')"></Core-ButtonHead>

                    </div>
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
            nav: false
        }
    },
    props: {
        name: {
            default: 'DECLARATION CONTROL'
        },
        title: {
            default: 'Import Declaration / Import Declaration List /'
        },
        action: {
            default: 'Add New'
        },
    },
    methods: {

    },
}
</script>

<style lang="scss" scoped>

</style>
