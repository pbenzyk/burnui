<template>
<v-btn :class="optclass" x-large elevation="0" :color="color">
    <img :src="icon" alt="">
    <span :class="otherclass" class="font-semibold ml-1 text-sm">{{name}}</span>
</v-btn>
</template>

<script>
export default {
    props:{ 
        icon:{
            default:require('@/assets/images/svg/receive.svg')  
        },name:{
            default:'Name'
        },
        optclass:{
            default:'ml-1' 
        },
        color:{
            default:'headmenu'
        },
        otherclass:{
            default:'' 
        }
    }
}
</script>

<style>

</style>
