<template>
<div>
    <div class="sticky top-64p" style="z-index:999;">
        <div class="esap-header">
            <div class="pl-20 pt-6">
                <span class="text-breadcrumbs ">Import Declaration List /</span>
                <span class="text-breadcrumbs font-semibold">Import Declaration List</span>
            </div>
            <div class="pl-20 pr-20 pt-14 flex items-end">
                <h2 class="font-semibold text-3xl text-white">INVOICE DETAIL</h2>
                <v-spacer></v-spacer>

                <Core-ButtonHead name="Copy" :icon="require('@/assets/images/svg/copy.svg')"></Core-ButtonHead>
                <div @click="$router.push('/import/invoice/invoicecontrol')">
                    <Core-ButtonHead name="Delete" :icon="require('@/assets/images/svg/delete.svg')"></Core-ButtonHead>
                </div>
                <Core-ButtonHead name="Print" :icon="require('@/assets/images/svg/menu/print.svg')"></Core-ButtonHead>
                <Core-ButtonHead name="Calculate" :icon="require('@/assets/images/svg/menu/cal.svg')"></Core-ButtonHead>
                <Core-ButtonHead name="Validate" :icon="require('@/assets/images/svg/menu/validate.svg')"></Core-ButtonHead>
                <Core-ButtonHead otherclass="text-white" color="#34C38F" name="Save" :icon="require('@/assets/images/svg/menu/save.svg')"></Core-ButtonHead>

            </div>
        </div>
    </div>
    <div class="h-40 esap-bg "> </div>
    <v-container class="-mt-36 ">
        <div class="flex flex-col md:flex-row">
            <div class="p-2 w-full md:w-3/12">
                <v-card class="pt-6 h-full esap-bg" flat outlined color="#ffdacb">
                    <v-card-text>
                        <div class="cursor-pointer flex rounded-t-lg bg-white h-10 items-center p-2">
                            Reference No
                            <v-spacer></v-spacer>
                            <span class="font-semibold">ASDF123456800</span>
                        </div>
                        <div class="cursor-pointer flex  bg-white h-10 items-center  mt-05 p-2">
                            Declaration No
                            <v-spacer></v-spacer>
                            <span class="font-semibold">-</span>
                        </div>
                        <div class="cursor-pointer flex  bg-white h-10 items-center  mt-05 p-2">
                            Order
                            <v-spacer></v-spacer>
                            <span class="font-semibold">1</span>
                        </div>
                        <div class="cursor-pointer flex rounded-b-lg bg-white h-10 items-center mt-06 ">
                            <div class="w-1/2  h-full font-semibold text-base uppercase  flex flex-col justify-center items-center">
                                P
                            </div>
                            <div class="w-1/2 h-full font-semibold text-base uppercase flex flex-col justify-center rounded-br-lg items-center bg-base text-white">READY</div>
                        </div>

                        <div @click="$router.push('/import/')" class="cursor-pointer flex rounded-lg bg-purple h-10 items-center  mt-6 p-2 text-white font-semibold">
                            Go to Declaration List
                            <v-spacer></v-spacer>
                            <span class="font-semibold">
                                <v-icon dark>fa-solid fa-circle-arrow-right</v-icon>
                            </span>
                        </div>
                        <div @click="$router.push('/import/invoice/')" class="cursor-pointer flex rounded-lg bg-purple h-10 items-center  mt-1 p-2 text-white font-semibold">
                            Go to Invoice List
                            <v-spacer></v-spacer>
                            <span class="font-semibold">
                                <v-icon dark>fa-solid fa-circle-arrow-right</v-icon>
                            </span>
                        </div>
                        <div @click="$router.push('/import/invoice/invoicecontrol/')" class="cursor-pointer flex rounded-lg bg-purple h-10 items-center  mt-1 p-2 text-white font-semibold">
                            Go to Invoice Control
                            <v-spacer></v-spacer>
                            <span class="font-semibold">
                                <v-icon dark>fa-solid fa-circle-arrow-right</v-icon>
                            </span>
                        </div>
                        <div class="cursor-pointer flex rounded-lg bg-purple h-10 items-center  mt-1 p-2 text-white font-semibold">
                            Calculate Tax
                            <v-spacer></v-spacer>
                            <span class="font-semibold">
                                <v-icon dark>fa-solid fa-circle-arrow-right</v-icon>
                            </span>
                        </div>
                        <div @click="$router.push('/import/invoice/invoicedetail/')" class="cursor-pointer flex rounded-lg bg-purple h-10 items-center  mt-1 p-2 text-white font-semibold">
                            Add New Items
                            <v-spacer></v-spacer>
                            <span class="font-semibold">
                                <v-icon dark>fa-solid fa-circle-plus</v-icon>
                            </span>
                        </div>
                        <div class="cursor-pointer flex rounded-lg bg-purple h-10 items-center  mt-1 p-2 text-white font-semibold">
                            Button Name
                            <v-spacer></v-spacer>
                            <span class="font-semibold">
                                <v-icon dark>fa-solid fa-circle-arrow-right</v-icon>
                            </span>
                        </div>

                        <div @click="$router.push('/import/invoice/')" class="cursor-pointer  flex rounded-lg bg-white h-10 items-center  mt-6 p-2 ">
                            <v-icon color="#F1B44C">fa-solid fa-folder-closed</v-icon>
                            <span class="font-semibold ml-2">Invoice (s)</span>
                            <v-spacer></v-spacer>
                            <span class="font-semibold">5</span>
                        </div>
                        <div class="flex rounded-lg bg-white h-10 items-center  mt-1 p-2 ">
                            <v-icon color="#F1B44C">fa-solid fa-folder-closed</v-icon>
                            <span class="font-semibold ml-2">Item (s)</span>
                            <v-spacer></v-spacer>
                            <span class="font-semibold">0</span>
                        </div>

                        <v-card outlined   flat class="mt-6"> 
                            <v-card-title class="base"  >
                                <span @click="$router.push('/import/invoice')" class="cursor-pointer text-sm font-semibold text-white">Invoice No. ESAP01 </span>
                                <v-spacer></v-spacer>

                                <v-btn class="rounded-lg" fab x-small color="success">
                                    <span class="text-sm font-semibold">1</span>
                                </v-btn>
                                <v-btn class="ml-2 rounded-full" fab x-small color="white">
                                    <v-icon size="10" color="base">fa-solid fa-angle-up</v-icon>
                                </v-btn>

                            </v-card-title>
                            <v-card-text>
                                <ul class="list-disc mt-4">
                                    <li class="text-base">0001-001</li>
                                  
                                </ul>
                            </v-card-text>
                        </v-card>

                    </v-card-text>
                </v-card>
            </div>

            <div class="p-2 w-full md:w-11/12">
                <v-card class="h-full ml-5">
                    <div class="p-8">

                        <div class="flex flex-col md:flex-row">
                            <div class="w-6/12   flex h-full">
                                <label class="text-sm font-semibold mt-2">Item</label>
                                <v-text-field class="ml-1" value="0001" dense placeholder="Filter Name" color="base" outlined></v-text-field>
                                <label class="text-sm font-semibold ml-6  mt-2">Declare</label>
                                <v-text-field class="ml-1" dense value="0001" color="base" outlined></v-text-field>
                                <v-text-field flat class="" dense color="base" outlined></v-text-field>
                                <v-btn dark class="rounded-lg ml-2" color="base">Go</v-btn>
                            </div>
                            <div class="w-6/12 flex justify-end">
                                <Core-ButtonInfo></Core-ButtonInfo>
                            </div>

                        </div>

                        <div class="flex justify-center items-center my-1 bg-gray">
                            <div @click="activeTab = index" :class="activeTab===index ? 'bg-orange-base text-orange-base' : ' text-gray-500'" class="w-1/3 text-center cursor-pointer py-2 px-4 rounded transition" v-for="(tab, index) in tabs" :key="index">
                                <div class="font-semibold flex flex-col md:flex-row justify-center items-center">
                                    <v-btn :outlined="activeTab!=index" :dark="activeTab===index" fab elevation="0" class="rounded-xl" x-small color="base"><span class="text-base font-semibold">{{index+1}}</span></v-btn>
                                    <span class="md:ml-6">{{tab}}</span>
                                </div>
                            </div>
                        </div>
                        <div v-if="activeTab == 0">
                            <InvocieDetail-Invociedetail></InvocieDetail-Invociedetail>
                        </div>
                        <div v-if="activeTab == 1">
                            <InvocieDetail-TaxIncentives></InvocieDetail-TaxIncentives>
                        </div>
                        <div v-if="activeTab == 2">
                            <InvocieDetail-Excise></InvocieDetail-Excise>
                        </div>
                        <div v-if="activeTab == 3">
                            <InvocieDetail-Charge></InvocieDetail-Charge>
                        </div>
                        <div v-if="activeTab == 4">
                            <InvocieDetail-Duty></InvocieDetail-Duty>
                        </div>
                        <div v-if="activeTab == 5">
                            <InvocieDetail-Permit></InvocieDetail-Permit>
                        </div>

                    </div>

                </v-card>
            </div>
        </div>
    </v-container>

</div>
</template>

<script>
export default {
    data: () => {
        return ({
            activeTab: 0,
            tabs: [
                "Invocie Detail",
                " Tax Incentives",
                "Excise",
                "Charge",
                "Duty",
                "Permit",
            ]
        })
    }
}
</script>

<style>

</style>
