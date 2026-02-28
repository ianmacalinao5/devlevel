<script setup lang="ts">
import { ref, onMounted } from "vue";
import api from "./services/api";

type User = {
    name: string;
    age: number;
};

const user = ref<User | null>(null);

onMounted(async () => {
    const res = await api.get<{ data: User }>("http://localhost:8000/api/user");
    user.value = res.data.data;
});
</script>

<template>
    <div v-if="user">{{ user.name }} - {{ user.age }}</div>
</template>
