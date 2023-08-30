<script setup lang="ts">
import { ref } from 'vue'

const json_fields = ref({
  id: "#",
  name: "Complete name",
  city: "City",
  country: "Country",
  birthdate: "Birth Date",
  phone: "Telephone",
})
const json_data = ref([
  {
    id: 1,
    name: "Tony Peña",
    city: "New York",
    country: "United States",
    birthdate: "1978-03-15",
    phone:
      "1-541-754-3010",

  },
  {
    id: 2,
    name: "Thessaloniki",
    city: "Athens",
    country: "Greece",
    birthdate: "1987-11-23",
    phone: "+1 855 275 5071"
  },
])
const json_meta = ref([
  [
    {
      key: "charset",
      value: "utf-8",
    },
  ],
])



</script>
<template>
  <table>
    <thead>
      <tr>
        <th v-for="field in json_fields" :key="field">{{ field }}</th>
      </tr>
      head uchun ishlatilgan dieldlarni teskari tartibda olarkan faqar keyin buni importida sal boshqacha boldi ctrl+z qilib korsangiz ham boaldi shu kodni olib qoying avval bopti men uxladim
    </thead>
    <tbody>
      <tr>
        <template v-for="item in json_data" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.city }}</td>
          <td>{{ item.country }}</td>
          <td>{{ item.birthdate }}</td>
          <td>{{ item.phone }}</td>
        </template>
      </tr>
    </tbody>
  </table>
  <download-excel
    class="w-36 cursor-pointer text-center border rounded-lg px-2.5 py-2 border-blue-500 active:border-blue-800"
    :meta="json_meta" :data="json_data" :fields="json_fields" worksheet="My Worksheet" name="filename.xls">
    Download
  </download-excel>
</template>
