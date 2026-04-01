<script setup lang="ts">
import { useTemplateRef } from "vue";
import { makeDraggable } from "@vue-dnd-kit/core";

const props = defineProps<{
    id: string;
    title: string;
}>();

const itemRef = useTemplateRef<HTMLElement>("itemRef");

makeDraggable(itemRef, {
    dragHandle: ".handle",
    data: () => props.id,
});
</script>

<template>
    <div ref="itemRef" tabindex="0" class="p-3 bg-white border rounded shadow">
        <span class="handle cursor-grab mr-2">⋮⋮</span>
        {{ title }}
    </div>
</template>
