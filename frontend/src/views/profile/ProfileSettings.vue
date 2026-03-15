<script setup lang="ts">
import Avatar from "@/components/profile/Avatar.vue";
import DeleteAccount from "@/components/profile/DeleteAccount.vue";
import DisplayName from "@/components/profile/DisplayName.vue";
import ThemeSwitch from "@/components/ThemeSwitch.vue";
</script>

<template>
    <div class="flex items-center justify-between mb-6">
        <div>
            <h1 class="text-xl font-semibold">Profile Settings</h1>
            <p class="text-sm text-muted-foreground">
                Manage your account preferences
            </p>
        </div>
        <ThemeSwitch />
    </div>

    <Avatar />
    <DisplayName />
    <DeleteAccount />
</template>
