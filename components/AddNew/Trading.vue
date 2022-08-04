<template>
<div>
    <v-form>
        <div class="pt-8">
            <label class="text-sm font-semibold">Trading Partner Tax No</label>
            <v-text-field dense label="ระบุข้อมูล..." color="base" outlined></v-text-field>

            <label class="text-sm font-semibold">Branch</label>
            <v-text-field dense label="ระบุข้อมูล..." color="base" outlined></v-text-field>

            <label class="text-sm font-semibold">Deferred Payment of Duty / Tax / Free</label>
            <v-text-field dense label="ระบุข้อมูล..." color="purple" outlined></v-text-field>

        </div>
    </v-form>
</div>
</template>

<script>
export default {
    name: 'Trading',
    created() {

    },
    data() {
        return {}
    },
    props: {

    },
    methods: {

    },
}
</script>

<style lang="scss" scoped>

</style>
