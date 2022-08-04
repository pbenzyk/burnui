<template>
<div>
    <v-form>
        <div class="    pt-8  ">
                <div class="flex space-x-4">
                     <div class="w-full">
                        <label class="text-base font-semibold">Forwarding</label>
                        <v-text-field dense  value="37.03"   color="base" outlined></v-text-field>
                    </div>
                    <div class="w-full">
                        <label class="text-base font-semibold">สกุลเงิน</label>
                        <v-combobox dense  value="JOD"   color="base" outlined></v-combobox>
                    </div>
                     <div class="w-full">
                        <br>
                        <v-text-field dense  value="42.64100 "  color="base" outlined></v-text-field>
                    </div>
                     <div class="w-full">
                        <label class="text-base font-semibold">label</label>
                        <v-combobox dense  label="ราคา" color="base" outlined></v-combobox>
                    </div>
                     <div class="w-full">
                        <label class="text-base font-semibold">วิธีเฉลี่ย</label>
                        <v-text-field dense   label="ราคา" color="base" outlined></v-text-field>
                    </div>
                     <div class=" w-full">
                            <v-radio-group>
                        <div class="flex space-x-4  ">
                                    <div class="-mt-3">
                                        <label class="text-base pl-1   font-semibold" >-</label>
                                        <v-radio color="base" class="pt-2"></v-radio>
                                    </div>
                                    <div class="-mt-3">
                                        <label class="text-base pl-1   font-semibold" >0</label>
                                        <v-radio color="base" class="pt-2"></v-radio>
                                    </div>
                                     <div class="-mt-3">
                                        <label class="text-base pl-1   font-semibold" >+</label>
                                        <v-radio color="base" class="pt-2"></v-radio>
                                    </div>
                
                                </div>    
                      </v-radio-group>
                    </div>     
                </div>

                <div class="flex space-x-4">
                     <div class="w-full">
                        <label class="text-base font-semibold">Freight</label>
                        <v-text-field dense value="55.54"  color="base" outlined></v-text-field>
                    </div>
                    <div class="w-full">
                        <label class="text-base font-semibold">สกุลเงิน</label>
                        <v-combobox dense value="THB" color="base" outlined></v-combobox>
                    </div>
                     <div class="w-full">
                        <br>
                        <v-text-field dense value="100000" color="base" outlined></v-text-field>
                    </div>
                     <div class="w-full">
                        <label class="text-base font-semibold">label</label>
                        <v-text-field  dense   color="base" outlined></v-text-field>
                    </div>
                     <div class="w-full">
                        <label class="text-base font-semibold">วิธีเฉลี่ย</label>
                        <v-text-field dense value="ราคา" color="base" outlined></v-text-field>
                    </div>
                     <div class=" w-full">
                            <v-radio-group>
                        <div class="flex space-x-4  ">
                                    <div class="-mt-3">
                                        <label class="text-base pl-1   font-semibold" >-</label>
                                        <v-radio color="base" class="pt-2"></v-radio>
                                    </div>
                                    <div class="-mt-3">
                                        <label class="text-base pl-1   font-semibold" >0</label>
                                        <v-radio color="base" class="pt-2"></v-radio>
                                    </div>
                                     <div class="-mt-3">
                                        <label class="text-base pl-1   font-semibold" >+</label>
                                        <v-radio color="base" class="pt-2"></v-radio>
                                    </div>
                
                                </div>    
                      </v-radio-group>
                    </div>     
                </div>

                <div class="flex space-x-4">
                     <div class="w-full">
                        <label class="text-base font-semibold">Insurance</label>
                        <v-text-field dense value="20000" color="base" outlined></v-text-field>
                    </div>
                    <div class="w-full">
                        <label class="text-base font-semibold">สกุลเงิน</label>
                        <v-combobox dense value="KES" color="base" outlined></v-combobox>
                    </div>
                     <div class="w-full">
                        <br>
                        <v-text-field dense value="0.22478" color="base" outlined></v-text-field>
                    </div>
                     <div class="w-full">
                        <label class="text-base font-semibold">label</label>
                        <v-text-field  dense    color="base" outlined></v-text-field>
                    </div>
                     <div class="w-full">
                        <label class="text-base font-semibold">วิธีเฉลี่ย</label>
                        <v-text-field dense value="ราคา" color="base" outlined></v-text-field>
                    </div>
                     <div class=" w-full">
                            <v-radio-group>
                        <div class="flex space-x-4  ">
                                    <div class="-mt-3">
                                        <label class="text-base pl-1   font-semibold" >-</label>
                                        <v-radio color="base" class="pt-2"></v-radio>
                                    </div>
                                    <div class="-mt-3">
                                        <label class="text-base pl-1   font-semibold" >0</label>
                                        <v-radio color="base" class="pt-2"></v-radio>
                                    </div>
                                     <div class="-mt-3">
                                        <label class="text-base pl-1   font-semibold" >+</label>
                                        <v-radio color="base" class="pt-2"></v-radio>
                                    </div>
                
                                </div>    
                      </v-radio-group>
                    </div>     
                </div>


                <div class="flex space-x-4">
                     <div class="w-full">
                        <label class="text-base font-semibold">Packing</label>
                        <v-text-field dense value="1,8256" color="base" outlined></v-text-field>
                    </div>
                    <div class="w-full">
                        <label class="text-base font-semibold">สกุลเงิน</label>
                        <v-combobox dense value="KWD" color="base" outlined></v-combobox>
                    </div>
                     <div class="w-full">
                        <br>
                        <v-text-field dense value="8.05780" color="base" outlined></v-text-field>
                    </div>
                     <div class="w-full">
                        <label class="text-base font-semibold">label</label>
                        <v-text-field  dense   color="base" outlined></v-text-field>
                    </div>
                     <div class="w-full">
                        <label class="text-base font-semibold">วิธีเฉลี่ย</label>
                        <v-text-field dense  value="ราคา" color="base" outlined></v-text-field>
                    </div>
                     <div class=" w-full">
                            <v-radio-group>
                        <div class="flex space-x-4  ">
                                    <div class="-mt-3">
                                        <label class="text-base pl-1   font-semibold" >-</label>
                                        <v-radio color="base" class="pt-2"></v-radio>
                                    </div>
                                    <div class="-mt-3">
                                        <label class="text-base pl-1   font-semibold" >0</label>
                                        <v-radio color="base" class="pt-2"></v-radio>
                                    </div>
                                     <div class="-mt-3">
                                        <label class="text-base pl-1   font-semibold" >+</label>
                                        <v-radio color="base" class="pt-2"></v-radio>
                                    </div>
                
                                </div>    
                      </v-radio-group>
                    </div>     
                </div>

                <div class="flex space-x-4">
                     <div class="w-full">
                        <label class="text-base font-semibold">Interior Transport</label>
                        <v-text-field dense value="37.04" color="base" outlined></v-text-field>
                    </div>
                    <div class="w-full">
                        <label class="text-base font-semibold">สกุลเงิน</label>
                        <v-combobox dense value="SAR" color="base" outlined></v-combobox>
                    </div>
                     <div class="w-full">
                        <br>
                        <v-text-field dense value="99.29213" color="base" outlined></v-text-field>
                    </div>
                     <div class="w-full">
                        <label class="text-base font-semibold">label</label>
                        <v-text-field  dense   color="base" outlined></v-text-field>
                    </div>
                     <div class="w-full">
                        <label class="text-base font-semibold">วิธีเฉลี่ย</label>
                        <v-text-field dense value="ราคา" color="base" outlined></v-text-field>
                    </div>
                     <div class=" w-full">
                            <v-radio-group>
                        <div class="flex space-x-4  ">
                                    <div class="-mt-3">
                                        <label class="text-base pl-1   font-semibold" >-</label>
                                        <v-radio color="base" class="pt-2"></v-radio>
                                    </div>
                                    <div class="-mt-3">
                                        <label class="text-base pl-1   font-semibold" >0</label>
                                        <v-radio color="base" class="pt-2"></v-radio>
                                    </div>
                                     <div class="-mt-3">
                                        <label class="text-base pl-1   font-semibold" >+</label>
                                        <v-radio color="base" class="pt-2"></v-radio>
                                    </div>
                
                                </div>    
                      </v-radio-group>
                    </div>     
                </div>

                <div class="flex space-x-4">
                     <div class="w-full">
                        <label class="text-base font-semibold">Landing</label>
                        <v-text-field dense value="148.15" color="base" outlined></v-text-field>
                    </div>
                    <div class="w-full">
                        <label class="text-base font-semibold">สกุลเงิน</label>
                        <v-combobox dense value="SGD" color="base" outlined></v-combobox>
                    </div>
                     <div class="w-full">
                        <br>
                        <v-text-field dense value="22.875468" color="base" outlined></v-text-field>
                    </div>
                     <div class="w-full">
                        <label class="text-base font-semibold">label</label>
                        <v-text-field  dense   color="base" outlined></v-text-field>
                    </div>
                     <div class="w-full">
                        <label class="text-base font-semibold">วิธีเฉลี่ย</label>
                        <v-text-field dense value="ราคา" color="base" outlined></v-text-field>
                    </div>
                     <div class=" w-full">
                            <v-radio-group>
                        <div class="flex space-x-4  ">
                                    <div class="-mt-3">
                                        <label class="text-base pl-1   font-semibold" >-</label>
                                        <v-radio color="base" class="pt-2"></v-radio>
                                    </div>
                                    <div class="-mt-3">
                                        <label class="text-base pl-1   font-semibold" >0</label>
                                        <v-radio color="base" class="pt-2"></v-radio>
                                    </div>
                                     <div class="-mt-3">
                                        <label class="text-base pl-1   font-semibold" >+</label>
                                        <v-radio color="base" class="pt-2"></v-radio>
                                    </div>
                
                                </div>    
                      </v-radio-group>
                    </div>     
                </div>

                <div class="flex space-x-4">
                     <div class="w-full">
                        <label class="text-base font-semibold">Other</label>
                        <v-text-field dense value="185" color="base" outlined></v-text-field>
                    </div>
                    <div class="w-full">
                        <label class="text-base font-semibold">สกุลเงิน</label>
                        <v-combobox dense value="SGD" color="base" outlined></v-combobox>
                    </div>
                     <div class="w-full">
                        <br>
                        <v-text-field dense value="8.23554" color="base" outlined></v-text-field>
                    </div>
                     <div class="w-full">
                        <label class="text-base font-semibold">label</label>
                        <v-text-field  dense   color="base" outlined></v-text-field>
                    </div>
                     <div class="w-full">
                        <label class="text-base font-semibold">วิธีเฉลี่ย</label>
                        <v-text-field dense value="ราคา" color="base" outlined></v-text-field>
                    </div>
                     <div class=" w-full">
                            <v-radio-group>
                        <div class="flex space-x-4  ">
                                    <div class="-mt-3">
                                        <label class="text-base pl-1   font-semibold" >-</label>
                                        <v-radio color="base" class="pt-2"></v-radio>
                                    </div>
                                    <div class="-mt-3">
                                        <label class="text-base pl-1   font-semibold" >0</label>
                                        <v-radio color="base" class="pt-2"></v-radio>
                                    </div>
                                     <div class="-mt-3">
                                        <label class="text-base pl-1   font-semibold" >+</label>
                                        <v-radio color="base" class="pt-2"></v-radio>
                                    </div>
                
                                </div>    
                      </v-radio-group>
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
