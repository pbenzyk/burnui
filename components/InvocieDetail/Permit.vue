<template>
<div>
    <div class="flex justify-end">
        <v-spacer></v-spacer>
        <v-btn color="white"  depressed dark class="mb-2" v-bind="attrs" v-on="on">
            <v-icon color="base">mdi-plus-circle</v-icon>
            <span class="text-base text-gray-800 font-semiblod ml-1">New</span>
        </v-btn>
    </div>
    
    <v-data-table :headers="headers" :items="desserts" :items-per-page="20">
        <template v-slot:item.number="{ item }">
            <div class="p-2">
                <v-combobox label="614584485" dense class="w-1/2 pt-2" color="base" outlined></v-combobox>
            </div>
        </template>
        <template v-slot:item.agency="{ item }">
            <div class="p-2">
                <v-combobox label="12450152100123" dense class="w-1/2 pt-2" color="base" outlined></v-combobox>
            </div>
        </template>
        <template v-slot:item.action="{ item }">
            <div class="p-2 flex space-x-4">
                <v-btn depressed x-small fab dark color="base"><span class="text-base">S</span></v-btn>
                <v-btn depressed x-small fab dark color="base"><span class="text-base">D</span></v-btn>
                <v-btn depressed x-small fab dark color="base"><span class="text-base">_</span></v-btn>
            </div>
        </template>
    </v-data-table>

</div>
</template>

<script>
export default {
    data() {
        return {
            headers: [{
                    text: 'Item',
                    align: 'start',
                    sortable: false,
                    value: 'no',
                },
                {
                    text: 'เลขที่ใบอนุญาต',
                    value: 'number'
                },
                {
                    text: 'วันที่ออก',
                    value: 'date'
                },
                {
                    text: ' วันที่หมดอายุ',
                    value: 'expiration'
                },
                {
                    text: 'Tax หน่วยงานที่ออก',
                    value: 'agency'
                },
                {
                    text: 'ชื่อหน่วยงาน',
                    value: 'organization'
                },
                {
                    text: 'Action',
                    value: 'action'
                },
                

            ],
            desserts: [{
                no: '1',
                date: '01/01/2022',
                expiration: '01/01/2022',
                organization: 'กรมศุลกากร'

            }],
        }
    },
}
</script>

<style>

</style>
