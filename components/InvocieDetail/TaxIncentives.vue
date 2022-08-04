<template>
<div>
    <v-card class="p-1 mb-6">
        <div class="bg-gray-200 p-4">
            <label class="text-sm font-semibold">สิทธิประโยชน์</label>

            <div class="grid grid-cols-3">
                <div class="flex ">
                    <v-checkbox label="BOI"></v-checkbox>
                    <v-btn class="ml-3 rounded-lg mt-4" fab x-small depressed color="secondary" dark> _</v-btn>
                </div>
                <div class="flex">
                    <v-checkbox label="มาตรา29"></v-checkbox>
                    <v-btn class="ml-3 rounded-lg mt-4" fab x-small depressed color="secondary" dark> _</v-btn>
                </div>
                <div class="flex">
                    <v-checkbox label="ฺBond"></v-checkbox>
                    <v-btn class="ml-3 rounded-lg mt-4" fab x-small depressed color="secondary" dark> _</v-btn>
                </div>
                <div class="flex">
                    <v-checkbox label="Re-Import"></v-checkbox>
                    <v-btn class="ml-3 rounded-lg mt-4" fab x-small depressed color="secondary" dark> _</v-btn>
                </div>
                <div class="flex">
                    <v-checkbox label="IEAT"></v-checkbox>
                    <v-btn class="ml-3 rounded-lg mt-4" fab x-small depressed color="secondary" dark> _</v-btn>
                </div>
                <div class="flex">
                    <v-checkbox label="Free Zone"></v-checkbox>
                    <v-btn class="ml-3 rounded-lg mt-4" fab x-small depressed color="secondary" dark> _</v-btn>
                </div>
                <div class="flex">
                    <v-checkbox label="Re-Export"></v-checkbox>
                    <v-btn class="ml-3 rounded-lg mt-4" fab x-small depressed color="secondary" dark> _</v-btn>
                </div>
                <div class="flex">
                    <v-checkbox label="Several"></v-checkbox>
                    <v-btn class="ml-3 rounded-lg mt-4" fab x-small depressed color="secondary" dark> _</v-btn>
                </div>
                <div class="flex">
                    <v-checkbox label="FOC"></v-checkbox>
                    <v-btn class="ml-3 rounded-lg mt-4" fab x-small depressed color="secondary" dark> _</v-btn>
                </div>
            </div>
        </div>
    </v-card>

    <div class="flex space-x-4">
        <div class="w-1/2">
            <label class="text-sm font-semibold">Declaration No.</label>
            <div class="flex space-x-4">
                <v-text-field dense color="base"  value="A0070640108430" outlined></v-text-field>
                <v-btn class="ml-3 rounded-lg" depressed color="secondary" dark> _</v-btn>
            </div>

        </div>

        <div class="w-1/2">
            <label class="text-sm font-semibold">Line No.</label>
            <div class="flex space-x-4">
                <v-text-field  value="0001" dense color="base" outlined></v-text-field>

            </div>

        </div>
    </div>

    <div class="flex space-x-4">
        <div class="w-1/2">
            <label class="text-sm font-semibold">Company Product</label>
            <div class="flex space-x-4">
                <v-text-field dense color="base" outlined></v-text-field>
                <v-btn class="ml-3 rounded-lg" depressed color="secondary" dark> _</v-btn>
            </div>

        </div>

        <div class="w-1/2">
            <label class="text-sm font-semibold">Customs Product</label>
            <div class="flex space-x-4">
                <v-text-field dense color="base" outlined></v-text-field>
                <v-btn class="ml-3 rounded-lg" depressed color="secondary" dark> _</v-btn>
            </div>

        </div>
    </div>

    <div class="flex space-x-4">
        <div class="w-1/2">
            <label class="text-sm font-semibold">Product Attribute 1</label>
            <div class="flex space-x-4">
                <v-text-field dense color="base" outlined></v-text-field>
                <v-btn class="ml-3 rounded-lg" depressed color="secondary" dark> _</v-btn>
            </div>

        </div>

        <div class="w-1/2">
            <label class="text-sm font-semibold">Product Attribute 2</label>
            <div class="flex space-x-4">
                <v-text-field dense color="base" outlined></v-text-field>
                <v-btn class="ml-3 rounded-lg" depressed color="secondary" dark> _</v-btn>
            </div>

        </div>
    </div>

    <div class="flex space-x-4">
        <div class="w-1/2">
            <label class="text-sm font-semibold">Import Tax Incentives ID</label>
            <div class="flex space-x-4">
                <v-text-field dense color="base" outlined></v-text-field>
                <v-btn class="ml-3 rounded-lg" depressed color="secondary" dark> _</v-btn>
            </div>

        </div>

        <div class="w-1/2">
            <label class="text-sm font-semibold">BOI License No.</label>
            <div class="flex space-x-4">
                <v-text-field dense color="base" outlined></v-text-field>
                <v-btn class="ml-3 rounded-lg" depressed color="secondary" dark> _</v-btn>
            </div>

        </div>
    </div>

    <div class="flex space-x-4">
        <div class="w-1/2">
            <label class="text-sm font-semibold">Origin Criteria</label>
            <div class="flex space-x-4">
                <v-text-field dense color="base" outlined></v-text-field>
                <v-btn class="ml-3 rounded-lg" depressed color="secondary" dark> _</v-btn>
            </div>

        </div>

        <div class="w-1/2">
            <label class="text-sm font-semibold"> Certified Exporter No</label>
            <div class="flex space-x-4">
                <v-text-field dense color="base" outlined></v-text-field>
                <v-btn class="ml-3 rounded-lg" depressed color="secondary" dark> _</v-btn>
            </div>

        </div>
    </div>

    <div class="flex space-x-4">
        <div class="w-1/2">
            <label class="text-sm font-semibold">Royalty</label>
            <div class="flex space-x-4">
                <v-text-field dense color="base" outlined></v-text-field>
                <v-btn class="ml-3 rounded-lg" depressed color="secondary" dark> _</v-btn>
            </div>

        </div>

        <div class="w-1/2">
            <label class="text-sm font-semibold">Royalty Detail</label>
            <div class="flex space-x-4">
                <v-text-field dense color="base" outlined></v-text-field>
                <v-btn class="ml-3 rounded-lg" depressed color="secondary" dark> _</v-btn>
            </div>

        </div>
    </div>

    <div class="flex space-x-4">
        <div class="w-1/2">
            <label class="text-sm font-semibold">Procedure Code</label>
            <div class="flex space-x-4">
                <v-text-field dense color="base" outlined></v-text-field>
                <v-btn class="ml-3 rounded-lg" depressed color="secondary" dark> _</v-btn>
            </div>

        </div>

        <div class="w-1/2">
            <label class="text-sm font-semibold">Valuation Code</label>
            <div class="flex space-x-4">
                <v-text-field dense color="base" outlined></v-text-field>
                <v-btn class="ml-3 rounded-lg" depressed color="secondary" dark> _</v-btn>
            </div>

        </div>
    </div>
    <v-card class="p-1">
        <div class="bg-gray-200 p-2">
            <label class="text-xl font-semibold">สูตรการผลิต</label>
            <div class="flex space-x-4 mt-5">
                <div class="w-1/2">
                    <label class="text-sm font-semibold">Model Version</label>
                    <div class="flex space-x-4">
                        <v-combobox dense background-color="white" color="base" outlined></v-combobox>
                    </div>

                </div>

                <div class="w-1/2">
                    <label class="text-sm font-semibold">Company Tax</label>
                    <div class="flex space-x-4">
                        <v-text-field dense background-color="white" color="base" outlined></v-text-field>
                    </div>

                </div>
            </div>
              <div class="w-1/2">
                    <label class="text-sm font-semibold">Company Tax</label>
                    <div class="flex space-x-4">
                        <v-text-field dense background-color="white" color="base" outlined></v-text-field>
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
