<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useUsersStore } from '@/store/userStore'
import UserTable from '@/components/UserTable.vue';
import UserFormModal from '@/components/UserFormModal.vue';
const userStore = useUsersStore()
const openModal = ref(false)



const json_fields = ref({
  id: "#",
  firstName: "Firstname",
  lastName: "lastName",
  phoneNumber: "phoneNumber",
  birthdate: "Birth Date",
  passportSeriaNumber: "passportSeriaNumber",
  region: "region",
  district: "district",
  address: "address",
})
const json_meta = ref([
  [
    {
      key: "charset",
      value: "utf-8",
    },
  ],
])



// functions
async function fetchData(page: number = 1) {
  await userStore.fetchUsers(page)
};

function toggleModal() {
  openModal.value = !openModal.value
}

// hooks
onMounted(async () => {
  await fetchData()
})

</script>
<template>
  <div class="p-10 sm:ml-5">
    <div class="flex items-center gap-3 mb-3">
      <button @click="toggleModal"
        class="w-36 cursor-pointer text-center border rounded-lg px-2.5 py-2 border-blue-500 active:border-blue-800"
        style="margin-left:auto;">
        Create
      </button>
      <download-excel
        class="w-36 cursor-pointer text-center border rounded-lg px-2.5 py-2 border-blue-500 active:border-blue-800"
        :meta="json_meta" :data="userStore.getUsers" :fields="json_fields" worksheet="My Worksheet" name="filename.xls">
        Download
      </download-excel>
    </div>
    <UserTable :fields="json_fields" :data="userStore.getUsers" />
  </div>
  <UserFormModal v-model:open-modal="openModal" />
</template>
