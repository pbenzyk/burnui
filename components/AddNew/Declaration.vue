<template>
<div>
    <v-form>
        <div class="flex pt-8 space-x-24">
            <div class="w-3/5  ">
                <label class="text-sm font-semibold">ประเภทเอกสาร</label>
                <v-combobox dense label="กรุณาเลือก" color="base" outlined></v-combobox>

                <label class="text-sm font-semibold">ประเภทใบขน</label>
                <v-combobox dense label="กรุณาเลือก" color="base" outlined></v-combobox>

                <label class="text-sm font-semibold">Broker</label>
                <div class="flex">
                    <v-combobox dense label="กรุณาเลือก" color="base" outlined></v-combobox>
                    <v-btn class="ml-3 rounded-lg" depressed color="base"   dark> เเสดง</v-btn>
                </div>

                <div class="flex space-x-4">
                    <div class="w-1/2 ">
                        <label class="text-sm font-semibold">Sub Broker</label>
                        <v-combobox dense label="กรุณาเลือก" color="base" outlined></v-combobox>

                    </div>
                    <div class="w-1/2 ">
                        <label class="text-sm font-semibold">Branch</label>
                        <v-text-field dense label="000000" color="base" outlined></v-text-field>

                    </div>
                </div>

                <label class="text-sm font-semibold">ผู้นำเข้า</label>
                <div class="flex">
                    <v-combobox dense label="กรุณาเลือก" color="base" outlined></v-combobox>
                    <v-btn class="ml-3 rounded-lg" depressed color="base"   dark> เเสดง</v-btn>
                </div>

                <div class="flex space-x-4 ">
                    <div class="w-full">
                        <label class="text-sm font-semibold">วันที่นำเข้า</label>
                        <v-text-field dense label="" type="date" color="base" outlined></v-text-field>
                    </div>
                    <div class="w-full">
                        <label class="text-sm font-semibold">สกุลเงิน</label>
                        <v-combobox dense label="กรุณาเลือก" color="base" outlined></v-combobox>
                    </div>
                    <div class="w-full">
                        <br>
                        <v-text-field class="pt-1" dense label="0.00000" color="base" outlined></v-text-field>
                    </div>
                    <div class="w-full">
                        <label class="text-sm font-semibold">Departure Date</label>
                        <v-text-field dense label="000000" color="base" outlined></v-text-field>
                    </div>
                </div>

                <label class="text-sm font-semibold">นำเข้าโดยทาง</label>
                <v-combobox dense label="กรุณาเลือก" color="base" outlined></v-combobox>

                <div class="flex space-x-4">
                    <div class="w-1/2 ">
                        <label class="text-sm font-semibold">ชื่อยานพาหนะ</label>
                        <v-combobox dense label="กรุณาเลือก" color="base" outlined></v-combobox>

                    </div>
                    <div class="w-1/2 ">
                        <label class="text-sm font-semibold">Voyage No</label>
                        <v-text-field dense label="ระบุข้อมูล..." color="base" outlined></v-text-field>

                    </div>
                </div>

                <label class="text-sm font-semibold">ประเภทการบรรจุ</label>
                <v-combobox dense label="กรุณาเลือก" color="base" outlined></v-combobox>

                <div class="flex space-x-4">
                    <div class="w-1/2 ">
                        <label class="text-sm font-semibold">ประเภทกำเนิด</label>
                        <v-combobox dense label="กรุณาเลือก" color="base" outlined></v-combobox>

                    </div>
                    <div class="w-1/2 ">
                        <br>
                        <v-text-field class="pt-1" dense label="-" color="base" outlined></v-text-field>

                    </div>
                </div>

                <div class="flex space-x-4">
                    <div class="w-1/2 ">
                        <label class="text-sm font-semibold">ประเทศต้นทางบรรทุก</label>
                        <v-combobox dense label="กรุณาเลือก" color="base" outlined></v-combobox>

                    </div>
                    <div class="w-1/2 ">
                        <br>
                        <v-text-field class="pt-1" dense label="-" color="base" outlined></v-text-field>

                    </div>
                </div>

                <div class="flex space-x-4">
                    <div class="w-1/2 ">
                        <label class="text-sm font-semibold">ท่าที่นำเข้า</label>
                        <v-combobox dense label="กรุณาเลือก" color="base" outlined></v-combobox>

                    </div>
                    <div class="w-1/2 ">
                        <br>
                        <v-text-field class="pt-1" dense label="-" color="base" outlined></v-text-field>

                    </div>
                </div>

                <div class="flex space-x-4">
                    <div class="w-1/2 ">
                        <label class="text-sm font-semibold">ท่าที่ตรวจปล่อย</label>
                        <v-combobox dense label="กรุณาเลือก" color="base" outlined></v-combobox>

                    </div>
                    <div class="w-1/2 ">
                        <br>
                        <v-text-field class="pt-1" dense label="-" color="base" outlined></v-text-field>

                    </div>
                </div>

                <div class="flex space-x-4">
                    <div class="w-1/2 ">
                        <label class="text-sm font-semibold">Master</label>
                        <v-text-field dense label="กรุณาเลือก" color="base" outlined></v-text-field>

                    </div>
                    <div class="w-1/2 ">
                        <label class="text-sm font-semibold"> House</label>
                        <v-text-field dense label="ระบุข้อมูล..." color="base" outlined></v-text-field>

                    </div>
                </div>

                <label class="text-sm font-semibold">บัตรผ่านพิธีการ</label>

                <div class="flex space-x-4 pt-3">
                <div class="w-1/2 ">
                        <label class="text-sm font-semibold">ชื่อ</label>
                        <v-combobox dense label="ระบุข้อมูล..." color="base" outlined></v-combobox>
                    </div>
                    <div class="w-full">
                        <br>
                        <v-text-field dense label="เลขบัตรผ่านพิธีการ" color="base" outlined></v-text-field>
                    </div>
                    <div class="w-full">
                        <br>
                        <v-text-field dense label="หมายเลขโทรศัพท์" color="base" outlined></v-text-field>
                    </div>

                </div>
            </div>

            <div class="w-2/5 ">
                <div class="flex space-x-4">
                    <div class="w-1/2 ">
                        <label class="text-sm font-semibold">Net Weight</label>
                        <v-text-field dense label="0.0000" color="base" outlined></v-text-field>

                    </div>
                    <div class="w-1/2 ">
                        <br>
                        <v-combobox class="pt-1" dense label="KGM" color="base" outlined></v-combobox>
                    </div>
                </div>

                <div class="flex space-x-4">
                    <div class="w-1/2 ">
                        <label class="text-sm font-semibold">Gross Weight</label>
                        <v-text-field dense label="0.0000" color="base" outlined></v-text-field>

                    </div>
                    <div class="w-1/2 ">
                        <br>
                        <v-combobox class="pt-1" dense label="KGM" color="base" outlined></v-combobox>
                    </div>
                </div>

                <div class="flex space-x-4">
                    <div class="w-1/2 ">
                        <label class="text-sm font-semibold">Package Amount</label>
                        <v-text-field dense label="0.0000" color="base" outlined></v-text-field>

                    </div>
                    <div class="w-1/2 ">
                        <br>
                        <v-combobox class="pt-1" dense label="KGM" color="base" outlined></v-combobox>
                    </div>
                </div>

                <label class="text-sm font-semibold">Package 2</label>
                <v-text-field dense label="ระบุข้อมูล..." color="base" outlined></v-text-field>

                <v-card class="p-2">
                    <div class="bg-gray-100 roud-lg p-4">
                        <label class="text-xl font-semibold ">Shipping Mark</label>
                        <div class="flex justify-end space-x-2 p-2">

                            <v-btn  class="rounded-lg" depressed fab dark x-small color="base">
                                <span class="text-base">
                                    |
                                </span> 
                            </v-btn>
                            <v-btn class="rounded-lg"  depressed fab dark x-small color="base"> 
                                <span class="text-base">
                                    H
                                </span> 
                            </v-btn>
                            <v-btn class="rounded-lg" depressed fab dark x-small color="base"> 
                                <span class="text-base">
                                    _
                                </span> 
                            </v-btn>
                        </div>

                        <v-textarea background-color="white" color="base" dense label="ระบุข้อมูล..." outlined></v-textarea>
                        <v-checkbox class="font-semibold" color="red" dense label="มีปัญหาเรื่องพิกัด/ราคา/ต้องการให้ตรวจสอบ (ขอพบเจ้าหน้าที่)"></v-checkbox>
                        <v-checkbox class="font-semibold" color="red" dense label="ขออนุญาตเปิดตรวจนอกสถานที่ (มัดลวด)"></v-checkbox>
                        <v-checkbox class="font-semibold" color="red" dense label="ชำระค่าธรรมเนียมการผ่านพิธีการศุลกากร"></v-checkbox>
                    </div>

                </v-card>
                <div class="pt-4">
                    <label class="text-sm font-semibold   "> Reference No of Common Access</label>
                    <v-text-field dense label="ระบุข้อมูล..." color="base" outlined></v-text-field>
                </div>

                <div class="flex space-x-4">
                    <div class="w-1/2 ">
                        <label class="text-sm font-semibold">Outside Release Port</label>
                        <v-combobox dense label="กรุณาเลือก" color="base" outlined></v-combobox>

                    </div>
                    <div class="w-1/2 ">
                        <br>
                        <v-text-field class="pt-1" dense label="ระบุข้อมูล..." color="base" outlined></v-text-field>

                    </div>
                </div>

                <div class="flex space-x-4">
                    <div class="w-1/2 ">
                        <label class="text-sm font-semibold">Approval No</label>
                        <v-text-field dense label="ระบุข้อมูล..." color="base" outlined></v-text-field>

                    </div>
                    <div class="w-1/2 ">
                        <label class="text-sm font-semibold"> Port</label>
                        <v-text-field dense label="ระบุข้อมูล..." color="base" outlined></v-text-field>

                    </div>
                </div>

                <div class=" ">
                    <label class="text-sm font-semibold   "> Job No</label>
                    <v-text-field dense label="ระบุข้อมูล..." color="base" outlined></v-text-field>
                </div>

            </div>
        </div>
    </v-form>
</div>
</template>

<script>
export default {
    name: 'Declaration',
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
