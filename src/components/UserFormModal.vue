<script setup lang="ts">
import { ref } from 'vue';
import { IModalProps } from "@/types/modal"
import { useUsersStore } from '@/store/userStore';
const userStore = useUsersStore()
const formData = ref({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    birthDate: '',
    passportSeriaNumber: '',
    region: '',
    district: '',
    address: '',
})

withDefaults(defineProps<IModalProps>(), {
    openModal: false,
})
const emit = defineEmits<{
    (e: 'update:openModal', openModal: boolean): void
}>()

// functions
function closeModal() {
    emit("update:openModal", false)
}
async function create() {
    await userStore.createUser(formData.value)
    closeModal()
}
</script>
<template>
    <form v-if="openModal" class="relative z-10" @submit.pevent="create">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div class="fixed inset-0 z-10 overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div
                    class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div>
                            <h2 class="text-3xl">User form modal</h2>
                            <label for="firstname"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First
                                name </label>
                            <input type="firstname" name="firstname" id="firstname" v-model="formData.firstName"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="First name" required>
                        </div>
                        <div>
                            <label for="lastname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last
                                name </label>
                            <input type="lastname" name="lastname" id="lastname" v-model="formData.lastName"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="Last name" required>
                        </div>
                        <div>
                            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone
                                number</label>
                            <input type="text" name="phone" id="phone" v-model="formData.phoneNumber"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="+998AAbbbCCdd" required>
                        </div>
                        <div>
                            <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Birth
                                date</label>
                            <input type="text" name="text" id="text" v-model="formData.birthDate"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="01.01.2023" required>
                        </div>
                        <div>
                            <label for="passportserianumber"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Passport seria
                                number</label>
                            <input type="passportserianumber" name="passportserianumber" id="passportserianumber"
                                v-model="formData.passportSeriaNumber"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="AA1234567" required>
                        </div>
                        <div>
                            <label for="region" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                Region</label>
                            <input type="region" name="region" id="region" v-model="formData.region"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="Your region" required>
                        </div>
                        <div>
                            <label for="district" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                District</label>
                            <input type="district" name="district" id="district" v-model="formData.district"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="Your district" required>
                        </div>
                        <div>
                            <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                Address</label>
                            <input type="text" name="address" id="address" v-model="formData.address"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="Your address" required>
                        </div>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 gap-4">
                        <button type="button"
                            class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                            @click="closeModal">Close</button>
                        <button type="submit"
                            class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>