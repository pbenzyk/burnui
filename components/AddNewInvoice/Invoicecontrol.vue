<template>
<div>
    <v-form>
        <div class="flex flex-col md:flex-row  pt-8 md:space-x-24">
            <div class="w-full md:w-3/5  ">

                <div class="flex flex-col md:flex-row  md:space-x-4">
                    <div class="w-full md:w-1/2 ">
                        <label class="text-sm font-semibold">Invoice No.</label>
                        <v-combobox dense label="กรุณาเลือก" color="base" outlined></v-combobox>

                    </div>
                    <div class="w-full md:w-1/2 ">
                        <label class="text-sm font-semibold">Invoice Date</label>
                        <v-text-field dense type="date" color="base" outlined></v-text-field>

                    </div>
                </div>

                <label class="text-sm font-semibold">Consiger Code</label>
                <div class="flex flex-col md:flex-row ">
                    <v-combobox dense label="กรุณาเลือก" color="base" outlined></v-combobox>
                    <v-btn @click="hidden=!hidden" class="ml-3 rounded-lg" depressed :color="(!hidden)?'#495057':'base'" dark>
                        <span v-if="!hidden">ซ่อน</span>
                        <span v-else>แสดง</span>
                    </v-btn>
                    <v-btn class="ml-3 rounded-lg" depressed color="base" dark> L</v-btn>
                </div>
                <div v-if="!hidden" class="animate__animated animate__fadeIn">
                    <label class="text-sm font-semibold">Consiger Name</label>
                    <div class="flex flex-col md:flex-row ">
                        <v-combobox dense label="กรุณาเลือก" color="base" outlined></v-combobox>
                        <v-btn class="ml-3 rounded-lg" depressed color="base" dark> S</v-btn>
                    </div>

                    <label class="text-sm font-semibold">Street And Number</label>
                    <v-text-field dense label="ระบุข้อมูล..." color="base" outlined></v-text-field>

                    <div class="flex flex-col md:flex-row  md:space-x-4">
                        <div class="w-full md:w-1/2 ">
                            <label class="text-sm font-semibold">District</label>
                            <v-text-field dense label="กรุณาเลือก" color="base" outlined></v-text-field>

                        </div>
                        <div class="w-full md:w-1/2 ">
                            <label class="text-sm font-semibold">Sub Province</label>
                            <v-text-field dense label="ระบุข้อมูล..." color="base" outlined></v-text-field>

                        </div>
                    </div>

                    <div class="flex flex-col md:flex-row  md:space-x-4">
                        <div class="w-full md:w-1/2 ">
                            <label class="text-sm font-semibold">Province</label>
                            <v-text-field dense label="ระบุข้อมูล..." color="base" outlined></v-text-field>

                        </div>
                        <div class="w-full md:w-1/2 ">
                            <label class="text-sm font-semibold">Post Code</label>
                            <v-combobox dense label="กรุณาเลือก" color="base" outlined></v-combobox>

                        </div>
                    </div>

                    <div class="flex flex-col md:flex-row  md:space-x-4">
                        <div class="w-full md:w-1/2 ">
                            <label class="text-sm font-semibold">Country</label>
                            <v-combobox dense label="กรุณาเลือก" color="base" outlined></v-combobox>

                        </div>
                        <div class="w-full md:w-1/2 ">
                            <label class="text-sm font-semibold">Consignor Status</label>
                            <v-combobox dense label="กรุณาเลือก" color="base" outlined></v-combobox>

                        </div>
                    </div>

                    <label class="text-sm font-semibold">Email</label>
                    <v-text-field dense label="ระบุข้อมูล..." color="base" outlined></v-text-field>

                </div>

                <label class="text-sm font-semibold">Terms</label>
                <v-combobox dense label="กรุณาเลือก" color="base" outlined></v-combobox>

                <div class="flex flex-col md:flex-row  md:space-x-4 pt-3">
                    <div class="w-full">
                        <label class="text-base font-semibold">Total Invoice</label>
                        <v-text-field dense label="00000" color="base" outlined></v-text-field>
                    </div>
                    <div class="w-full">
                        <label class="text-base font-semibold">สกุลเงิน</label>
                        <v-combobox dense label="กรุณาเลือก" color="base" outlined></v-combobox>
                    </div>
                    <div class="w-full">
                        <br>
                        <v-text-field dense label="00000" color="base" outlined></v-text-field>
                    </div>

                </div>

                <div class="flex flex-col md:flex-row  md:space-x-4 pt-3">
                    <div class="w-full">
                        <label class="text-base font-semibold">Net Weight</label>
                        <v-text-field dense label="ระบุข้อมูล..." color="base" outlined></v-text-field>
                    </div>
                    <div class="w-full">
                        <label class="text-base font-semibold">หน่วย</label>
                        <v-combobox dense label="กรุณาเลือก" color="base" outlined></v-combobox>
                    </div>
                    <div class="w-full">
                        <label class="text-base font-semibold">วิธีเฉลี่ย</label>
                        <v-combobox dense label="กรุณาเลือก" color="base" outlined></v-combobox>
                    </div>
                    <div class="w-full">
                        <br>
                        <v-btn dense depressed color="base" dark>เฉลี่ย</v-btn>
                    </div>

                </div>

                <div class="flex flex-col md:flex-row  md:space-x-4 pt-3">
                    <div class="w-full">
                        <label class="text-base font-semibold">Gross Weight</label>
                        <v-text-field dense label="ระบุข้อมูล..." color="base" outlined></v-text-field>
                    </div>
                    <div class="w-full">
                        <label class="text-base font-semibold">หน่วย</label>
                        <v-combobox dense label="กรุณาเลือก" color="base" outlined></v-combobox>
                    </div>
                    <div class="w-full">
                        <label class="text-base font-semibold">วิธีเฉลี่ย</label>
                        <v-combobox dense label="กรุณาเลือก" color="base" outlined></v-combobox>
                    </div>
                    <div class="w-full">
                        <br>
                        <v-btn dense depressed color="base" dark>เฉลี่ย</v-btn>
                    </div>

                </div>

                <div class="flex flex-col md:flex-row  md:space-x-4 pt-3">
                    <div class="w-full">
                        <label class="text-base font-semibold">Package</label>
                        <v-text-field dense label="0.00" color="base" outlined></v-text-field>
                    </div>
                    <div class="w-full">
                        <label class="text-base font-semibold">หน่วย</label>
                        <v-combobox dense label="กรุณาเลือก" color="base" outlined></v-combobox>
                    </div>

                </div>
            </div>

            <div class="w-full md:w-2/5 ">
                <div class="flex flex-col md:flex-row  md:space-x-4">
                    <div class="w-full md:w-1/2 ">
                        <label class="text-sm font-semibold">PO No.</label>
                        <v-text-field dense label="ระบุข้อมูล..." color="base" outlined></v-text-field>

                    </div>
                    <div class="w-full md:w-1/2 ">
                        <label class="text-sm font-semibold">Term of Payment</label>
                        <v-text-field dense label="ระบุข้อมูล..." color="base" outlined></v-text-field>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row  md:space-x-4">
                    <div class="w-full md:w-1/2 ">
                        <label class="text-sm font-semibold">Buyer Status</label>
                        <v-combobox class="pt-1" dense label="กรุณาเลือก" color="base" outlined></v-combobox>

                    </div>
                    <div class="w-full md:w-1/2 ">
                        <label class="text-sm font-semibold">Commercial Level</label>
                        <v-combobox class="pt-1" dense label="กรุณาเลือก" color="base" outlined></v-combobox>
                    </div>
                </div>

                <label class="text-sm font-semibold">AEOs Reference No.</label>
                <v-text-field dense label="ระบุข้อมูล" color="base" outlined></v-text-field>

                <label class="text-sm font-semibold">Detail of Other Charge</label>
                <v-text-field dense label="ระบุข้อมูล..." color="base" outlined></v-text-field>

                <div class="pt-4">
                    <label class="text-sm font-semibold   "> Self Certification Remark</label>
                    <v-text-field dense label="ระบุข้อมูล..." color="base" outlined></v-text-field>
                </div>

                <div class="flex flex-col md:flex-row  md:space-x-4">
                    <div class="w-full md:w-1/2 ">
                        <label class="text-sm font-semibold">CIF Foreign </label>
                        <v-text-field dense label="ระบุข้อมูล..." color="base" outlined></v-text-field>

                    </div>
                    <div class="w-full md:w-1/2 ">
                        <label class="text-sm font-semibold"> CIF Baht</label>
                        <v-text-field dense label="ระบุข้อมูล..." color="base" outlined></v-text-field>

                    </div>
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
        return {
            hidden: false,
        }
    },
    props: {

    },
    methods: {

    },
}
</script>

<style lang="scss" scoped>

</style>
