<template>
<div :class="headclass">
    <Core-ButtonHead :class="inclass"  name="Receive" :icon="require('@/assets/images/svg/receive.svg')"></Core-ButtonHead>
    <Core-ButtonHead :class="inclass"  name="Send" :icon="require('@/assets/images/svg/send.svg')"></Core-ButtonHead>
    <Core-ButtonHead  :class="inclass" name="Print" :icon="require('@/assets/images/svg/print.svg')"></Core-ButtonHead>
    <Core-ButtonHead  :class="inclass"  name="Export" :icon="require('@/assets/images/svg/export.svg')"></Core-ButtonHead>
    <Core-ButtonHead  :class="inclass" name="Import File" :icon="require('@/assets/images/svg/import.svg')"></Core-ButtonHead>
    <Core-ButtonHead  :class="inclass"  name="Delete" :icon="require('@/assets/images/svg/delete.svg')"></Core-ButtonHead>
    <Core-ButtonHead :class="inclass"  name="Copy" :icon="require('@/assets/images/svg/copy.svg')"></Core-ButtonHead>
    <div :class="divclass"   @click="$router.push('/import/')">
        <Core-ButtonHead  :class="inclass"  otherclass="text-white" color="#4F4BFF" name="Add New" :icon="require('@/assets/images/svg/plus.svg')"></Core-ButtonHead>
    </div>
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
      headclass:{
        default: ''
      },
      inclass:{
        default: ''
      },
      divclass:{
           default: ''
      }
    },
    methods: {

    },
}
</script>

<style lang="scss" scoped>

</style>
