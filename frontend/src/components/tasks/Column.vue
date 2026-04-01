<script setup lang="ts">
import { useTemplateRef } from "vue";
import { makeDroppable } from "@vue-dnd-kit/core";
import type { IDragEvent } from "@vue-dnd-kit/core";

const props = defineProps<{
    title: string;
}>();

const emit = defineEmits<{
    (e: "drop", event: IDragEvent): void;
}>();

const zoneRef = useTemplateRef<HTMLElement>("zoneRef");

makeDroppable(zoneRef, {
    events: {
        onDrop: (event) => emit("drop", event),
    },
});
</script>

<template>
    <div class="w-64 bg-gray-100 rounded p-3 flex flex-col gap-3">
        <h2 class="font-semibold">{{ title }}</h2>

        <div ref="zoneRef" class="flex flex-col gap-2 min-h-[150px]">
            <slot />
        </div>
    </div>
</template>
