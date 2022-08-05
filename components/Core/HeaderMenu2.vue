<template>
<div :class="headclass">
    <Core-ButtonHead  :class="inclass"  name="XML" :icon="require('@/assets/images/svg/menu/xml.svg')"></Core-ButtonHead>
    <Core-ButtonHead   :class="inclass" name="Message" :icon="require('@/assets/images/svg/menu/message.svg')"></Core-ButtonHead>
    <Core-ButtonHead  :class="inclass"  name="Receive" :icon="require('@/assets/images/svg/menu/receive.svg')"></Core-ButtonHead>
    <Core-ButtonHead  :class="inclass"  name="Validate" :icon="require('@/assets/images/svg/menu/validate.svg')"></Core-ButtonHead>
    <Core-ButtonHead  :class="inclass"  name="Send" :icon="require('@/assets/images/svg/menu/send.svg')"></Core-ButtonHead>
    <Core-ButtonHead  :class="inclass"  name="Print" :icon="require('@/assets/images/svg/menu/print.svg')"></Core-ButtonHead>
    <div  :class="divclass"  @click="$router.go(-1)">
        <Core-ButtonHead name="Cancel" :icon="require('@/assets/images/svg/menu/cancel.svg')"></Core-ButtonHead>
    </div>
    <Core-ButtonHead  :class="inclass"  otherclass="text-white" color="#34C38F" name="Save" :icon="require('@/assets/images/svg/menu/save.svg')"></Core-ButtonHead>

</div>
</template>

<script>
export default {
    name: 'HeaderMenu1',
    created() {

    },
    data() {
        return {}
    },
    props: {
        headclass: {
            default: ''
        },
        inclass: {
            default: ''
        },
        divclass: {
            default: ''
        }
    },
    methods: {

    },
}
</script>

<style lang="scss" scoped>

</style>
