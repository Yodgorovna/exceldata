<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useUsersStore } from '@/store/userStore'
import UserTable from '@/components/UserTable.vue';
import UserFormModal from '@/components/UserFormModal.vue';
import EditModal from '@/components/EditModal.vue';
import deletemodal from '@/components/DeleteModal.vue';
import { IUser } from '@/types/user';
const userStore = useUsersStore()
const openModal = ref(false)
const show_delete_modal = ref(false)
const showEdit = ref(false)

const user = ref<IUser>()
const delete_id = ref<number>()

const json_fields = ref({
  id: "id",
  firstName: "firstName",
  lastName: "lastName",
  phoneNumber: "phoneNumber",
  birthdate: "birthDate",
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

function editHandler(arg: IUser) {
  console.log(arg);
  showEdit.value = true;
  user.value = arg;
}

function deleteHandler(id: number) {
  delete_id.value = id;
  show_delete_modal.value = true;
}

watch(showEdit, (val) => {
  console.log(val);
})

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
    <UserTable :fields="json_fields" :data="userStore.getUsers" @openDeleteModal="deleteHandler" @edit="editHandler" />
  </div>
  <EditModal v-model:open-modal="showEdit" :user="user" />
  <UserFormModal v-model:open-modal="openModal" />
  <deletemodal v-model:open-modal="show_delete_modal" :id="delete_id" />
</template>
