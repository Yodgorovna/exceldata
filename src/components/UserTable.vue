<script setup lang="ts">
import IconDelete from './icons/IconDelete.vue';
import IconEdit from './icons/IconEdit.vue';
defineProps(["fields", "data"])
const emit = defineEmits<{
    (e: 'setUser', data: object): void
    (e: 'openDeleteModal'): void
}>()

//functions
function openDelete() {
    emit('openDeleteModal')
}

function sendUser(user: object) {
    console.log({user});
    
    emit('setUser', user)
}


</script>
<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3" v-for="field in fields">
                        {{ field }}
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700" v-for="user in data" :key="user.id">
                    <td class="px-6 py-3"> {{ user.id }}</td>
                    <td class="px-6 py-3"> {{ user.firstName }}</td>
                    <td class="px-6 py-3"> {{ user.lastName }}</td>
                    <td class="px-6 py-3"> {{ user.phoneNumber }}</td>
                    <td class="px-6 py-3"> {{ user.birthDate.substring(0, 10) }} </td>
                    <td class="px-6 py-3"> {{ user.passportSeriaNumber }}</td>
                    <td class="px-6 py-3"> {{ user.region }}</td>
                    <td class="px-6 py-3"> {{ user.district }}</td>
                    <td class="px-6 py-3"> {{ user.address }}</td>
                    <td class="px-6 py-4">
                        <button type="button" @click="sendUser(user)"
                            class="w-12 cursor-pointer text-center border rounded-lg px-2.5 py-2 border-blue-500 active:border-blue-800"
                            style="margin-left:auto;">
                            <IconEdit />
                        </button>
                        <button type="button"
                            class="w-12 cursor-pointer text-center border rounded-lg px-2.5 py-2 border-blue-500 active:border-blue-800"
                            style="margin-left:auto;" @click="openDelete">
                            <IconDelete />
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>