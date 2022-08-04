<template>
<div>
    <v-data-table :headers="headers" :items="desserts" :items-per-page="20">
        <template v-slot:item.follow="{ item }">
            <div class="p-2 ">
                <v-text-field   v-if="item.follow == 1" dense class="w-1/2 pt-2" color="base" outlined></v-text-field>
            </div>
        </template>
        <template v-slot:item.according="{ item }">
            <div class="p-2">
                <v-text-field  v-if="item.according == 1" dense class="w-1/2 pt-2" color="base" outlined></v-text-field>
            </div>
        </template>
        <template v-slot:item.normal="{ item }">
            <div class="p-2">
                <v-text-field  v-if="item.normal == 1" dense class="w-1/2 pt-2" color="base" label="9,680.22" outlined></v-text-field>
            </div>
        </template>
        <template v-slot:item.reduce="{ item }">
            <div  v-if="item.reduce == 1" class="flex p-2 space-x-3">
                <v-text-field dense class="w-1/2 pt-2" color="base" label="0" outlined></v-text-field>
                <div class="pt-3 ">
                    <v-btn depressed x-small fab dark color="base">_</v-btn>

                </div>
            </div>

        </template>
        <template v-slot:item.tax="{ item }">
             
                <v-text-field v-if="item.tax == 1"  dense class="w-1/2 pt-2" color="base" label="9,680.22" outlined></v-text-field>
                 
         </template>
         <template v-slot:item.insurance="{ item }">
            <div v-if="item.insurance == 1" class="flex p-2 space-x-3">
                <v-text-field dense class="w-1/2 pt-2" color="base" label="0" outlined></v-text-field>
                <div class="pt-3 ">
                    <v-btn depressed x-small fab dark color="base">_</v-btn>

                </div>
            </div>
        </template>
        <template v-slot:item.c="{ item }">
            <div v-if="item.c == 1" class="flex p-2 space-x-3">
                <v-text-field dense class="w-1/2 pt-2" color="base" label="0" outlined></v-text-field>
                <div class="pt-3 ">
                    <v-btn depressed x-small fab dark color="base">_</v-btn>

                </div>
            </div>
        </template>
         <template v-slot:item.reason="{ item }">
            <div v-if="item.reason == 1" class="flex p-2 space-x-3">
                <v-combobox dense class="w-1/2 pt-2" color="base" label="เลือก" outlined></v-combobox>
                <div class="pt-3 ">
                    <v-btn depressed x-small fab dark color="base">_</v-btn>

                </div>
            </div>
        </template>
        <template v-slot:item.percentextra="{ item }">
            <div v-if="item.percentextra == 1" class="flex p-2 space-x-3">
                <v-text-field dense class="w-1/2 pt-2" color="base" label="0" outlined></v-text-field>
                 
            </div>
        </template>
        <template v-slot:item.extra="{ item }">
            <div v-if="item.extra == 1" class="flex p-2 space-x-3">
                <v-text-field dense class="w-1/2 pt-2" color="base" label="0" outlined></v-text-field>
                 
            </div>
        </template>
          <template>
            asd
          </template>
          
    </v-data-table>
    
</div>
</template>

