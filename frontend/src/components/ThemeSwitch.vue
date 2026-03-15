<script setup lang="ts">
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/composables/useTheme";
import { Moon, Sun } from "lucide-vue-next";

const { isDark } = useTheme();
</script>

<template>
    <Switch v-model="isDark">
        <template #thumb="{ checked }">
            <Sun v-if="!checked" class="w-3 h-3 text-yellow-500" />
            <Moon v-else class="w-3 h-3 text-blue-400" />
        </template>
    </Switch>
</template>
