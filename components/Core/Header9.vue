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
            <div v-if="(!$vuetify.breakpoint.mobile)" class="flex flex-col md:flex-row   justify-end">

                <Core-ButtonHead name="Short Message" :icon="require('@/assets/images/svg/menu2/message.svg')"></Core-ButtonHead>
                <Core-ButtonHead name="Short Message" :icon="require('@/assets/images/svg/menu2/message2.svg')"></Core-ButtonHead>
                <Core-ButtonHead name="XML" :icon="require('@/assets/images/svg/menu/xml.svg')"></Core-ButtonHead>
                <Core-ButtonHead name="Message" :icon="require('@/assets/images/svg/menu/message.svg')"></Core-ButtonHead>
                <Core-ButtonHead name="Receive" :icon="require('@/assets/images/svg/menu/receive.svg')"></Core-ButtonHead>
                <Core-ButtonHead name="Validate" :icon="require('@/assets/images/svg/menu/validate.svg')"></Core-ButtonHead>
                <Core-ButtonHead name="Send" :icon="require('@/assets/images/svg/menu/send.svg')"></Core-ButtonHead>
                <Core-ButtonHead name="GCL" :icon="require('@/assets/images/svg/menu2/gcl.svg')"></Core-ButtonHead>
                <Core-ButtonHead name="Print" :icon="require('@/assets/images/svg/menu/print.svg')"></Core-ButtonHead>
                <div @click="$router.go(-1)">
                    <Core-ButtonHead name="Cancel" :icon="require('@/assets/images/svg/menu/cancel.svg')"></Core-ButtonHead>
                </div>
                <Core-ButtonHead otherclass="text-white" color="#34C38F" name="Save" :icon="require('@/assets/images/svg/menu/save.svg')"></Core-ButtonHead>

            </div>

        </div>
    </div>
    <v-bottom-sheet v-model="nav">
        <v-card class="p-4">

            <Core-ButtonHead class="w-full mt-2" name="Short Message" :icon="require('@/assets/images/svg/menu2/message.svg')"></Core-ButtonHead>
            <Core-ButtonHead class="w-full mt-2" name="Short Message" :icon="require('@/assets/images/svg/menu2/message2.svg')"></Core-ButtonHead>
            <Core-ButtonHead class="w-full mt-2" name="XML" :icon="require('@/assets/images/svg/menu/xml.svg')"></Core-ButtonHead>
            <Core-ButtonHead class="w-full mt-2" name="Message" :icon="require('@/assets/images/svg/menu/message.svg')"></Core-ButtonHead>
            <Core-ButtonHead class="w-full mt-2" name="Receive" :icon="require('@/assets/images/svg/menu/receive.svg')"></Core-ButtonHead>
            <Core-ButtonHead class="w-full mt-2" name="Validate" :icon="require('@/assets/images/svg/menu/validate.svg')"></Core-ButtonHead>
            <Core-ButtonHead class="w-full mt-2" name="Send" :icon="require('@/assets/images/svg/menu/send.svg')"></Core-ButtonHead>
            <Core-ButtonHead class="w-full mt-2" name="GCL" :icon="require('@/assets/images/svg/menu2/gcl.svg')"></Core-ButtonHead>
            <Core-ButtonHead class="w-full mt-2" name="Print" :icon="require('@/assets/images/svg/menu/print.svg')"></Core-ButtonHead>
            <div class="w-full mt-2" @click="$router.go(-1)">
                <Core-ButtonHead class="w-full " name="Cancel" :icon="require('@/assets/images/svg/menu/cancel.svg')"></Core-ButtonHead>
            </div>
            <Core-ButtonHead class="w-full mt-2" otherclass="text-white" color="#34C38F" name="Save" :icon="require('@/assets/images/svg/menu/save.svg')"></Core-ButtonHead>

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