<script>
export default {
    data() {
        return {
            headers: [{
                    text: 'ประเภทค่าภาษีอากร',
                    align: 'start',
                    sortable: false,
                    value: 'type',
                },
                {
                    text: 'ตาม %',
                    value: 'follow'
                },
                {
                    text: 'ตามสภาพ',
                    value: 'according'
                },
                {
                    text: ' อากรขาเข้าปกติ',
                    value: 'normal'
                },
                {
                    text: '%ลดหย่น',
                    value: 'reduce'
                },
                {
                    text: 'ภาษีที่ต้องชำระ',
                    value: 'tax'
                },
                {
                    text: '%วางประกัน',
                    value: 'insurance'
                },
                {
                    text: 'ยอดประกัน',
                    value: 'c'
                },
                {
                    text: 'เหตุผล',
                    value: 'reason'
                },
                {
                    text: '%เงินเพิ่ม',
                    value: 'percentextra'
                },
                {
                    text: 'เงินเพิ่ม',
                    value: 'extra'
                },
            ],
            desserts: [{
                    type: 'อากรเข้า',
                    follow: 1,
                    according: 1,
                    normal:1,
                    reduce:1,
                    tax:1,
                    insurance:'1',
                    balance:'1',
                    c:'1',
                    reason:'1',
                    percentextra:'1',
                    extra:'1'
                },
                {
                    type: 'ภาษีสรรสามิต',
                    follow: 1,
                    according: 1,
                    normal:1,
                    reduce:1,
                    tax:1,
                    insurance:'1',
                    balance:'1',
                    c:'1',
                    reason:'1',
                    percentextra:'1',
                    extra:'1'
                },
                {
                    type: 'ภาษีเพื่อมหาดไทย',
                    follow: 1,
                    according: 1,
                    normal:1,
                    reduce:1,
                    tax:1,
                    insurance:'1',
                    balance:'1',
                    c:'1',
                    reason:'1',
                    percentextra:'1',
                    extra:'1'
                },
                {
                    type: 'ค่าอากรพิเศษ',
                     follow: 1,
                    according: 1,
                    normal:1,
                    reduce:1,
                    tax:1,
                },
                {
                    type: 'ค่าธรรมเนียม',
                    follow: 1,
                    according: 1,
                    normal:1,
                    reduce:1,
                    tax:1,
                },
                {
                    type: 'ค่าธรรมเนียมพิเศษกระทรวงพาณิชย์',
                    follow: 1,
                    according: 1,
                    normal:1,
                    reduce:1,
                    tax:1,
                },
                {
                    type: 'ค่าอากรตอบโต้การทุ่มตลาดและการอุดหนุน',
                    follow: 1,
                    according: 1,
                    normal:1,
                    reduce:1,
                    tax:1,
                },
                {
                    type: 'ค่าอากรชั่วคราวตามมาตราปกป้อง',
                    follow: 1,
                    according: 1,
                    normal:1,
                    reduce:1,
                    tax:1,
                },
                {
                    type: 'เงินกองทุนน้ำมันเชื้อเพลิง',
                    follow: 1,
                    according: 1,
                    normal:1,
                    reduce:1,
                    tax:1,
                },
                {
                    type: 'เงินกองทุนเพื่อส่งเสริมการอนุรักษ์พลังงาน',
                    follow: 1,
                    according: 1,
                    normal:1,
                    reduce:1,
                    tax:1,
                },
                  {
                    type: 'เงินกองทุน - สุรา',
                    follow: 1,
                    according: 1,
                    normal:1,
                    reduce:1,
                    tax:1,
                },
                  {
                    type: 'เงินกองทุนบำรุง ส.ส.ท. สุรา',
                    follow: 1,
                    according: 1,
                    normal:1,
                    reduce:1,
                    tax:1,
                },
                  {
                    type: 'เงินกองทุนเพื่อกีฬาแห่งชาติ - สุรา',
                    follow: 1,
                    according: 1,
                    normal:1,
                    reduce:1,
                    tax:1,
                },
                  {
                    type: 'เงินกองทุนเพื่อผู้สูงอายุ - สุรา',
                    follow: 1,
                    according: 1,
                    normal:1,
                    reduce:1,
                    tax:1,
                },
                  {
                    type: 'เงินกองทุน - ยาสูบ',
                    follow: 1,
                    according: 1,
                    normal:1,
                    reduce:1,
                    tax:1,
                },
                 {
                    type: 'เงินกองทุนบำรุง ส.ส.ท. ยาสูบ',
                    follow: 1,
                    according: 1,
                    normal:1,
                    reduce:1,
                    tax:1,
                },
                 {
                    type: 'เงินกองทุนเพื่อกีฬาแห่งชาติ - ยาสูบ',
                    follow: 1,
                    according: 1,
                    normal:1,
                    reduce:1,
                    tax:1,
                },
                 {
                    type: 'เงินกองทุนเพื่อผู้สูงอายุ - ยาสูบ',
                    follow: 1,
                    according: 1,
                    normal:1,
                    reduce:1,
                    tax:1,
                },
                {
                    type: 'ภาษีมูลค่าเพิ่ม',
                    follow: 1,
                    according: 1,
                    normal:1,
                    reduce:1,
                    tax:1,
                     
                    insurance:'1',
                    balance:'1',
                    c:'1',
                    reason:'1',
                    percentextra:'1',
                    extra:'1'
                },
                {
                    type: 'ฐานภาษีมูลค่าเพิ่ม',
                    follow: 1,
                    

                },
            ],
        }
    },
}
</script>

<style>

</style>
