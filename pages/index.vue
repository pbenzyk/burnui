<template>
<div>
    <Core-Header></Core-Header>

    <div>
        <div class="h-40 esap-bg " v-if="(!$vuetify.breakpoint.mobile)"> </div>
        <div class="md:-mt-36 ">
            <div>
                <v-container grid-list-xs>
                    <v-card class="h-full  ">
                        <v-card-text>

                            <div class="p-2">
                                <div class="flex">
                                    <div class="w-full md:w-1/2  ">
                                        <div class="flex flex-col md:flex-row w-full">
                                            <div>
                                                <label>First Name</label>
                                                <v-text-field append-icon="mdi-filter" color="#FE7640" outlined dense placeholder="Filter Name"></v-text-field>
                                            </div>

                                            <v-btn-toggle class="ml-2" v-model="toggle_exclusive">
                                                <div class="input-left ">
                                                    <label v-if="!$vuetify.breakpoint.mobile">วันที่สร้างเอกสาร</label>
                                                    <v-text-field append-icon="mdi-calendar-range" color="#FE7640" class="input-left " outlined dense placeholder="From"></v-text-field>
                                                </div>
                                                <div class="dd">
                                                    <br v-if="!$vuetify.breakpoint.mobile">
                                                    <v-text-field class="dd " append-icon="mdi-calendar-range" color="#FE7640" style="border-left:0px!important" outlined dense placeholder="To"></v-text-field>
                                                </div>
                                                <div class="pb-6 ml-2"> <br v-if="!$vuetify.breakpoint.mobile">
                                                    <button class="  bg-orange-500 hover:bg-orange-400 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white">Search</button>
                                                </div>
                                            </v-btn-toggle>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </v-card-text>
                        <v-data-table :headers="headers" :items="ImportDeclaration" :single-select="singleSelect" item-key="no" show-select :items-per-page="30">

                            <template v-slot:item.status="{ item }">
                                <v-btn width="120" small v-if="item.status == 1" depressed color="#FE7640" dark>
                                    READY
                                </v-btn>
                                <v-btn width="120" small v-if="item.status == 2" depressed color="#F1B44C" dark>
                                    ACCENTED
                                </v-btn>
                                <v-btn width="120" small v-if="item.status == 3" depressed color="#34C38F" dark>
                                    GREEN LINE
                                </v-btn>
                                <v-btn width="120" small v-if="item.status == 4" depressed color="#F32424" dark>
                                    RED LINE
                                </v-btn>
                                <v-btn width="120" small v-if="item.status == 5" depressed color="#B20600" dark>
                                    REJECTED
                                </v-btn>
                                <v-btn width="120" small v-if="item.status == 6" depressed color="#990000" dark>
                                    ERROR
                                </v-btn>
                                <v-btn width="120" small v-if="item.status == 7" depressed color="#748DA6" dark>
                                    CANCEL
                                </v-btn>
                                <v-btn width="120" small v-if="item.status == 8" depressed color="#1363DF" dark>
                                    WAIT
                                </v-btn>
                                <v-btn width="120" small v-if="item.status == 9" depressed color="#1363DF" dark>
                                    WAIT CANCEL
                                </v-btn>
                                <v-btn width="120" small v-if="item.status == 10" depressed color="#47B5FF" dark>
                                    CHECKED
                                </v-btn>
                                <v-btn width="120" small v-if="item.status == 11" depressed color="#3EC70B" dark>
                                    LOADED
                                </v-btn>

                            </template>

                        </v-data-table>

                    </v-card>
                </v-container>

            </div>

        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'IndexPage',
    data: () => {
        return ({
            nav: false,
            singleSelect: false,
            selected: [],
            toggle_exclusive: 2,
            breadcrumbs: [{
                    text: 'Import Declaration List',
                    disabled: false,
                    light: true,
                    href: '/',
                },
                {
                    text: 'Import Declaration List',
                    disabled: false,
                    href: '/',
                }
            ],
            headers: [{

                    text: '',
                    align: 'start',
                    sortable: false,
                    value: 'no',
                },
                {

                    text: 'Reference No',
                    align: 'start',
                    sortable: false,
                    value: 'reference',
                    class: 'subtitle-2 font-weight-black'
                },
                {
                    text: 'Declaration No',
                    value: 'declaration',
                    class: 'subtitle-2 font-weight-black'
                },
                {
                    text: ' Import Date',
                    value: 'date',
                    class: 'subtitle-2 font-weight-black'
                },
                {
                    text: 'Import Name',
                    value: 'name',
                    class: 'subtitle-2 font-weight-black'
                },
                {
                    text: 'HAWB.',
                    value: 'hawb',
                    class: 'subtitle-2 font-weight-black'
                },
                {
                    text: 'Status',
                    value: 'status',
                    class: 'subtitle-2 font-weight-black'
                },
                {
                    text: 'User',
                    value: 'user',
                    class: 'subtitle-2 font-weight-black'
                },
                {
                    text: 'Job No',
                    value: 'job',
                    class: 'subtitle-2 font-weight-black'
                },
                {
                    text: 'Job Counter',
                    value: 'jobcounter',
                    class: 'subtitle-2 font-weight-black'
                },
            ],
            ImportDeclaration: [{
                    reference: 'ASDF12345',
                    declaration: 'A007897984',
                    date: '24/4/2022',
                    name: 'DEI Service',
                    hawb: 'RTCMASTER',
                    status: 1,
                    user: 'Naree',
                    job: 'BOND',
                    jobcounter: 'DHL',
                },
                {
                    reference: 'ASDF12345',
                    declaration: 'A007897984',
                    date: '24/4/2022',
                    name: 'DEI Service',
                    hawb: 'RTCMASTER',
                    status: 2,
                    user: 'Naree',
                    job: 'BOND',
                    jobcounter: 'DHL',
                },
                {
                    reference: 'ASDF12345',
                    declaration: 'A007897984',
                    date: '24/4/2022',
                    name: 'DEI Service',
                    hawb: 'RTCMASTER',
                    status: 3,
                    user: 'Naree',
                    job: 'BOND',
                    jobcounter: 'DHL',
                },
                {
                    reference: 'ASDF12345',
                    declaration: 'A007897984',
                    date: '24/4/2022',
                    name: 'DEI Service',
                    hawb: 'RTCMASTER',
                    status: 4,
                    user: 'Naree',
                    job: 'BOND',
                    jobcounter: 'DHL',
                },
                {
                    reference: 'ASDF12345',
                    declaration: 'A007897984',
                    date: '24/4/2022',
                    name: 'DEI Service',
                    hawb: 'RTCMASTER',
                    status: 5,
                    user: 'Naree',
                    job: 'BOND',
                    jobcounter: 'DHL',
                },
                {
                    reference: 'ASDF12345',
                    declaration: 'A007897984',
                    date: '24/4/2022',
                    name: 'DEI Service',
                    hawb: 'RTCMASTER',
                    status: 6,
                    user: 'Naree',
                    job: 'BOND',
                    jobcounter: 'DHL',
                },
                {
                    reference: 'ASDF12345',
                    declaration: 'A007897984',
                    date: '24/4/2022',
                    name: 'DEI Service',
                    hawb: 'RTCMASTER',
                    status: 7,
                    user: 'Naree',
                    job: 'BOND',
                    jobcounter: 'DHL',
                },
                {
                    reference: 'ASDF12345',
                    declaration: 'A007897984',
                    date: '24/4/2022',
                    name: 'DEI Service',
                    hawb: 'RTCMASTER',
                    status: 8,
                    user: 'Naree',
                    job: 'BOND',
                    jobcounter: 'DHL',
                },
                {
                    reference: 'ASDF12345',
                    declaration: 'A007897984',
                    date: '24/4/2022',
                    name: 'DEI Service',
                    hawb: 'RTCMASTER',
                    status: 9,
                    user: 'Naree',
                    job: 'BOND',
                    jobcounter: 'DHL',
                },
                {
                    reference: 'ASDF12345',
                    declaration: 'A007897984',
                    date: '24/4/2022',
                    name: 'DEI Service',
                    hawb: 'RTCMASTER',
                    status: 10,
                    user: 'Naree',
                    job: 'BOND',
                    jobcounter: 'DHL',
                },
                {
                    reference: 'ASDF12345',
                    declaration: 'A007897984',
                    date: '24/4/2022',
                    name: 'DEI Service',
                    hawb: 'RTCMASTER',
                    status: 11,
                    user: 'Naree',
                    job: 'BOND',
                    jobcounter: 'DHL',
                },
                {
                    reference: 'ASDF12345',
                    declaration: 'A007897984',
                    date: '24/4/2022',
                    name: 'DEI Service',
                    hawb: 'RTCMASTER',
                    status: 1,
                    user: 'Naree',
                    job: 'BOND',
                    jobcounter: 'DHL',
                },
                {
                    reference: 'ASDF12345',
                    declaration: 'A007897984',
                    date: '24/4/2022',
                    name: 'DEI Service',
                    hawb: 'RTCMASTER',
                    status: 1,
                    user: 'Naree',
                    job: 'BOND',
                    jobcounter: 'DHL',
                },
                {
                    reference: 'ASDF12345',
                    declaration: 'A007897984',
                    date: '24/4/2022',
                    name: 'DEI Service',
                    hawb: 'RTCMASTER',
                    status: 1,
                    user: 'Naree',
                    job: 'BOND',
                    jobcounter: 'DHL',
                },
                {
                    reference: 'ASDF12345',
                    declaration: 'A007897984',
                    date: '24/4/2022',
                    name: 'DEI Service',
                    hawb: 'RTCMASTER',
                    status: 1,
                    user: 'Naree',
                    job: 'BOND',
                    jobcounter: 'DHL',
                },
                {
                    reference: 'ASDF12345',
                    declaration: 'A007897984',
                    date: '24/4/2022',
                    name: 'DEI Service',
                    hawb: 'RTCMASTER',
                    status: 1,
                    user: 'Naree',
                    job: 'BOND',
                    jobcounter: 'DHL',
                },
                {
                    reference: 'ASDF12345',
                    declaration: 'A007897984',
                    date: '24/4/2022',
                    name: 'DEI Service',
                    hawb: 'RTCMASTER',
                    status: 1,
                    user: 'Naree',
                    job: 'BOND',
                    jobcounter: 'DHL',
                },
                {
                    reference: 'ASDF12345',
                    declaration: 'A007897984',
                    date: '24/4/2022',
                    name: 'DEI Service',
                    hawb: 'RTCMASTER',
                    status: 1,
                    user: 'Naree',
                    job: 'BOND',
                    jobcounter: 'DHL',
                },
                {
                    reference: 'ASDF12345',
                    declaration: 'A007897984',
                    date: '24/4/2022',
                    name: 'DEI Service',
                    hawb: 'RTCMASTER',
                    status: 1,
                    user: 'Naree',
                    job: 'BOND',
                    jobcounter: 'DHL',
                },
                {
                    reference: 'ASDF12345',
                    declaration: 'A007897984',
                    date: '24/4/2022',
                    name: 'DEI Service',
                    hawb: 'RTCMASTER',
                    status: 1,
                    user: 'Naree',
                    job: 'BOND',
                    jobcounter: 'DHL',
                },
                {
                    reference: 'ASDF12345',
                    declaration: 'A007897984',
                    date: '24/4/2022',
                    name: 'DEI Service',
                    hawb: 'RTCMASTER',
                    status: 1,
                    user: 'Naree',
                    job: 'BOND',
                    jobcounter: 'DHL',
                },
                {
                    reference: 'ASDF12345',
                    declaration: 'A007897984',
                    date: '24/4/2022',
                    name: 'DEI Service',
                    hawb: 'RTCMASTER',
                    status: 1,
                    user: 'Naree',
                    job: 'BOND',
                    jobcounter: 'DHL',
                },
                {
                    reference: 'ASDF12345',
                    declaration: 'A007897984',
                    date: '24/4/2022',
                    name: 'DEI Service',
                    hawb: 'RTCMASTER',
                    status: 1,
                    user: 'Naree',
                    job: 'BOND',
                    jobcounter: 'DHL',
                },
                {
                    reference: 'ASDF12345',
                    declaration: 'A007897984',
                    date: '24/4/2022',
                    name: 'DEI Service',
                    hawb: 'RTCMASTER',
                    status: 1,
                    user: 'Naree',
                    job: 'BOND',
                    jobcounter: 'DHL',
                },
                {
                    reference: 'ASDF12345',
                    declaration: 'A007897984',
                    date: '24/4/2022',
                    name: 'DEI Service',
                    hawb: 'RTCMASTER',
                    status: 1,
                    user: 'Naree',
                    job: 'BOND',
                    jobcounter: 'DHL',
                },
                {
                    reference: 'ASDF12345',
                    declaration: 'A007897984',
                    date: '24/4/2022',
                    name: 'DEI Service',
                    hawb: 'RTCMASTER',
                    status: 1,
                    user: 'Naree',
                    job: 'BOND',
                    jobcounter: 'DHL',
                },
                {
                    reference: 'ASDF12345',
                    declaration: 'A007897984',
                    date: '24/4/2022',
                    name: 'DEI Service',
                    hawb: 'RTCMASTER',
                    status: 1,
                    user: 'Naree',
                    job: 'BOND',
                    jobcounter: 'DHL',
                },
                {
                    reference: 'ASDF12345',
                    declaration: 'A007897984',
                    date: '24/4/2022',
                    name: 'DEI Service',
                    hawb: 'RTCMASTER',
                    status: 1,
                    user: 'Naree',
                    job: 'BOND',
                    jobcounter: 'DHL',
                },
                {
                    reference: 'ASDF12345',
                    declaration: 'A007897984',
                    date: '24/4/2022',
                    name: 'DEI Service',
                    hawb: 'RTCMASTER',
                    status: 1,
                    user: 'Naree',
                    job: 'BOND',
                    jobcounter: 'DHL',
                },

            ],

        })

    },
    methods: {
        getColor(status) {
            if (status == 1) return 'red'
            else if (status > 2) return 'orange'
            else return 'green'
        },
    },
}
</script>
