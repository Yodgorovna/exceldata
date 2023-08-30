<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const route = useRoute()
const links = ref([
    {
        id: 0,
        to: '/',
        text: 'Home'
    },
    {
        id: 1,
        to: '/users',
        text: 'Users'
    }
])
</script>
<template>
    <header class="border shadow-lg py-4">
        <nav class="px-4">
            <ul class="flex justify-center gap-4">
                <li :class="route.path === link.to ? 'text-blue-600' : ''" v-for="link in links" :key="link.id">
                    <router-link :to="link.to">{{ link.text }}</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>
