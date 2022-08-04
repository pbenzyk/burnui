<template>
<div>
    <div class="sticky top-64p" style="z-index:999;">
        <div class="esap-header">
            <div class="pl-20 pt-6">
                <span class="text-breadcrumbs ">Import Declaration /</span>
                <span class="text-breadcrumbs ">Import Declaration List /</span>
                <span class="text-breadcrumbs font-semibold">Declaration Control</span>
            </div>
            <div class="pl-20 pr-20 pt-14 flex items-end">
                <h2 class="font-semibold text-3xl text-white">DECLARATION CONTROL</h2>
                <v-spacer></v-spacer>
                <v-btn class="ml-1 " x-large elevation="0" color="headmenu">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.9583 1.66663H8.04167C7.17501 1.66663 6.46667 2.36663 6.46667 3.23329V4.01663C6.46667 4.88329 7.16667 5.58329 8.03334 5.58329H11.9583C12.825 5.58329 13.525 4.88329 13.525 4.01663V3.23329C13.5333 2.36663 12.825 1.66663 11.9583 1.66663Z" fill="#F1B44C" />
                        <path d="M14.3667 4.01665C14.3667 5.34165 13.2833 6.42498 11.9583 6.42498H8.04167C6.71667 6.42498 5.63334 5.34165 5.63334 4.01665C5.63334 3.54998 5.13334 3.25832 4.71667 3.47498C3.54167 4.09998 2.74167 5.34165 2.74167 6.76665V14.6083C2.74167 16.6583 4.41667 18.3333 6.46667 18.3333H13.5333C15.5833 18.3333 17.2583 16.6583 17.2583 14.6083V6.76665C17.2583 5.34165 16.4583 4.09998 15.2833 3.47498C14.8667 3.25832 14.3667 3.54998 14.3667 4.01665ZM12.7833 10.6083L9.45 13.9416C9.325 14.0666 9.16667 14.125 9.00834 14.125C8.85 14.125 8.69167 14.0666 8.56667 13.9416L7.31667 12.6916C7.075 12.45 7.075 12.05 7.31667 11.8083C7.55834 11.5666 7.95834 11.5666 8.2 11.8083L9.00834 12.6166L11.9 9.72498C12.1417 9.48332 12.5417 9.48332 12.7833 9.72498C13.025 9.96665 13.025 10.3666 12.7833 10.6083Z" fill="#F1B44C" />
                    </svg>
                    <span class="font-semibold ml-1 text-sm">Receive</span>
                </v-btn>
                <v-btn class="ml-1 " x-large elevation="0" color="headmenu">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.45 0.466702L3.92498 2.9667C-1.13336 4.65837 -1.13336 7.4167 3.92498 9.10004L6.15831 9.8417L6.89998 12.075C8.58331 17.1334 11.35 17.1334 13.0333 12.075L15.5416 4.55837C16.6583 1.18337 14.825 -0.658298 11.45 0.466702ZM11.7166 4.95004L8.54998 8.13337C8.42498 8.25837 8.26664 8.3167 8.10831 8.3167C7.94998 8.3167 7.79164 8.25837 7.66664 8.13337C7.42498 7.8917 7.42498 7.4917 7.66664 7.25004L10.8333 4.0667C11.075 3.82504 11.475 3.82504 11.7166 4.0667C11.9583 4.30837 11.9583 4.70837 11.7166 4.95004Z" fill="#34C38F" />
                    </svg>
                    <span class="font-semibold ml-1 text-sm">Send</span>
                </v-btn>
                <v-btn class="ml-1 " x-large elevation="0" color="headmenu">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.83331 4.16663C5.83331 2.78329 6.94998 1.66663 8.33331 1.66663H11.6666C13.05 1.66663 14.1666 2.78329 14.1666 4.16663C14.1666 4.62496 13.7916 4.99996 13.3333 4.99996H6.66665C6.20831 4.99996 5.83331 4.62496 5.83331 4.16663Z" fill="#FF7640" />
                        <path d="M14.7916 12.5C14.7916 12.8417 14.5083 13.125 14.1666 13.125H13.3333V15.8333C13.3333 17.2167 12.2166 18.3333 10.8333 18.3333H9.16665C7.78331 18.3333 6.66665 17.2167 6.66665 15.8333V13.125H5.83331C5.49165 13.125 5.20831 12.8417 5.20831 12.5C5.20831 12.1583 5.49165 11.875 5.83331 11.875H14.1666C14.5083 11.875 14.7916 12.1583 14.7916 12.5Z" fill="#FF7640" />
                        <path d="M15 5.83337H5C3.33333 5.83337 2.5 6.66671 2.5 8.33337V12.5C2.5 14.1667 3.33333 15 5 15H5.3125C5.60015 15 5.83333 14.7669 5.83333 14.4792C5.83333 14.1916 5.59275 13.9671 5.32368 13.8654C4.77182 13.6569 4.375 13.1211 4.375 12.5C4.375 11.7 5.03333 11.0417 5.83333 11.0417H14.1667C14.9667 11.0417 15.625 11.7 15.625 12.5C15.625 13.1211 15.2282 13.6569 14.6763 13.8654C14.4072 13.9671 14.1667 14.1916 14.1667 14.4792C14.1667 14.7669 14.3999 15 14.6875 15H15C16.6667 15 17.5 14.1667 17.5 12.5V8.33337C17.5 6.66671 16.6667 5.83337 15 5.83337ZM8.33333 9.79171H5.83333C5.49167 9.79171 5.20833 9.50837 5.20833 9.16671C5.20833 8.82504 5.49167 8.54171 5.83333 8.54171H8.33333C8.675 8.54171 8.95833 8.82504 8.95833 9.16671C8.95833 9.50837 8.675 9.79171 8.33333 9.79171Z" fill="#FF7640" />
                    </svg>

                    <span class="font-semibold ml-1 text-sm">Print</span>
                </v-btn>
                <v-btn class="ml-1 " x-large elevation="0" color="headmenu">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.0833 8.49163H14.675C12.7 8.49163 11.0916 6.88329 11.0916 4.90829V2.49996C11.0916 2.04163 10.7166 1.66663 10.2583 1.66663H6.72498C4.15831 1.66663 2.08331 3.33329 2.08331 6.30829V13.6916C2.08331 16.6666 4.15831 18.3333 6.72498 18.3333H13.275C15.8416 18.3333 17.9166 16.6666 17.9166 13.6916V9.32496C17.9166 8.86663 17.5416 8.49163 17.0833 8.49163ZM9.60831 11.275C9.48331 11.4 9.32498 11.4583 9.16665 11.4583C9.00831 11.4583 8.84998 11.4 8.72498 11.275L8.12498 10.675V14.1666C8.12498 14.5083 7.84165 14.7916 7.49998 14.7916C7.15831 14.7916 6.87498 14.5083 6.87498 14.1666V10.675L6.27498 11.275C6.03331 11.5166 5.63331 11.5166 5.39165 11.275C5.14998 11.0333 5.14998 10.6333 5.39165 10.3916L7.05831 8.72496C7.11665 8.67496 7.17498 8.63329 7.24165 8.59996C7.25831 8.59163 7.28331 8.58329 7.29998 8.57496C7.34998 8.55829 7.39998 8.54996 7.45831 8.54163C7.48331 8.54163 7.49998 8.54163 7.52498 8.54163C7.59165 8.54163 7.65831 8.55829 7.72498 8.58329C7.73331 8.58329 7.73331 8.58329 7.74165 8.58329C7.80831 8.60829 7.87498 8.65829 7.92498 8.70829C7.93331 8.71663 7.94165 8.71663 7.94165 8.72496L9.60831 10.3916C9.84998 10.6333 9.84998 11.0333 9.60831 11.275Z" fill="#50A5F1" />
                        <path d="M14.525 7.3417C15.3167 7.35004 16.4167 7.35003 17.3583 7.35003C17.8333 7.35003 18.0833 6.7917 17.75 6.45837C16.55 5.25003 14.4 3.07503 13.1667 1.8417C12.825 1.50003 12.2333 1.73337 12.2333 2.20837V5.1167C12.2333 6.33337 13.2667 7.3417 14.525 7.3417Z" fill="#50A5F1" />
                    </svg>
                    <span class="font-semibold ml-1 text-sm">Export</span>
                </v-btn>
                <v-btn class="ml-1 " x-large elevation="0" color="headmenu">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.0833 8.49163H14.675C12.7 8.49163 11.0916 6.88329 11.0916 4.90829V2.49996C11.0916 2.04163 10.7166 1.66663 10.2583 1.66663H6.72498C4.15831 1.66663 2.08331 3.33329 2.08331 6.30829V13.6916C2.08331 16.6666 4.15831 18.3333 6.72498 18.3333H13.275C15.8416 18.3333 17.9166 16.6666 17.9166 13.6916V9.32496C17.9166 8.86663 17.5416 8.49163 17.0833 8.49163ZM10.2333 13.15L8.56665 14.8166C8.50831 14.875 8.43331 14.925 8.35831 14.95C8.28331 14.9833 8.20831 15 8.12498 15C8.04165 15 7.96665 14.9833 7.89165 14.95C7.82498 14.925 7.75831 14.875 7.70831 14.825C7.69998 14.8166 7.69165 14.8166 7.69165 14.8083L6.02498 13.1416C5.78331 12.9 5.78331 12.5 6.02498 12.2583C6.26665 12.0166 6.66665 12.0166 6.90831 12.2583L7.49998 12.8666V9.37496C7.49998 9.03329 7.78331 8.74996 8.12498 8.74996C8.46665 8.74996 8.74998 9.03329 8.74998 9.37496V12.8666L9.34998 12.2666C9.59165 12.025 9.99165 12.025 10.2333 12.2666C10.475 12.5083 10.475 12.9083 10.2333 13.15Z" fill="#46BFCF" />
                        <path d="M14.525 7.3417C15.3167 7.35004 16.4167 7.35003 17.3583 7.35003C17.8333 7.35003 18.0833 6.7917 17.75 6.45837C16.55 5.25003 14.4 3.07503 13.1667 1.8417C12.825 1.50003 12.2333 1.73337 12.2333 2.20837V5.1167C12.2333 6.33337 13.2667 7.3417 14.525 7.3417Z" fill="#46BFCF" />
                    </svg>
                    <span class="font-semibold ml-1 text-sm">Import File</span>
                </v-btn>
                <v-btn class="ml-1 " x-large elevation="0" color="headmenu">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5584 4.35829C16.2167 4.22496 14.875 4.12496 13.525 4.04996V4.04163L13.3417 2.95829C13.2167 2.19163 13.0334 1.04163 11.0834 1.04163H8.90005C6.95838 1.04163 6.77505 2.14163 6.64172 2.94996L6.46672 4.01663C5.69172 4.06663 4.91672 4.11663 4.14172 4.19163L2.44172 4.35829C2.09172 4.39163 1.84172 4.69996 1.87505 5.04163C1.90838 5.38329 2.20838 5.63329 2.55838 5.59996L4.25838 5.43329C8.62505 4.99996 13.0251 5.16663 17.4417 5.60829C17.4667 5.60829 17.4834 5.60829 17.5084 5.60829C17.8251 5.60829 18.1 5.36663 18.1334 5.04163C18.1584 4.69996 17.9084 4.39163 17.5584 4.35829Z" fill="#F46A6A" />
                        <path d="M16.025 6.78337C15.825 6.57504 15.55 6.45837 15.2666 6.45837H4.73329C4.44995 6.45837 4.16662 6.57504 3.97495 6.78337C3.78329 6.99171 3.67495 7.27504 3.69162 7.56671L4.20829 16.1167C4.29995 17.3834 4.41662 18.9667 7.32495 18.9667H12.675C15.5833 18.9667 15.7 17.3917 15.7916 16.1167L16.3083 7.57504C16.325 7.27504 16.2166 6.99171 16.025 6.78337ZM11.3833 14.7917H8.60829C8.26662 14.7917 7.98329 14.5084 7.98329 14.1667C7.98329 13.825 8.26662 13.5417 8.60829 13.5417H11.3833C11.725 13.5417 12.0083 13.825 12.0083 14.1667C12.0083 14.5084 11.725 14.7917 11.3833 14.7917ZM12.0833 11.4584H7.91662C7.57495 11.4584 7.29162 11.175 7.29162 10.8334C7.29162 10.4917 7.57495 10.2084 7.91662 10.2084H12.0833C12.425 10.2084 12.7083 10.4917 12.7083 10.8334C12.7083 11.175 12.425 11.4584 12.0833 11.4584Z" fill="#F46A6A" />
                    </svg>
                    <span class="font-semibold ml-1 text-sm">Delete</span>
                </v-btn>
                <v-btn class="ml-1 " x-large elevation="0" color="headmenu">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.9166 10.9584H11.1083C9.62496 10.9584 8.41663 9.75837 8.41663 8.26671V6.45837C8.41663 6.11671 8.14163 5.83337 7.79163 5.83337H5.14996C3.22496 5.83337 1.66663 7.08337 1.66663 9.31671V14.85C1.66663 17.0834 3.22496 18.3334 5.14996 18.3334H10.0583C11.9833 18.3334 13.5416 17.0834 13.5416 14.85V11.5834C13.5416 11.2334 13.2583 10.9584 12.9166 10.9584Z" fill="#74788D" />
                        <path d="M14.85 1.66663H13.2083H12.3H9.94167C8.05834 1.66663 6.53334 2.86663 6.46667 5.00829C6.51667 5.00829 6.55834 4.99996 6.60834 4.99996H8.96667H9.87501H11.5167C13.4417 4.99996 15 6.24996 15 8.48329V10.125V12.3833V14.025C15 14.075 14.9917 14.1166 14.9917 14.1583C16.85 14.1 18.3333 12.8666 18.3333 10.6916V9.04996V6.79163V5.14996C18.3333 2.91663 16.775 1.66663 14.85 1.66663Z" fill="#74788D" />
                        <path d="M9.98332 5.95837C9.72499 5.70004 9.28333 5.87504 9.28333 6.23337V8.4167C9.28333 9.33337 10.0583 10.0834 11.0083 10.0834C11.6 10.0917 12.425 10.0917 13.1333 10.0917C13.4917 10.0917 13.675 9.67504 13.425 9.42504C12.5167 8.5167 10.9 6.8917 9.98332 5.95837Z" fill="#74788D" />
                    </svg>
                    <span class="font-semibold ml-1 text-sm">Copy</span>
                </v-btn>
                <v-btn class="ml-1 " x-large elevation="0" dark color="#34C38F">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 10H15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10 15V5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span class="font-semibold ml-1 text-sm">Save</span>
                </v-btn>
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
                        <div class="flex rounded-b-lg bg-white h-10 items-center mt-06 ">
                            <div class="w-1/2  h-full font-semibold text-base uppercase  flex flex-col justify-center items-center">
                              A
                            </div>
                             <div class="w-1/2 h-full font-semibold text-base uppercase flex flex-col justify-center rounded-br-lg items-center bg-yellow text-white">Accepted</div>
                        </div>

                        <div class="flex rounded-lg bg-purple h-10 items-center  mt-6 p-2 text-white font-semibold">
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
                            <v-btn class="w-60 ml-2" text   x-large  ><span class="font-semibold">Invoice</span></v-btn>
                            <v-spacer></v-spacer>
                            <v-btn class="pb-1" fab color="grey" outlined>
                                <v-icon>fa-thin fa-circle-info</v-icon>
                            </v-btn>
                        </div>

                        <div class="flex justify-center items-center my-4 bg-gray">
                            <div @click="activeTab = index" :class="activeTab===index ? 'bg-orange-base text-orange-base' : ' text-gray-500'" class="w-1/3 text-center cursor-pointer py-2 px-4 rounded transition" v-for="(tab, index) in tabs" :key="index">
                                <div class="font-semibold flex flex-col md:flex-row justify-center items-center">
                                    <v-btn :outlined="activeTab!=index" :dark="activeTab===index" fab elevation="0" class="rounded-xl" x-small color="base"><span class="text-base font-semibold">{{index+1}}</span></v-btn>
                                    <span class="md:ml-6">{{tab}}</span>
                                </div>
                            </div>
                        </div>
                        <div v-if="activeTab == 0">
                            <Info-Declaration></Info-Declaration>
                        </div>
                        <div v-if="activeTab == 1">
                            <Info-Payment></Info-Payment>
                        </div>
                        <div v-if="activeTab == 2">
                            <Info-Trading></Info-Trading>
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
