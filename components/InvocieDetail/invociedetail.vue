<template>
<div>
    <v-form>
        <div class="flex flex-col md:flex-row pt-8 md:space-x-4 ">
            <div class="w-full md:w-3/5  ">
                <label class="text-sm font-semibold">Product Code</label>
                <div class="flex flex-col md:flex-row">
                    <v-combobox dense value="HAIR CARE" color="base" outlined></v-combobox>
                    <v-btn class="ml-3 rounded-lg" depressed color="secondary" dark> S</v-btn>
                    <v-btn class="ml-3 rounded-lg" depressed color="base" dark> L</v-btn>
                </div>

                <div class="flex flex-col md:flex-row md:space-x-4 pt-3">
                    <div class="w-full">
                        <label class="text-base font-semibold">Tariff Code</label>
                        <v-text-field dense value="00564547" color="base" outlined></v-text-field>
                    </div>
                    <div class="w-full">
                        <label class="text-base font-semibold">Stat</label>
                        <v-combobox dense value="0000" color="base" outlined></v-combobox>

                    </div>
                    <div class="w-full">
                        <label class="text-base font-semibold">Privilege</label>
                        <v-combobox dense value="999" color="base" outlined></v-combobox>
                    </div>
                    <div class="w-full">
                        <label class="text-base font-semibold">Seq</label>
                        <v-combobox dense value="63001" color="base" outlined></v-combobox>
                    </div>
                </div>

                <label class="text-sm font-semibold">Import Tariff</label>
                <div class="flex flex-col md:flex-row">
                    <v-combobox dense value="2PART4" color="base" outlined></v-combobox>
                    <v-btn class="ml-3 rounded-lg" depressed color="secondary" dark> _</v-btn>
                </div>

                <label class="text-sm font-semibold">English Declaration</label>
                <v-textarea dense value="SUPER MILLION HART MIST" color="base" outlined></v-textarea>

                <label class="text-sm font-semibold">Thai Declaration</label>
                <v-textarea dense value="???????????????????????????????????????????????????????????????" color="base" outlined></v-textarea>

                <div class="flex flex-col md:flex-row md:space-x-4">
                    <div class="w-full md:w-1/2">
                        <label class="text-sm font-semibold">Brand Name</label>
                        <div class="flex flex-col md:flex-row md:space-x-4">
                            <v-combobox dense value="NO BRAND" color="base" outlined></v-combobox>
                            <v-btn class="ml-3 rounded-lg" depressed color="secondary" dark> _</v-btn>
                        </div>

                    </div>

                    <div class="w-full md:w-1/2">
                        <label class="text-sm font-semibold">Product Year</label>
                        <div class="flex flex-col md:flex-row md:space-x-4">
                            <v-combobox dense value="2022" color="base" outlined></v-combobox>
                            <v-btn class="ml-3 rounded-lg" depressed color="secondary" dark> _</v-btn>
                        </div>

                    </div>
                </div>

                <div class="flex flex-col md:flex-row md:space-x-4">
                    <div class="w-full md:w-1/2">
                        <label class="text-sm font-semibold">Nature Trans</label>
                        <div class="flex flex-col md:flex-row md:space-x-4">
                            <v-combobox dense value="11 = ??????????????????????????????" color="base" outlined></v-combobox>
                            <v-btn class="ml-3 rounded-lg" depressed color="secondary" dark> _</v-btn>
                        </div>

                    </div>

                    <div class="w-full md:w-1/2">
                        <label class="text-sm font-semibold">Origin</label>
                        <div class="flex flex-col md:flex-row md:space-x-4">
                            <v-combobox dense value="JP" color="base" outlined></v-combobox>
                            <v-btn class="ml-3 rounded-lg" depressed color="secondary" dark> _</v-btn>
                        </div>

                    </div>
                </div>
                <v-card class="p-1">
                    <div class="bg-gray-200 p-2">
                        <label class="text-xl font-semibold">???????????????????????????</label>
                        <div class="flex flex-col md:flex-row md:space-x-4">
                            <v-checkbox color="red" label="?????????????????? Charge"> </v-checkbox>
                            <v-checkbox color="red" label="?????????????????? Net Weight"></v-checkbox>
                            <v-checkbox color="red" label="?????????????????? Gross Weight""></v-checkbox>
                        </div>
                    </div>
                </v-card>

                <div class=" flex flex-col md:flex-row md:space-x-4 pt-3">
                                <div class="w-full md:w-1/2 ">
                                    <label class="text-sm font-semibold">?????????????????????????????????</label>
                                    <v-text-field dense value="50" color="base" outlined></v-text-field>

                                </div>
                                <div class="w-full md:w-1/2 ">
                                    <br>
                                    <v-text-field dense value="2,044.34" color="base" outlined></v-text-field>

                                </div>
                        </div>

                        <div class="flex flex-col md:flex-row md:space-x-4">
                            <div class="w-full md:w-1/2 ">
                                <label class="text-sm font-semibold">???????????????????????????</label>
                                <v-text-field dense value="4" color="base" outlined></v-text-field>

                            </div>
                            <div class="w-full md:w-1/2 ">
                                <br>
                                <v-text-field dense value="4" color="base" outlined></v-text-field>

                            </div>
                        </div>

                        <div class="flex flex-col md:flex-row md:space-x-4">
                            <div class="w-full md:w-1/2 ">
                                <label class="text-sm font-semibold">CIF Foreign</label>
                                <v-text-field dense value="2,367.52" color="base" outlined></v-text-field>

                            </div>
                            <div class="w-full md:w-1/2 ">
                                <label class="text-sm font-semibold">CIF Foreign</label>
                                <v-text-field dense value="96,800.43" color="base" outlined></v-text-field>

                            </div>
                        </div>

                        <div class="flex flex-col md:flex-row md:space-x-4">
                            <div class="w-full md:w-1/2 ">
                                <label class="text-sm font-semibold">CIF Assess</label>
                                <v-text-field dense value="0" color="base" outlined></v-text-field>

                            </div>
                            <div class="w-full md:w-1/2 ">
                                <label class="text-sm font-semibold">Exempt CIF Baht</label>
                                <v-text-field dense value="0" color="base" outlined></v-text-field>

                            </div>
                        </div>
                        <v-card class="p-1">
                            <div class="bg-gray-200 p-2">
                                <div class="flex flex-col md:flex-row">
                                    <label class="text-xl pt-1 font-semibold">?????????????????????????????????????????????????????????????????????????????????????????????</label>
                                    <v-spacer></v-spacer> 
                                         <v-btn @click="hidden=!hidden" class="ml-3 rounded-lg" depressed :color="(!hidden)?'#495057':'base'" dark>
                                            <span v-if="!hidden">?????????</span>
                                            <span v-else>???????????????????????????</span>
                                        </v-btn>
                                </div>
                                <div v-if="!hidden" class="animate__animated animate__fadeIn">
                                    <label class="text-sm font-semibold">Increased Terms</label>
                                <v-combobox dense value="FCA = FREE CARRIER" color="base" outlined></v-combobox>
                                <div class="grid grid-cols-2">
                                    <div class="flex flex-col md:flex-row ">
                                        <v-checkbox label="????????????????????????"></v-checkbox>
                                    </div>
                                    <div class="flex flex-col md:flex-row ">
                                        <v-checkbox label="???????????????????????????"></v-checkbox>
                                    </div>
                                    <div class="flex flex-col md:flex-row ">
                                        <v-checkbox label="??????????????????????????????"></v-checkbox>
                                    </div>
                                    <div class="flex flex-col md:flex-row ">
                                        <v-checkbox label="?????????????????????"></v-checkbox>
                                    </div>
                                </div>
                                <div class="flex flex-col md:flex-row md:space-x-4 pt-3">
                                    <div class="w-full">
                                        <label class="text-base font-semibold">????????????????????????????????????</label>
                                        <v-text-field dense value="1.00" color="base" outlined></v-text-field>
                                    </div>
                                    <div class="w-full">
                                        <label class="text-base font-semibold">????????????????????????</label>
                                        <v-combobox dense value="THB" color="base" outlined></v-combobox>

                                    </div>
                                    <div class="w-full">
                                        <br>
                                        <v-combobox dense value="1.00000" color="base" outlined></v-combobox>
                                    </div>
                                    <div class="w-full pt-6">
                                        <v-btn   depressed color="base"  dark> ???????????????</v-btn>
                                    </div>
                                </div>
                                </div>

                            </div>

                        </v-card>

                    </div>

                    <div class="w-full md:w-2/5 ">
                        <div class="flex flex-col md:flex-row md:space-x-4">
                            <div class="w-full md:w-1/2 ">
                                <label class="text-sm font-semibold">inv. Qty</label>
                                <v-text-field dense label="480.00" color="base" outlined></v-text-field>

                            </div>
                            <div class="w-full md:w-1/2 ">
                                <br>
                                <v-combobox dense value="C62" color="base" outlined></v-combobox>
                            </div>
                        </div>

                        <div class="flex flex-col md:flex-row md:space-x-4">
                            <div class="w-full md:w-1/2 ">
                                <label class="text-sm font-semibold">Declare Qty.</label>
                                <v-text-field dense label="480.00" color="base" outlined></v-text-field>

                            </div>
                            <div class="w-full md:w-1/2 ">
                                <br>
                                <v-combobox dense value="C62" color="base" outlined></v-combobox>
                            </div>
                        </div>

                        <label class="text-sm font-semibold">Qty. 2</label>
                        <v-text-field dense value="1 SET" color="base" outlined></v-text-field>

                        <div class="flex flex-col md:flex-row md:space-x-4">
                            <div class="w-full md:w-1/2 ">
                                <label class="text-sm font-semibold">N.W. </label>
                                <v-text-field dense value="100.00" color="base" outlined></v-text-field>

                            </div>
                            <div class="w-full md:w-1/2 ">
                                <br>
                                <v-combobox dense value="KGM" color="base" outlined></v-combobox>
                            </div>
                        </div>

                        <div class="flex flex-col md:flex-row md:space-x-4">
                            <div class="w-full md:w-1/2 ">
                                <label class="text-sm font-semibold">G.W. </label>
                                <v-text-field dense value="120.00" color="base" outlined></v-text-field>

                            </div>
                            <div class="w-full md:w-1/2 ">
                                <br>
                                <v-combobox dense value="KGM" color="base" outlined></v-combobox>
                            </div>
                        </div>

                        <div class="flex flex-col md:flex-row md:space-x-4">
                            <div class="w-full md:w-1/2 ">
                                <label class="text-sm font-semibold">Package</label>
                                <v-text-field dense value="20" color="base" outlined></v-text-field>

                            </div>
                            <div class="w-full md:w-1/2 ">
                                <br>
                                <v-combobox dense value="CT" color="base" outlined></v-combobox>
                            </div>
                        </div>

                        <div class="flex flex-col md:flex-row md:space-x-4">
                            <div class="w-full">
                                <label class="text-sm font-semibold">Inv. Amount</label>
                                <v-text-field dense value="31.71770" color="base" outlined></v-text-field>

                            </div>
                            <div class="w-full">
                                <br>
                                <v-combobox dense value="USD" color="base" outlined></v-combobox>
                            </div>
                            <div class="w-full">
                                <br>
                                <v-text-field dense value="31.71770" color="base" outlined></v-text-field>

                            </div>
                            <div class="w-full">
                                <br>
                                <v-text-field dense value="128,425.32" color="base" outlined></v-text-field>
                            </div>
                        </div>
                        <v-card class="p-1 mb-6">
                            <div class="bg-gray-200 p-2">
                                <div class="flex flex-col md:flex-row">
                                    <label class="text-xl pt-1 font-semibold">Shipping Mark</label>
                                    <v-spacer></v-spacer>
                                    <div class="space-x-2">
                                        <v-btn fab small color="base" depressed dark>|</v-btn>
                                        <v-btn fab small color="base" depressed dark>H</v-btn>
                                        <v-btn fab small color="base" depressed dark>_</v-btn>
                                    </div>

                                </div>
                                <v-textarea class="pt-3" outlined background-color="white" value="ESAP CO.,LTD.P/O NO. PO/62009009CASE (S) No.1-1MADE IN HONGKONG" color="base"></v-textarea>

                            </div>
                        </v-card>
                        <label class="text-sm font-semibold ">Remark(??????????????????????????????)</label>
                        <div class="flex flex-col md:flex-row">
                            <v-text-field dense value="" color="base" outlined></v-text-field>
                            <v-btn class="ml-3 rounded-lg" depressed color="secondary" dark> _</v-btn>
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
            hidden:false,
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
