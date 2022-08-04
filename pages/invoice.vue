<template>
<div>
    <div class="sticky top-64p" style="z-index:999;">
        <div class="esap-header2">
            <div class="pl-20 pt-6">
                <span class="text-breadcrumbs ">Import Declaration /</span>
                <span class="text-breadcrumbs ">Import Declaration List /</span>
                <span class="text-breadcrumbs font-semibold">Invoice List</span>
            </div>
            <div class="pl-20 pr-20 pt-4 flex items-end">
                <h2 class="font-semibold text-xl text-white uppercase">Invoice</h2>
                <v-spacer></v-spacer>
                <v-btn class="ml-1 " x-large elevation="0" color="headmenu">
                    <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.09049 0.242921C1.92615 0.316232 1.75548 0.476857 1.66699 0.641506C1.60818 0.750829 1.60107 1.08113 1.59126 4.14741L1.58044 7.5326L1.22008 7.5503C0.780551 7.57187 0.518142 7.67765 0.300157 7.9212C-0.0152345 8.27356 0.000120902 8.07861 0.000120902 11.7267C0.000120902 14.9503 0.000511579 14.9666 0.0836184 15.1517C0.293476 15.6191 0.630631 15.83 1.21953 15.8622L1.57938 15.8819L1.59072 18.0392C1.60318 20.4063 1.59267 20.3018 1.84281 20.5465C2.09823 20.7963 1.60763 20.78 8.85 20.78C16.0924 20.78 15.6018 20.7963 15.8572 20.5465C16.1073 20.3018 16.0968 20.4063 16.1093 18.0392L16.1206 15.8819L16.4805 15.8622C17.0694 15.83 17.4065 15.6191 17.6164 15.1517C17.6995 14.9666 17.6999 14.9503 17.6999 11.7267C17.6999 8.07861 17.7152 8.27356 17.3998 7.9212C17.1817 7.67745 16.9195 7.57187 16.4789 7.55022L16.1175 7.53248L16.1135 6.32015C16.1114 5.65334 16.0975 5.06279 16.0826 5.00787C16.0502 4.88796 12.1966 0.338202 12.0479 0.244289C11.9535 0.184658 11.5076 0.178945 7.08573 0.180353C2.83275 0.181721 2.21021 0.189527 2.09049 0.242921ZM11.4678 3.11542V5.24732L11.5818 5.37873L11.6958 5.51014L13.5159 5.52137L15.336 5.53259V6.53734V7.54209H8.85H2.364V4.26281V0.983517H6.91592H11.4678V3.11542ZM3.45802 9.97927V11.1288L4.05731 10.2106C4.38693 9.70558 4.72537 9.18898 4.80945 9.06256L4.96231 8.83273L5.65814 8.8312C6.04086 8.83035 6.34547 8.84327 6.33507 8.85985C6.32468 8.87642 5.95447 9.36985 5.5124 9.9563C5.05487 10.5632 4.71724 11.0464 4.72865 11.0778C4.73963 11.1082 5.12641 11.7737 5.58809 12.5568C6.04977 13.3398 6.42752 13.9899 6.42752 14.0013C6.42752 14.0128 6.13303 14.0172 5.77306 14.0111L5.11859 14.0001L4.51297 12.904C4.17988 12.3012 3.89723 11.8078 3.88489 11.8076C3.8725 11.8074 3.77142 11.9227 3.66022 12.0638L3.45802 12.3204V13.1703V14.0202H2.89147H2.32492V11.4249V8.82967H2.89147H3.45802V9.97927ZM8.81769 9.51369C9.08021 10.4265 9.33559 11.4212 9.44011 11.9379C9.48825 12.1759 9.54221 12.3705 9.55998 12.3705C9.5778 12.3705 9.59237 12.3468 9.59237 12.3179C9.59237 12.2012 10.0026 10.6877 10.2542 9.87582C10.4017 9.40002 10.5341 8.97001 10.5484 8.9202C10.5742 8.83047 10.5809 8.82967 11.3107 8.82967H12.0469L12.0714 9.16162C12.0969 9.50717 12.3274 13.8152 12.3274 13.9458C12.3274 14.0146 12.2867 14.0202 11.7837 14.0202H11.2401L11.2178 13.7285C11.1824 13.2652 11.1161 11.1613 11.1162 10.5028C11.1162 10.1727 11.1065 9.9126 11.0947 9.92479C11.0829 9.93694 11.0047 10.207 10.9209 10.525C10.8372 10.8429 10.5764 11.7368 10.3415 12.5113L9.91417 13.9196H9.47035H9.02653L8.84219 13.2356C8.48792 11.9213 8.29299 11.1441 8.16667 10.5424C8.03952 9.9369 8.03933 9.93646 8.01655 10.1575C8.00397 10.2792 7.96619 11.094 7.9325 11.9681C7.89886 12.8423 7.86124 13.6616 7.84889 13.7888L7.82646 14.0202H7.32466C7.04865 14.0202 6.81609 14.0066 6.80785 13.99C6.79542 13.965 7.1096 8.87292 7.12566 8.83884C7.12851 8.83285 7.46743 8.83285 7.87878 8.83884L8.62678 8.84979L8.81769 9.51369ZM14.3498 10.9313L14.3599 13.0129L15.3461 13.0237L16.3323 13.0344V13.5172V14.0001H14.7695H13.2066L13.1964 11.4652C13.1909 10.071 13.1949 8.90712 13.2054 8.87884C13.2199 8.83973 13.3575 8.83011 13.7821 8.8386L14.3397 8.84979L14.3498 10.9313ZM15.336 17.8024V19.7338H8.85H2.364V17.8024V15.8711H8.85H15.336V17.8024Z" fill="#FF7640" />
                    </svg>

                    <span class="font-semibold ml-1 text-sm">XML</span>
                </v-btn>
                <v-btn class="ml-1 " x-large elevation="0" color="headmenu">
                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.2667 5.75817C15.6834 5.9415 15.0417 5.97484 14.375 5.80817C13.2584 5.5165 12.35 4.62484 12.0417 3.50817C11.8917 2.9665 11.8834 2.43317 11.975 1.94984C12.0834 1.4165 11.7084 0.916504 11.175 0.916504H4.83335C2.33335 0.916504 0.666687 2.1665 0.666687 5.08317V10.9165C0.666687 13.8332 2.33335 15.0832 4.83335 15.0832H13.1667C15.6667 15.0832 17.3334 13.8332 17.3334 10.9165V6.54984C17.3334 5.99984 16.8 5.58317 16.2667 5.75817ZM11.9334 7.2915L10.95 8.07484C10.4 8.5165 9.70002 8.73317 9.00002 8.73317C8.30002 8.73317 7.59169 8.5165 7.05002 8.07484L4.44169 5.9915C4.17502 5.77484 4.13335 5.37484 4.34169 5.10817C4.55835 4.8415 4.95002 4.7915 5.21669 5.00817L7.82502 7.0915C8.45835 7.59984 9.53335 7.59984 10.1667 7.0915L11.15 6.30817C11.4167 6.0915 11.8167 6.13317 12.025 6.40817C12.2417 6.67484 12.2 7.07484 11.9334 7.2915Z" fill="#74788D" />
                    </svg>

                    <span class="font-semibold ml-1 text-sm">Message</span>
                </v-btn>
                <v-btn class="ml-1 " x-large elevation="0" color="headmenu">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.3666 1.01689C12.3666 2.34189 11.2833 3.42523 9.95831 3.42523H6.04164C4.71664 3.42523 3.63331 2.34189 3.63331 1.01689C3.63331 0.550227 3.1333 0.258561 2.71664 0.475227C1.54164 1.10023 0.741638 2.34189 0.741638 3.76689V11.6086C0.741638 13.6586 2.41664 15.3336 4.46664 15.3336H11.5333C13.5833 15.3336 15.2583 13.6586 15.2583 11.6086V3.76689C15.2583 2.34189 14.4583 1.10023 13.2833 0.475227C12.8666 0.258561 12.3666 0.550227 12.3666 1.01689ZM10.7833 7.60856L7.44997 10.9419C7.32497 11.0669 7.16664 11.1252 7.00831 11.1252C6.84997 11.1252 6.69164 11.0669 6.56664 10.9419L5.31664 9.69189C5.07497 9.45023 5.07497 9.05023 5.31664 8.80856C5.5583 8.56689 5.95831 8.56689 6.19997 8.80856L7.00831 9.61689L9.89997 6.72523C10.1416 6.48356 10.5416 6.48356 10.7833 6.72523C11.025 6.96689 11.025 7.36689 10.7833 7.60856Z" fill="#F1B44C" />
                    </svg>

                    <span class="font-semibold ml-1 text-sm">Receive</span>
                </v-btn>
                <v-btn class="ml-1 " x-large elevation="0" color="headmenu">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.4917 0.666504H5.50835C2.47502 0.666504 0.666687 2.47484 0.666687 5.50817V12.4915C0.666687 15.5248 2.47502 17.3332 5.50835 17.3332H12.4917C15.525 17.3332 17.3334 15.5248 17.3334 12.4915V5.50817C17.3334 2.47484 15.525 0.666504 12.4917 0.666504ZM7.30835 11.4165L5.43335 13.2915C5.30835 13.4165 5.15002 13.4748 4.99169 13.4748C4.83335 13.4748 4.66669 13.4165 4.55002 13.2915L3.92502 12.6665C3.67502 12.4248 3.67502 12.0248 3.92502 11.7832C4.16669 11.5415 4.55835 11.5415 4.80835 11.7832L4.99169 11.9665L6.42502 10.5332C6.66669 10.2915 7.05835 10.2915 7.30835 10.5332C7.55002 10.7748 7.55002 11.1748 7.30835 11.4165ZM7.30835 5.58317L5.43335 7.45817C5.30835 7.58317 5.15002 7.6415 4.99169 7.6415C4.83335 7.6415 4.66669 7.58317 4.55002 7.45817L3.92502 6.83317C3.67502 6.5915 3.67502 6.1915 3.92502 5.94984C4.16669 5.70817 4.55835 5.70817 4.80835 5.94984L4.99169 6.13317L6.42502 4.69984C6.66669 4.45817 7.05835 4.45817 7.30835 4.69984C7.55002 4.9415 7.55002 5.3415 7.30835 5.58317ZM13.6334 12.8498H9.25835C8.91669 12.8498 8.63335 12.5665 8.63335 12.2248C8.63335 11.8832 8.91669 11.5998 9.25835 11.5998H13.6334C13.9834 11.5998 14.2584 11.8832 14.2584 12.2248C14.2584 12.5665 13.9834 12.8498 13.6334 12.8498ZM13.6334 7.0165H9.25835C8.91669 7.0165 8.63335 6.73317 8.63335 6.3915C8.63335 6.04984 8.91669 5.7665 9.25835 5.7665H13.6334C13.9834 5.7665 14.2584 6.04984 14.2584 6.3915C14.2584 6.73317 13.9834 7.0165 13.6334 7.0165Z" fill="#6F9CDF" />
                    </svg>

                    <span class="font-semibold ml-1 text-sm">Validate</span>
                </v-btn>
         
                <v-btn class="ml-1 " x-large elevation="0" color="headmenu">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.45 0.466702L3.92498 2.9667C-1.13336 4.65837 -1.13336 7.4167 3.92498 9.10004L6.15831 9.8417L6.89998 12.075C8.58331 17.1334 11.35 17.1334 13.0333 12.075L15.5416 4.55837C16.6583 1.18337 14.825 -0.658298 11.45 0.466702ZM11.7166 4.95004L8.54998 8.13337C8.42498 8.25837 8.26664 8.3167 8.10831 8.3167C7.94998 8.3167 7.79164 8.25837 7.66664 8.13337C7.42498 7.8917 7.42498 7.4917 7.66664 7.25004L10.8333 4.0667C11.075 3.82504 11.475 3.82504 11.7166 4.0667C11.9583 4.30837 11.9583 4.70837 11.7166 4.95004Z" fill="#34C38F" />
                    </svg>

                    <span class="font-semibold ml-1 text-sm">Send</span>
                </v-btn>
                <v-btn class="ml-1 " x-large elevation="0" color="headmenu">
                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 0.833496H3C1.33333 0.833496 0.5 1.66683 0.5 3.3335V7.50016C0.5 9.16683 1.33333 10.0002 3 10.0002H3.3125C3.60015 10.0002 3.83333 9.76698 3.83333 9.47933C3.83333 9.19168 3.59275 8.96719 3.32368 8.86551C2.77182 8.65698 2.375 8.12127 2.375 7.50016C2.375 6.70016 3.03333 6.04183 3.83333 6.04183H12.1667C12.9667 6.04183 13.625 6.70016 13.625 7.50016C13.625 8.12127 13.2282 8.65698 12.6763 8.86551C12.4072 8.96719 12.1667 9.19168 12.1667 9.47933C12.1667 9.76698 12.3999 10.0002 12.6875 10.0002H13C14.6667 10.0002 15.5 9.16683 15.5 7.50016V3.3335C15.5 1.66683 14.6667 0.833496 13 0.833496ZM6.33333 4.79183H3.83333C3.49167 4.79183 3.20833 4.5085 3.20833 4.16683C3.20833 3.82516 3.49167 3.54183 3.83333 3.54183H6.33333C6.675 3.54183 6.95833 3.82516 6.95833 4.16683C6.95833 4.5085 6.675 4.79183 6.33333 4.79183Z" fill="#FF7640" />
                    </svg>

                    <span class="font-semibold ml-1 text-sm">Print</span>
                </v-btn>
                <v-btn class="ml-1 " x-large elevation="0" color="headmenu">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.99996 0.666504C4.40829 0.666504 0.666626 4.40817 0.666626 8.99984C0.666626 13.5915 4.40829 17.3332 8.99996 17.3332C13.5916 17.3332 17.3333 13.5915 17.3333 8.99984C17.3333 4.40817 13.5916 0.666504 8.99996 0.666504ZM11.8 10.9165C12.0416 11.1582 12.0416 11.5582 11.8 11.7998C11.675 11.9248 11.5166 11.9832 11.3583 11.9832C11.2 11.9832 11.0416 11.9248 10.9166 11.7998L8.99996 9.88317L7.08329 11.7998C6.95829 11.9248 6.79996 11.9832 6.64163 11.9832C6.48329 11.9832 6.32496 11.9248 6.19996 11.7998C5.95829 11.5582 5.95829 11.1582 6.19996 10.9165L8.11663 8.99984L6.19996 7.08317C5.95829 6.8415 5.95829 6.4415 6.19996 6.19984C6.44163 5.95817 6.84163 5.95817 7.08329 6.19984L8.99996 8.1165L10.9166 6.19984C11.1583 5.95817 11.5583 5.95817 11.8 6.19984C12.0416 6.4415 12.0416 6.8415 11.8 7.08317L9.88329 8.99984L11.8 10.9165Z" fill="#F46A6A" />
                    </svg>

                    <span class="font-semibold ml-1 text-sm">Cancel</span>
                </v-btn>
                <v-btn class="ml-1 " x-large elevation="0" dark color="#34C38F">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.4916 0.666504H5.50829C2.47496 0.666504 0.666626 2.47484 0.666626 5.50817V12.4832C0.666626 15.5248 2.47496 17.3332 5.50829 17.3332H12.4833C15.5166 17.3332 17.325 15.5248 17.325 12.4915V5.50817C17.3333 2.47484 15.525 0.666504 12.4916 0.666504ZM12.9833 7.08317L8.25829 11.8082C8.14163 11.9248 7.98329 11.9915 7.81663 11.9915C7.64996 11.9915 7.49163 11.9248 7.37496 11.8082L5.01663 9.44984C4.77496 9.20817 4.77496 8.80817 5.01663 8.5665C5.25829 8.32484 5.65829 8.32484 5.89996 8.5665L7.81663 10.4832L12.1 6.19984C12.3416 5.95817 12.7416 5.95817 12.9833 6.19984C13.225 6.4415 13.225 6.83317 12.9833 7.08317Z" fill="white" />
                    </svg>

                    <span class="font-semibold ml-1 text-sm">Save</span>
                </v-btn>
            </div>
        </div>
    </div>

    <div class="h-14 esap-bg "> </div>
    <v-container class="-mt-16">
        <div class="flex flex-col md:flex-row">
            <div class="p-2 w-full md:w-1/8">
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

            <div class="p-2 w-full md:w-7/8">
                <v-card class="h-full ml-5">
                    <div class="p-8">
                        <div class="flex border-b-2 border-gray-200">
                            <v-btn class="w-60 ml-2" text x-large><span class="font-semibold">Declaration Control</span></v-btn>
                            <v-btn class="w-60" dark x-large color="base"><span class="font-semibold">Invoice</span></v-btn>

                            <v-spacer></v-spacer>
                            <v-btn class="pb-1" fab color="grey" outlined>
                                <v-icon>fa-thin fa-circle-info</v-icon>
                            </v-btn>
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
                                <v-btn dark class="rounded-lg" color="purple_base">
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
