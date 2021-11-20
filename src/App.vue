<template>
  <div>
    <div v-if="!currentUser">
      Set user:
      <form @submit.prevent="submit">
        <input v-model="name" />
        <button type="submit">Submit</button>
      </form>
    </div>
    <div v-else>
      <div>User:{{ currentUser }}</div>
      <button @click="removeUser">Remove</button>
    </div>
    <div>
      <router-view />
      <pre>{{ users }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import useUser from "@/composables/useUser";
import { ref } from "vue";

const { setUser, currentUser, users, removeUser } = useUser();
const name = ref("");
async function submit() {
  await setUser(name.value);
  name.value = "";
}
</script>
