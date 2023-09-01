import api from "@/api/axios";
import { IUser } from "@/types/user";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

// composition API store style
export const useUsersStore = defineStore("user", () => {
    // state
    const user = ref<IUser>();
    const users = ref<IUser[]>([]);

    //   getters
    const getUsers = computed(() => { return users.value });

    //   actions

    // get all users
    async function fetchUsers(page: number) {
        try {
            const res = await api.get('/users', {
                params: {
                    page
                }
            })
            users.value = res.data
            return users.value
        } catch (error) {
            console.log({ error });

        }
    }

    function getUserById(id: number) {
        return users.value.find(user => user.id ===  id);
    }
    
    // create user
    async function createUser(user: object) {
        try {
            const res = await api.post('/users', {
                ...user
            })
            console.log({ res });

        } catch (error) {
            console.log({ error });

        }
    }

    // fetch user(one)
    async function fetchUser(id: number) {
        try {
            const res = await api.get(`/users/${id}`)
            user.value = res.data
        } catch (error) {
            console.log({ error });

        }
    }

    // edit user
    async function editUser(id: number, data: Record<string, string | number>) {
        try {
            console.log(data);  
            const formdata = new FormData();
            for (let item in Object.entries(data)) {
                formdata.append(item[0], item[1]    );
            }
            const res: any = await api.put(`/users/${id}`)
            user.value = res
        } catch (error) {
            console.log({ error });

        }
    }

    // user delete
    async function deleteUser(id: number) {
        try {
            const res: any = await api.delete(`/users/${id}`)
            console.log({ res });

        } catch (error) {
            console.log({ error });

        }
    }

    return { users, getUsers, getUserById,  fetchUsers, createUser, fetchUser, editUser, deleteUser };
});




// options API store style
// export const useMainStore = defineStore("main", {
//   state: () => ({
//     count: 0,
//     name: "Eduardo",
//   }),
//   getters: {
//     doubleCount: (state) => state.count * 2,
//   },
//   actions: {
//     increment() {
//       this.count++;
//     },
//   },
// });

// note

// In Setup Stores:

// ref()s become state properties
// computed()s become getters
// function()s become actions
