<template>
<div>
    <v-form>
        <div class="flex flex-col md:flex-row pt-8 md:space-x-24">
            <div class="w-full md:w-3/5  ">
                <label class="text-sm font-semibold">วิธีการชำระเงิน</label>
                <v-combobox dense label="กรุณาเลือก" color="base" outlined></v-combobox>

                <label class="text-sm font-semibold">วิธีการวางประกัน</label>
                <v-combobox dense label="กรุณาเลือก" color="base" outlined></v-combobox>

                <label class="text-sm font-semibold">ประเภทการวางประกัน</label>
                <v-combobox dense label="กรุณาเลือก" color="base" outlined></v-combobox>

               
                <div class="flex flex-col md:flex-row md:space-x-4 pt-4">
                    <div class="w-full md:w-1/2 ">
                        <label class="text-sm font-semibold">ราคา FOB เงินต่างประเทศ</label>
                        <v-combobox dense label="กรุณาเลือก" color="base" outlined></v-combobox>

                    </div>
                    <div class="w-full md:w-1/2 ">
                        <br>
                        <v-text-field dense label="" value="USD" color="base" outlined></v-text-field>

                    </div>
                </div>

                <div class="flex flex-col md:flex-row md:space-x-4 pt-4">
                    <div class="w-full md:w-1/2 ">
                        <label class="text-sm font-semibold">ราคา FOB เงินบาท</label>
                      <v-text-field dense label="" value="2,359,709.98" color="base" outlined></v-text-field>

                    </div>
                    <div class="w-full md:w-1/2 ">
                        <label class="text-sm font-semibold">สกุลเงิน</label>
                        <v-text-field dense label="" value="USD" color="base" outlined></v-text-field>

                    </div>
                </div>

                <div class="flex flex-col md:flex-row md:space-x-4 pt-4">
                    <div class="w-full md:w-1/2 ">
                        <label class="text-sm font-semibold">ค่าภาษีอากรรวม</label>
                        <v-text-field dense label="" value="2,359,709.98" color="base" outlined></v-text-field>

                    </div>
                    <div class="w-full md:w-1/2 ">
                        <label class="text-sm font-semibold">เงินประกันรวม</label>
                        <v-text-field dense label="" value="THB" color="base" outlined></v-text-field>

                    </div>
                </div>

                <div class="flex flex-col md:flex-row md:space-x-4 pt-4">
                    <div class="w-full md:w-1/2 ">
                        <label class="text-sm font-semibold">ธนาคาร</label>
                       <v-text-field dense label="" value="USD" color="base" outlined></v-text-field>
                    </div>
                    <div class="w-full md:w-1/2 ">
                       <label class="text-sm font-semibold">เงินประกันรวม</label>
                        <v-text-field dense label="" value="THB" color="base" outlined></v-text-field>

                    </div>
                </div>

                <div>
                    <v-card class="p-2">
                        <div class="bg-gray-100 roud-lg p-4">
                            <label class="text-xl font-semibold ">ธนาคาร RGS</label>
                            <div class="flex flex-col md:flex-row md:space-x-4 pt-4">
                                <div class="w-full md:w-1/2 ">
                                    <label class="text-base font-semibold">ธนาคาร</label>
                                    <v-combobox dense  value="032"  color="base" outlined></v-combobox>
                                </div>
                                <div class="w-full md:w-1/2 ">
                                    <br>
                                    <v-text-field dense label="" value="ธนาคาร ดอยช์แบงก์ เอจี สาขากรุงเทพ" color="base" outlined></v-text-field>
                                </div>
                            </div>
                        </div> 
                    </v-card>
                </div>

                 <div class="pt-6">
                    <v-card class="p-2 ">
                        <div class="bg-gray-100 roud-lg p-4">
                            <label class="text-xl font-semibold ">ธนาคารรับอนุญาตจากกรมศุลกากร</label>
                            <div class="flex flex-col md:flex-row md:space-x-4 pt-4">
                                <div class="w-full md:w-1/2 ">
                                    <label class="text-base font-semibold">ธนาคาร</label>
                                    <v-combobox dense value="032" color="base" outlined></v-combobox>
                                </div>
                                <div class="w-full md:w-1/2 ">
                                    <br>
                                    <v-text-field dense label="" value="ธนาคาร ดอยช์แบงก์ เอจี สาขากรุงเทพ" color="base" outlined></v-text-field>
                                </div>
                            </div>
                        </div> 
                    </v-card>
                </div>

                <div class="pt-6">
                    <v-card class="p-2">
                        <div class="bg-gray-100 roud-lg p-4">
                            <label class="text-xl font-semibold ">ธนาคารผู้ส่งออก</label>
                            <div class="pt-4">
                                <label class="text-sm font-semibold">เลขที่บัญชีผู้นำเข้า</label>
                                <v-combobox dense label="กรุณาเลือก" color="base" outlined></v-combobox>

                                <label class="text-sm font-semibold">ชื่อบัญชี</label>
                                <v-text-field dense label="กรุณาเลือก" color="base" outlined></v-text-field>
                            </div>

                            <div class="flex flex-col md:flex-row md:space-x-4 pt-4">
                                <div class="w-full md:w-1/2 ">
                                    <label class="text-base font-semibold">ธนาคาร</label>
                                    <v-combobox dense value="032"  color="base" outlined></v-combobox>
                                </div>
                                <div class="w-full md:w-1/2 ">
                                    <br>
                                    <v-text-field dense label="" value="ธนาคาร ดอยช์แบงก์ เอจี สาขากรุงเทพ" color="base" outlined></v-text-field>
                                </div>
                            </div>
                            <div class="flex flex-col md:flex-row md:space-x-4 pt-4">
                                <div class="w-full md:w-1/2 ">
                                    <label class="text-base font-semibold">สาขา</label>
                                    <v-text-field dense label="กรุณาเลือก" color="base" outlined></v-text-field>
                                </div>
                                <div class="w-full md:w-1/2 ">
                                    <label class="text-base font-semibold">ยอดเงินที่ให้ตัด</label>
                                    <v-text-field dense label="00" color="base" outlined></v-text-field>
                                </div>
                            </div>
                        </div>

                    </v-card>
                </div>

                <div class="pt-6">
                    <v-card class="p-2">
                        <div class="bg-gray-100 roud-lg p-4">
                            <label class="text-xl font-semibold ">ธนาคารค้ำประกัน</label>
                            <div class="pt-4">
                                <label class="text-sm font-semibold">เลขสัญญาหนังสือธนาคารค้ำประกัน</label>
                                <v-combobox dense label="กรุณาเลือก" color="base" outlined></v-combobox>

                                <label class="text-sm font-semibold">ชื่อสัญญา</label>
                                <v-text-field dense label="ระบุข้อมูล..." color="base" outlined></v-text-field>
                            </div>

                            <div class="flex flex-col md:flex-row md:space-x-4 pt-4">
                                <div class="w-full md:w-1/2 ">
                                    <label class="text-base font-semibold">ธนาคาร</label>
                                    <v-combobox dense value="032"  color="base" outlined></v-combobox>
                                </div>
                                <div class="w-full md:w-1/2 ">
                                    <br>
                                    <v-text-field dense label="" value="ธนาคาร ดอยช์แบงก์ เอจี สาขากรุงเทพ" color="base" outlined></v-text-field>
                                </div>
                            </div>
                            <div class="flex flex-col md:flex-row md:space-x-4 pt-4">
                                <div class="w-full md:w-1/2 ">
                                    <label class="text-base font-semibold">สาขา</label>
                                    <v-text-field dense label="000001" color="base" outlined></v-text-field>
                                </div>
                                <div class="w-full md:w-1/2 ">
                                    <label class="text-base font-semibold">ยอดเงินวางประกัน</label>
                                    <v-text-field dense label="00" color="base" outlined></v-text-field>
                                </div>
                            </div>
                        </div>

                    </v-card>
                </div>

                <div class="pt-6">
                    <v-card class="p-2">
                        <div class="bg-gray-100 roud-lg p-4">
                            <label class="text-xl font-semibold ">ธนาคารบัญชีเคบิตบัตรภาษี</label>
                            <div class="pt-4">
                                <label class="text-sm font-semibold">เลขทะเบียนผู้รับเงินชดเชย</label>
                                <v-combobox dense label="กรุณาเลือก" color="base" outlined></v-combobox>

                                <label class="text-sm font-semibold">ผู้รับเงินชดเชย</label>
                                <v-text-field dense label="ระบุข้อมูล..." color="base" outlined></v-text-field>
                            </div>

                            <div class="flex flex-col md:flex-row md:space-x-4 pt-4">
                                <div class="w-full md:w-1/2 ">
                                    <label class="text-base font-semibold">ธนาคาร</label>
                                    <v-combobox dense value="032" color="base" outlined></v-combobox>
                                </div>
                                <div class="w-full md:w-1/2 ">
                                    <br>
                                    <v-text-field dense label="" value="ธนาคาร ดอยช์แบงก์ เอจี สาขากรุงเทพ" color="base" outlined></v-text-field>
                                </div>
                            </div>
                            <div class="flex flex-col md:flex-row md:space-x-4 pt-4">
                                <div class="w-full md:w-1/2 ">
                                    <label class="text-base font-semibold">สาขา</label>
                                    <v-text-field dense label="กรุณาเลือก" color="base" outlined></v-text-field>
                                </div>
                                <div class="w-full md:w-1/2 ">
                                    <label class="text-base font-semibold">ยอดเงินวางประกัน</label>
                                    <v-text-field dense label="00" color="base" outlined></v-text-field>
                                </div>
                            </div>
                        </div>

                    </v-card>
                </div>

                

            </div>

            <div class="w-full md:w-2/5 ">

                 
            </div>

        </div>
    </v-form>
</div>
</template>

<script>
export default {
    name: 'Payment',
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
