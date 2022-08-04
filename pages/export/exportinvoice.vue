<template>
<div>
    <div class="sticky top-64p" style="z-index:999;">
        <div class="esap-header2">
            <div class="pl-20 pt-6">
                <span class="text-breadcrumbs ">Export Declaration /</span>
                <span class="text-breadcrumbs font-semibold">Export Declaration List/</span>
                <span class="text-breadcrumbs font-semibold">Invoice List</span>
            </div>
            <div class="pl-20 pr-20 pt-4 flex items-end">
                <h2 class="font-semibold text-xl text-white uppercase">Invoice</h2>
                <v-spacer></v-spacer>
                <Core-ButtonHead name="Short Message" :icon="require('@/assets/images/svg/menu2/message.svg')"></Core-ButtonHead>
                <Core-ButtonHead name="Short Message" :icon="require('@/assets/images/svg/menu2/message2.svg')"></Core-ButtonHead>
                <Core-ButtonHead name="XML" :icon="require('@/assets/images/svg/menu/xml.svg')"></Core-ButtonHead>
                <Core-ButtonHead name="Message" :icon="require('@/assets/images/svg/menu/message.svg')"></Core-ButtonHead>
                <Core-ButtonHead name="Receive" :icon="require('@/assets/images/svg/menu/receive.svg')"></Core-ButtonHead>
                <Core-ButtonHead name="Validate" :icon="require('@/assets/images/svg/menu/validate.svg')"></Core-ButtonHead>
                <Core-ButtonHead name="Send" :icon="require('@/assets/images/svg/menu/send.svg')"></Core-ButtonHead>
                <Core-ButtonHead name="GCL" :icon="require('@/assets/images/svg/menu2/gcl.svg')"></Core-ButtonHead>
                <Core-ButtonHead name="Print" :icon="require('@/assets/images/svg/menu/print.svg')"></Core-ButtonHead>
                <div @click="$router.go(-1)">
                    <Core-ButtonHead name="Cancel" :icon="require('@/assets/images/svg/menu/cancel.svg')"></Core-ButtonHead>
                </div>
                <Core-ButtonHead otherclass="text-white" color="#34C38F" name="Save" :icon="require('@/assets/images/svg/menu/save.svg')"></Core-ButtonHead>

            </div>
        </div>
    </div>

    <div class="h-14 esap-bg "> </div>
    <v-container class="-mt-16">
        <div class="flex flex-col md:flex-row">
            <div class="p-2 w-full md:w-2/12">
                <v-card class="pt-6 h-full esap-bg" flat outlined color="#ffdacb">
                    <v-card-text>
                        <div class="flex rounded-t-lg bg-white h-10 items-center p-2">
                            Reference No
                            <v-spacer></v-spacer>
                            <span class="font-semibold">ASDF123456800</span>
                        </div>
                        <div class="flex  bg-white h-10 items-center  mt-05 p-2">
                            Declaration No
                            <v-spacer></v-spacer>
                            <span class="font-semibold">-</span>
                        </div>
                        <div class="flex rounded-b-lg bg-white h-10 items-center mt-06 ">
                            <div class="w-1/2  h-full font-semibold text-base uppercase  flex flex-col justify-center items-center">
                                P
                            </div>
                            <div class="w-1/2 h-full font-semibold text-base uppercase flex flex-col justify-center rounded-br-lg items-center bg-base text-white">READY</div>
                        </div>

                        <div @click="$router.push('/export/')" class="flex rounded-lg bg-purple h-10 items-center  mt-6 p-2 text-white font-semibold">
                            Go to Declaration List
                            <v-spacer></v-spacer>
                            <span class="font-semibold">
                                <v-icon dark>fa-solid fa-circle-arrow-right</v-icon>
                            </span>
                        </div>
                        <div class="cursor-pointer flex rounded-lg bg-purple h-10 items-center  mt-1 p-2 text-white font-semibold">
                            Go to Declaration Control
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
                        <div @click="$router.push('/import/invoice/invoicecontrol/')" class="cursor-pointer flex rounded-lg bg-purple h-10 items-center  mt-1 p-2 text-white font-semibold">
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

                        <div class="flex rounded-lg bg-white h-10 items-center  mt-6 p-2 ">
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

                    </v-card-text>
                </v-card>
            </div>

            <div class="p-2 w-full md:w-10/12">
                <v-card class="h-full ml-5">
                    <div class="p-8">
                        <div class="flex border-b-2 border-gray-200">
                            <v-btn class="w-60 ml-2" text x-large><span class="font-semibold" @click="$router.push('/export/exportaddnew')">Declaration Control</span></v-btn>
                            <v-btn class="w-60" dark x-large color="base"><span class="font-semibold">Invoice</span></v-btn>

                            <v-spacer></v-spacer>
                            <Core-ButtonInfo></Core-ButtonInfo>
                        </div>

                        <div class="mt-8">
                            <div class="flex justify-center items-center">
                                <div>
                                    <label class="text-sm font-semibold">First Name</label>
                                    <v-text-field append-icon="fa-filter" dense placeholder="Filter Name" color="base" outlined></v-text-field>
                                </div>
                                <div class="pl-4">
                                    <label class="text-sm font-semibold">วันที่สร้างเอกสาร</label>
                                    <div class="flex">
                                        <v-text-field append-icon="fa-calendar-day" dense placeholder="From" color="base" outlined></v-text-field>
                                        <v-text-field flat class="" append-icon="fa-calendar-day" dense placeholder="To" color="base" outlined></v-text-field>

                                    </div>
                                </div>
                                <div class="pl-2">
                                    <v-btn dark class="rounded-lg" color="base">Search</v-btn>
                                </div>
                                <v-spacer class="pl-6"></v-spacer>
                                <v-btn class="rounded-lg" text>
                                    <v-icon color="#46BFCF" size="18" class="mr-2">fa-solid fa-file-arrow-down</v-icon>
                                    <span class="text-sm font-semibold">Import File</span>
                                </v-btn>
                                <v-btn class="rounded-lg" text>
                                    <v-icon color="#FF7640" size="18" class="mr-2">fa-solid fa-arrow-rotate-right</v-icon>
                                    <span class="text-sm font-semibold">Re Invoice No.</span>
                                </v-btn>
                                <v-btn class="rounded-lg" text>
                                    <v-icon color="#F46A6A" size="18" class="mr-2">fa-solid fa-xmark</v-icon>
                                    <span class="text-sm font-semibold">Delete</span>
                                </v-btn>
                                <v-btn class="rounded-lg" text>
                                    <v-icon color="#6F9CDF" size="18" class="mr-2">fa-duotone fa-clone</v-icon>
                                    <span class="text-sm font-semibold">Copy</span>
                                </v-btn>
                                <v-btn  @click="$router.push('/import/invoice/invoicecontrol/')"  dark class="rounded-lg" color="purple_base">
                                    <v-icon color="" size="18" class="mr-2">fa-solid fa-plus</v-icon>Add New
                                </v-btn>
                            </div>
                            <div>
                                <v-data-table :headers="headers" :items="items" :single-select="false" item-key="no" show-select :items-per-page="30">

                                    <template v-slot:item.status="{ item }">
                                        <v-btn width="120" small v-if="item.status == 1" depressed color="#FE7640" dark>
                                            REDY
                                        </v-btn>
                                        <v-btn width="120" small v-if="item.status == 2" depressed color="#F1B44C" dark>
                                            ACCENT
                                        </v-btn>
                                    </template>

                                </v-data-table>

                            </div>
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
            headers: [{

                    text: 'Invoice No',
                    align: 'start',
                    sortable: false,
                    value: 'ino',
                    width: '120',
                    class: 'subtitle-2 font-weight-black'
                },
                {
                    text: 'Invoice Date',
                    value: 'date',
                    width: '125',
                    class: 'subtitle-2 font-weight-black'
                },
                {
                    text: 'Invoice Amount',
                    value: 'amount',
                    width: '120',
                    class: 'subtitle-2 font-weight-black'
                },
                {
                    text: 'Term',
                    value: 'term',
                    class: 'subtitle-2 font-weight-black'
                },
                {
                    text: 'Currency',
                    value: 'currency',
                    class: 'subtitle-2 font-weight-black'
                },
                {
                    text: 'Net Weight',
                    value: 'net',
                    class: 'subtitle-2 font-weight-black'
                },
                {
                    text: 'Unit',
                    value: 'nunit',
                    width: '10',
                    class: 'subtitle-2 font-weight-black'
                },
                {
                    text: 'Gross Weight',
                    value: 'gross',
                    class: 'subtitle-2 font-weight-black'
                },
                {
                    text: 'Unit',
                    value: 'gunit',
                    width: '10',
                    class: 'subtitle-2 font-weight-black'
                },
                {
                    text: 'Total Package',
                    value: 'total',
                    class: 'subtitle-2 font-weight-black'
                },
                {
                    text: 'Unit',
                    value: 'tunit',
                    width: '10',
                    class: 'subtitle-2 font-weight-black'
                },
                {
                    text: 'CIF Baht',
                    value: 'cif',
                    class: 'subtitle-2 font-weight-black'
                },
                {
                    text: 'Status',
                    value: 'status',
                    class: 'subtitle-2 font-weight-black'
                },
            ],
            items: [{
                no: 1,
                ino: "Test-00001",
                date: "01/06/2022",
                amount: '2,700.00',
                term: 'FOB',
                currency: "USD",
                net: "100.250",
                nunit: "KGM",
                gross: "120.00",
                gunit: "KGM",
                total: "64",
                tunit: "CT",
                cif: "956,600.00",
                status: 1,
            }]
        })
    }
}
</script>

<style>

</style>
