<script setup lang="ts">
import { computed } from "vue";

const currentYear = computed(() => new Date().getFullYear());
</script>

<template>
    <footer class="border-t p-4 text-center text-sm mt-10">
        © {{ currentYear }} DevLevel. All rights reserved.
    </footer>
</template>
