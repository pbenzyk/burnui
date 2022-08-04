<template>
     <v-menu class="rounded-lg" >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn small fab color="grey" outlined v-bind="attrs" v-on="on">
                                        <v-icon>fa-thin fa-circle-info</v-icon>
                                    </v-btn>
                                </template>
                                <v-list >
                                    <v-list-item>
                                        <v-list-item-title class="w-300px">
                                            <div class="flex w-full">
                                                <span class="text-gray-500">ผู้สร้าง</span>
                                                <v-spacer></v-spacer>
                                                <span>นัฐพล สะอาดตา </span>
                                            </div>
                                        </v-list-item-title>
                                    </v-list-item>
                                      <v-list-item>
                                        <v-list-item-title class="w-300px">
                                            <div class="flex w-full">
                                                <span class="text-gray-500">วัน-เวลา ที่สร้าง</span>
                                                <v-spacer></v-spacer>
                                                <span>15/7/2565 15:30 </span>
                                            </div>
                                        </v-list-item-title>
                                    </v-list-item>
                                      <v-list-item>
                                        <v-list-item-title class="w-300px">
                                            <div class="flex w-full">
                                                <span class="text-gray-500">ผู้แก้ไข</span>
                                                <v-spacer></v-spacer>
                                                <span>นัฐพล สะอาดตา </span>
                                            </div>
                                        </v-list-item-title>
                                    </v-list-item>
                                      <v-list-item>
                                        <v-list-item-title class="w-300px">
                                            <div class="flex w-full">
                                                <span class="text-gray-500">วัน-เวลา ที่แก้ไข</span>
                                                <v-spacer></v-spacer>
                                                <span>20/7/2565 15:30</span>
                                            </div>
                                        </v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
</template>

<script>
export default {

}
</script>

<style>

</style>