<script setup lang="ts">
import Skeleton from "./ui/skeleton/Skeleton.vue";
</script>

<template>
    <div class="flex h-screen w-screen">
        <div class="flex w-64 flex-col gap-4 border-r p-4">
            <Skeleton class="h-8 w-32" />
            <div class="mt-4 flex flex-col gap-2">
                <Skeleton class="h-9 w-full" />
                <Skeleton class="h-9 w-full" />
                <Skeleton class="h-9 w-full" />
                <Skeleton class="h-9 w-3/4" />
            </div>
        </div>

        <div class="flex flex-1 flex-col gap-6 p-8">
            <Skeleton class="h-8 w-48" />
            <div class="grid grid-cols-3 gap-4">
                <Skeleton class="h-28 w-full rounded-xl" />
                <Skeleton class="h-28 w-full rounded-xl" />
                <Skeleton class="h-28 w-full rounded-xl" />
            </div>
            <Skeleton class="h-64 w-full rounded-xl" />
        </div>
    </div>
</template>
