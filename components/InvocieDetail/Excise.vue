<template>
<div>
    <v-card class="p-1 mb-6">
        <div class="bg-gray-200 p-4">
            <label class="text-xl font-semibold">พิกัดสรรสามิต</label>
            <div class="flex space-x-4 pt-2">
                <div class="w-1/2">
                    <label class="text-sm font-semibold">Excise Code</label>
                    <div class="flex space-x-4">
                        <v-combobox value="000050079090" dense color="base" background-color="white"  outlined></v-combobox>
                         
                    </div>
                </div>
            </div>
            <div class="flex space-x-4 pt-2">
                <div class="w-1/2">
                    <label class="text-sm font-semibold"> อัตราคาม %</label>
                    <div class="flex space-x-4">
                        <v-text-field dense value="22" color="base" outlined></v-text-field>
                        
                    </div>

                </div>

                <div class="w-1/2">
                    <label class="text-sm font-semibold">อัตราคามสภาพ</label>
                    <div class="flex space-x-4">
                        <v-text-field dense color="base" value="6.5" outlined></v-text-field>
                        <v-btn class="ml-3 rounded-lg" depressed color="white"  > LTR</v-btn>
                    </div>
                    
                </div>
            </div>
            <div class="flex space-x-4 pt-2">
                <div class="w-1/2">
                    <label class="text-sm font-semibold">ปริมาณ</label>
                    <div class="flex space-x-4">
                        <v-text-field  value="0" dense color="base" background-color="white" outlined></v-text-field>
                         
                    </div>

                </div>

                <div class="w-1/2">
                    <label class="text-sm font-semibold">ปริมาณประเมิน</label>
                    <div class="flex space-x-4">
                        <v-text-field dense value="0"  color="base" background-color="white" outlined></v-text-field>
                         
                    </div>

                </div>
            </div>
            <div class="flex space-x-4 pt-2">
                <div class="w-1/2">
                    <label class="text-sm font-semibold">ราคาขายปลีก</label>
                    <div class="flex space-x-4">
                        <v-text-field  value="300" dense color="base" background-color="white" outlined></v-text-field>
                         
                    </div>

                </div>

                <div class="w-1/2">
                    <label class="text-sm font-semibold">ดีกรีสุรา</label>
                    <div class="flex space-x-4">
                        <v-text-field  value="10" dense color="base" background-color="white" outlined></v-text-field>
                         
                    </div>

                </div>
            </div>
                <div class="flex space-x-4 pt-2">
                <div class="w-1/2">
                    <label class="text-sm font-semibold">ขนาดบรรจุต่อภาชนะ</label>
                    <div class="flex space-x-4">
                        <v-text-field dense  value="0.75" color="base" background-color="white" outlined></v-text-field>
                         
                    </div>

                </div>

                <div class="w-1/2">
                    <label class="text-sm font-semibold">จำนวนที่นำเข้า</label>
                    <div class="flex space-x-4">
                        <v-text-field dense color="base"  value="150" background-color="white" outlined></v-text-field>
                        
                    </div>

                </div>
            </div>
        </div>
    </v-card>

</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
