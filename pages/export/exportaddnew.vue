<template>
<div>
    <div class="sticky top-64p" style="z-index:999;">
        <div class="esap-header">
            <div class="pl-20 pt-6">
                <span class="text-breadcrumbs ">Export Declaration / </span>
                <span class="text-breadcrumbs font-semibold">Export Declaration List/</span>
                <span class="text-breadcrumbs font-semibold">Declaration Control</span>
            </div>
            <div class="pl-20 pr-20 pt-14 flex items-end">
                <h2 class="font-semibold text-3xl text-white">DECLARATION CONTROL</h2>
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
    <div class="h-40 esap-bg "> </div>
    <v-container class="-mt-36 ">
        <div class="flex flex-col md:flex-row">
            <div class="p-2 w-full md:w-3/12">
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
                         <div class="cursor-pointer flex rounded-b-lg bg-white h-10 items-center mt-06 ">
                            <div class="w-1/2  h-full font-semibold text-base uppercase  flex flex-col justify-center items-center">
                                P
                            </div>
                            <div class="w-1/2 h-full font-semibold text-base uppercase flex flex-col justify-center rounded-br-lg items-center bg-base text-white">READY</div>
                        </div>

                        <div  @click="$router.push('/export/')" class="flex rounded-lg bg-purple h-10 items-center  mt-6 p-2 text-white font-semibold">
                            Go to Declaration List
                            <v-spacer></v-spacer>
                            <span class="font-semibold">
                                <v-icon dark>fa-solid fa-circle-arrow-right</v-icon>
                            </span>
                        </div>
                        <div class="flex rounded-lg bg-purple h-10 items-center  mt-1 p-2 text-white font-semibold">
                            Go to Declaration Control
                            <v-spacer></v-spacer>
                            <span class="font-semibold">
                                <v-icon dark>fa-solid fa-circle-arrow-right</v-icon>
                            </span>
                        </div>
                        <div class="flex rounded-lg bg-purple h-10 items-center  mt-1 p-2 text-white font-semibold">
                            Calculate Tax
                            <v-spacer></v-spacer>
                            <span class="font-semibold">
                                <v-icon dark>fa-solid fa-circle-arrow-right</v-icon>
                            </span>
                        </div>
                        <div class="flex rounded-lg bg-purple h-10 items-center  mt-1 p-2 text-white font-semibold">
                            Button Name
                            <v-spacer></v-spacer>
                            <span class="font-semibold">
                                <v-icon dark>fa-solid fa-circle-arrow-right</v-icon>
                            </span>
                        </div>
                        <div class="flex rounded-lg bg-purple h-10 items-center  mt-1 p-2 text-white font-semibold">
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
                            <span class="font-semibold">0</span>
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

            <div class="p-2 w-full md:w-11/12">
                <v-card class="h-full ml-5">
                    <div class="p-8">
                        <div class="flex border-b-2 border-gray-200">
                            <v-btn class="w-60" dark x-large color="base"><span class="font-semibold">Declaration Control</span></v-btn>
                            <v-btn class="w-60 ml-2" text   x-large  @click="$router.push('/export/exportinvoice')"><span class="font-semibold">Invoice</span></v-btn>
                            <v-spacer></v-spacer>
                           <Core-ButtonInfo></Core-ButtonInfo>
                        </div>

                        <div class="flex justify-center items-center my-4 bg-gray">
                            <div @click="activeTab = index" :class="activeTab===index ? 'bg-orange-base text-orange-base' : ' text-gray-500'" class="w-1/3 text-center cursor-pointer py-2 px-4 rounded transition" v-for="(tab, index) in tabs" :key="index">
                                <div class="font-semibold flex flex-col md:flex-row justify-center items-center">
                                    <v-btn :outlined="activeTab!=index"  :dark="activeTab===index" fab elevation="0"  class="rounded-xl" x-small color="base"><span class="text-base font-semibold">{{index+1}}</span></v-btn> 
                                    <span class="md:ml-6">{{tab}}</span>
                                </div>
                            </div>
                        </div>
                        <div v-if="activeTab == 0">
                            <AddNew-Declaration></AddNew-Declaration>
                        </div>
                        <div  v-if="activeTab == 1">
                            <AddNew-Expayment></AddNew-Expayment>
                        </div>
                        <div  v-if="activeTab == 2">
                            <AddNew-Trading></AddNew-Trading>
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
                "Declaration Control",
                "Payment",
                "Trading Partner",
            ]
        })
    }
}
</script>

<style>

</style>
