<template>
<div>
   <v-card class="p-1 mb-6">
        <div class="bg-gray-200 p-4">
            <label class="text-xl font-semibold">Change (Inv.)</label>

            <div class="flex space-x-4 pt-2">
                <div class="w-1/2">
                    <label class="text-sm font-semibold">Forwarding</label>
                    <div class="flex space-x-4">
                        <v-text-field value="37.03" dense color="base" background-color="white" outlined></v-text-field>
                    </div>
                </div>
                <div class="w-1/2">
                    <label class="text-sm font-semibold">สกุลเงิน</label>
                    <div class="flex space-x-4">
                        <v-combobox dense value="JOD"  color="base" background-color="white"  outlined></v-combobox>
                    </div>
                </div>
                <div class="w-1/2">
                    <br>
                    <div class="flex space-x-4">
                        <v-text-field dense color="base" value="42.64100" outlined></v-text-field>
                    </div>
                </div>
                <div class="w-1/2">
                    <br>
                    <div class="flex space-x-4">
                        <v-text-field dense color="base" value="1,119.51" outlined></v-text-field>
                    </div>
                </div>
            </div>
            
             <div class="flex space-x-4 pt-2">
                <div class="w-1/2">
                    <label class="text-sm font-semibold">Freight</label>
                    <div class="flex space-x-4">
                        <v-text-field dense color="base" value="55.5" background-color="white" outlined></v-text-field>
                    </div>
                </div>
                <div class="w-1/2">
                    <label class="text-sm font-semibold">สกุลเงิน</label>
                    <div class="flex space-x-4">
                        <v-combobox dense color="base" value="THB" background-color="white"  outlined></v-combobox>
                    </div>
                </div>
                <div class="w-1/2">
                    <br>
                    <div class="flex space-x-4">
                        <v-text-field dense color="base" value="1.00000" outlined></v-text-field>
                    </div>
                </div>
                <div class="w-1/2">
                    <br>
                    <div class="flex space-x-4">
                        <v-text-field dense color="base" value="457.13" outlined></v-text-field>
                    </div>
                </div>
            </div>

             <div class="flex space-x-4 pt-2">
                <div class="w-1/2">
                    <label class="text-sm font-semibold">Insurance</label>
                    <div class="flex space-x-4">
                        <v-text-field dense color="base" value=" 1,074.07" background-color="white" outlined></v-text-field>
                    </div>
                </div>
                <div class="w-1/2">
                    <label class="text-sm font-semibold">สกุลเงิน</label>
                    <div class="flex space-x-4">
                        <v-combobox dense color="base" background-color="white" value=" KES" outlined></v-combobox>
                    </div>
                </div>
                <div class="w-1/2">
                    <br>
                    <div class="flex space-x-4">
                        <v-text-field dense color="base" value="0.27380" outlined></v-text-field>
                    </div>
                </div>
                <div class="w-1/2">
                    <br>
                    <div class="flex space-x-4">
                        <v-text-field dense color="base" value="143,915.39" outlined></v-text-field>
                    </div>
                </div>
            </div>

             <div class="flex space-x-4 pt-2">
                <div class="w-1/2">
                    <label class="text-sm font-semibold">Packing</label>
                    <div class="flex space-x-4">
                        <v-text-field dense color="base" background-color="white" value="55.54" outlined></v-text-field>
                    </div>
                </div>
                <div class="w-1/2">
                    <label class="text-sm font-semibold">สกุลเงิน</label>
                    <div class="flex space-x-4">
                        <v-combobox dense color="base" background-color="white" value="1.00000" outlined></v-combobox>
                    </div>
                </div>
                <div class="w-1/2">
                    <br>
                    <div class="flex space-x-4">
                        <v-text-field dense color="base" value="143,915.39" outlined></v-text-field>
                    </div>
                </div>
                <div class="w-1/2">
                    <br>
                    <div class="flex space-x-4">
                        <v-text-field dense color="base" value="457.13" outlined></v-text-field>
                    </div>
                </div>
            </div>

             <div class="flex space-x-4 pt-2">
                <div class="w-1/2">
                    <label class="text-sm font-semibold">Interior Transport</label>
                    <div class="flex space-x-4">
                        <v-text-field dense color="base" background-color="white" value="55.54" outlined></v-text-field>
                    </div>
                </div>
                <div class="w-1/2">
                    <label class="text-sm font-semibold">สกุลเงิน</label>
                    <div class="flex space-x-4">
                        <v-combobox dense color="base" background-color="white"  value="THB"  outlined></v-combobox>
                    </div>
                </div>
                <div class="w-1/2">
                    <br>
                    <div class="flex space-x-4">
                        <v-text-field dense color="base" value="1.00000"  outlined></v-text-field>
                    </div>
                </div>
                <div class="w-1/2">
                    <br>
                    <div class="flex space-x-4">
                        <v-text-field dense color="base"  value="457.13"  outlined></v-text-field>
                    </div>
                </div>
            </div>

             <div class="flex space-x-4 pt-2">
                <div class="w-1/2">
                    <label class="text-sm font-semibold">Landing</label>
                    <div class="flex space-x-4">
                        <v-text-field dense color="base" background-color="white" value="1,074.07"   outlined></v-text-field>
                    </div>
                </div>
                <div class="w-1/2">
                    <label class="text-sm font-semibold">สกุลเงิน</label>
                    <div class="flex space-x-4">
                        <v-combobox dense color="base" background-color="white" value="KES"  outlined></v-combobox>
                    </div>
                </div>
                <div class="w-1/2">
                    <br>
                    <div class="flex space-x-4">
                        <v-text-field dense color="base" value="0.27380" outlined></v-text-field>
                    </div>
                </div>
                <div class="w-1/2">
                    <br>
                    <div class="flex space-x-4">
                        <v-text-field dense color="base" value="43,915.39" outlined></v-text-field>
                    </div>
                </div>
            </div>

            <div class="flex space-x-4 pt-2">
                <div class="w-1/2">
                    <label class="text-sm font-semibold">Other</label>
                    <div class="flex space-x-4">
                        <v-text-field dense color="base" background-color="white"  value="1,851.85" outlined></v-text-field>
                    </div>
                </div>
                <div class="w-1/2">
                    <label class="text-sm font-semibold">สกุลเงิน</label>
                    <div class="flex space-x-4">
                        <v-combobox dense color="base" background-color="white" value="KWD" outlined></v-combobox>
                    </div>
                </div>
                <div class="w-1/2">
                    <br>
                    <div class="flex space-x-4">
                        <v-text-field dense color="base" value="99.29190" outlined></v-text-field>
                    </div>
                </div>
                <div class="w-1/2">
                    <br>
                    <div class="flex space-x-4">
                        <v-text-field dense color="base"value="4.14" outlined></v-text-field>
                    </div>
                </div>
            </div>




            
        </div>
    </v-card>

     <v-card class="p-1 mb-6">
        <div class="bg-gray-200 p-4">
            <label class="text-xl font-semibold">Change (เอกสารอื่นๆ)</label>

            <div class="flex space-x-4 pt-2">
                <div class="w-1/2">
                    <label class="text-sm font-semibold">Forwarding</label>
                    <div class="flex space-x-4">
                        <v-text-field value="37.03" dense color="base" background-color="white" outlined></v-text-field>
                    </div>
                </div>
                <div class="w-1/2">
                    <label class="text-sm font-semibold">สกุลเงิน</label>
                    <div class="flex space-x-4">
                        <v-combobox dense value="JOD"  color="base" background-color="white"  outlined></v-combobox>
                    </div>
                </div>
                <div class="w-1/2">
                    <br>
                    <div class="flex space-x-4">
                        <v-text-field dense color="base" value="42.64100" outlined></v-text-field>
                    </div>
                </div>
                <div class="w-1/2">
                    <br>
                    <div class="flex space-x-4">
                        <v-text-field dense color="base" value="1,119.51" outlined></v-text-field>
                    </div>
                </div>
            </div>
            
             <div class="flex space-x-4 pt-2">
                <div class="w-1/2">
                    <label class="text-sm font-semibold">Freight</label>
                    <div class="flex space-x-4">
                        <v-text-field dense color="base" value="55.5" background-color="white" outlined></v-text-field>
                    </div>
                </div>
                <div class="w-1/2">
                    <label class="text-sm font-semibold">สกุลเงิน</label>
                    <div class="flex space-x-4">
                        <v-combobox dense color="base" value="THB" background-color="white"  outlined></v-combobox>
                    </div>
                </div>
                <div class="w-1/2">
                    <br>
                    <div class="flex space-x-4">
                        <v-text-field dense color="base" value="1.00000" outlined></v-text-field>
                    </div>
                </div>
                <div class="w-1/2">
                    <br>
                    <div class="flex space-x-4">
                        <v-text-field dense color="base" value="457.13" outlined></v-text-field>
                    </div>
                </div>
            </div>

             <div class="flex space-x-4 pt-2">
                <div class="w-1/2">
                    <label class="text-sm font-semibold">Insurance</label>
                    <div class="flex space-x-4">
                        <v-text-field dense color="base" value=" 1,074.07" background-color="white" outlined></v-text-field>
                    </div>
                </div>
                <div class="w-1/2">
                    <label class="text-sm font-semibold">สกุลเงิน</label>
                    <div class="flex space-x-4">
                        <v-combobox dense color="base" background-color="white" value=" KES" outlined></v-combobox>
                    </div>
                </div>
                <div class="w-1/2">
                    <br>
                    <div class="flex space-x-4">
                        <v-text-field dense color="base" value="0.27380" outlined></v-text-field>
                    </div>
                </div>
                <div class="w-1/2">
                    <br>
                    <div class="flex space-x-4">
                        <v-text-field dense color="base" value="143,915.39" outlined></v-text-field>
                    </div>
                </div>
            </div>

             <div class="flex space-x-4 pt-2">
                <div class="w-1/2">
                    <label class="text-sm font-semibold">Packing</label>
                    <div class="flex space-x-4">
                        <v-text-field dense color="base" background-color="white" value="55.54" outlined></v-text-field>
                    </div>
                </div>
                <div class="w-1/2">
                    <label class="text-sm font-semibold">สกุลเงิน</label>
                    <div class="flex space-x-4">
                        <v-combobox dense color="base" background-color="white" value="1.00000" outlined></v-combobox>
                    </div>
                </div>
                <div class="w-1/2">
                    <br>
                    <div class="flex space-x-4">
                        <v-text-field dense color="base" value="143,915.39" outlined></v-text-field>
                    </div>
                </div>
                <div class="w-1/2">
                    <br>
                    <div class="flex space-x-4">
                        <v-text-field dense color="base" value="457.13" outlined></v-text-field>
                    </div>
                </div>
            </div>

             <div class="flex space-x-4 pt-2">
                <div class="w-1/2">
                    <label class="text-sm font-semibold">Interior Transport</label>
                    <div class="flex space-x-4">
                        <v-text-field dense color="base" background-color="white" value="55.54" outlined></v-text-field>
                    </div>
                </div>
                <div class="w-1/2">
                    <label class="text-sm font-semibold">สกุลเงิน</label>
                    <div class="flex space-x-4">
                        <v-combobox dense color="base" background-color="white"  value="THB"  outlined></v-combobox>
                    </div>
                </div>
                <div class="w-1/2">
                    <br>
                    <div class="flex space-x-4">
                        <v-text-field dense color="base" value="1.00000"  outlined></v-text-field>
                    </div>
                </div>
                <div class="w-1/2">
                    <br>
                    <div class="flex space-x-4">
                        <v-text-field dense color="base"  value="457.13"  outlined></v-text-field>
                    </div>
                </div>
            </div>

             <div class="flex space-x-4 pt-2">
                <div class="w-1/2">
                    <label class="text-sm font-semibold">Landing</label>
                    <div class="flex space-x-4">
                        <v-text-field dense color="base" background-color="white" value="1,074.07"   outlined></v-text-field>
                    </div>
                </div>
                <div class="w-1/2">
                    <label class="text-sm font-semibold">สกุลเงิน</label>
                    <div class="flex space-x-4">
                        <v-combobox dense color="base" background-color="white" value="KES"  outlined></v-combobox>
                    </div>
                </div>
                <div class="w-1/2">
                    <br>
                    <div class="flex space-x-4">
                        <v-text-field dense color="base" value="0.27380" outlined></v-text-field>
                    </div>
                </div>
                <div class="w-1/2">
                    <br>
                    <div class="flex space-x-4">
                        <v-text-field dense color="base" value="43,915.39" outlined></v-text-field>
                    </div>
                </div>
            </div>

            <div class="flex space-x-4 pt-2">
                <div class="w-1/2">
                    <label class="text-sm font-semibold">Other</label>
                    <div class="flex space-x-4">
                        <v-text-field dense color="base" background-color="white"  value="1,851.85" outlined></v-text-field>
                    </div>
                </div>
                <div class="w-1/2">
                    <label class="text-sm font-semibold">สกุลเงิน</label>
                    <div class="flex space-x-4">
                        <v-combobox dense color="base" background-color="white" value="KWD" outlined></v-combobox>
                    </div>
                </div>
                <div class="w-1/2">
                    <br>
                    <div class="flex space-x-4">
                        <v-text-field dense color="base" value="99.29190" outlined></v-text-field>
                    </div>
                </div>
                <div class="w-1/2">
                    <br>
                    <div class="flex space-x-4">
                        <v-text-field dense color="base"value="4.14" outlined></v-text-field>
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
