<template>
  <div>
    <div v-if="!user">
      Create user:
      <form @submit.prevent="submit">
        <input v-model="name" /><button type="submit">Submit</button>
      </form>
    </div>
    <div>
      <div>User:{{ user }}</div>
      <router-view />
    </div>
    {{ users }}
  </div>
</template>

<script setup lang="ts">
import useUser from "@/composables/useUser";
import { computed, ref } from "vue";
import { v4 as uuidv4 } from "uuid";

const { getUsers, users } = useUser();
getUsers();
var userId = computed(() => localStorage.getItem("filmin-scrum-poker-user-id"));
const user = computed(() => false);
const name = ref("");
function submit() {
  const uuid = uuidv4();
}
</script>
