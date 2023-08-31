<script setup lang="ts">
defineProps(["fields", "data"])
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
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>

                </tr>
            </tbody>
        </table>
    </div>
</template>