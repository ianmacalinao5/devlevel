<script setup lang="ts">
import { computed } from "vue";
import Card from "../ui/card/Card.vue";
import CardFooter from "../ui/card/CardFooter.vue";
import Input from "../ui/input/Input.vue";
import Button from "../ui/button/Button.vue";
import { useUploadAvatar } from "@/composables/profile-settings/useUploadAvatar";
import { useAuthStore } from "@/stores/useAuthStore";
import { useAssetUrl } from "@/composables/useAssetUrl";
const { preview, handleFileChange, uploadAvatar, isUploading } =
    useUploadAvatar();

const authStore = useAuthStore();

const avatarSrc = computed(() => {
    if (preview.value) return preview.value;

    if (authStore.user?.avatar) {
        return useAssetUrl(authStore.user.avatar);
    }

    return null;
});

const initials = computed(() => {
    const name = authStore.user?.name;
    if (!name) return "";

    return name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();
});
</script>

<template>
    <Card class="p-0 overflow-hidden shadow-none rounded mt-5 gap-0">
        <div class="px-5 py-4">
            <div class="flex items-start justify-between gap-2">
                <div class="space-y-1 max-w-sm">
                    <h2 class="text-lg font-semibold">Avatar</h2>
                    <p class="text-sm text-muted-foreground">
                        Upload a new avatar for your account.
                    </p>
                    <p class="text-sm text-muted-foreground">
                        Click the image to update it.
                    </p>
                </div>

                <label for="picture" class="group cursor-pointer">
                    <div
                        class="relative w-24 h-24 rounded-full overflow-hidden border bg-muted transition hover:ring-2 hover:ring-primary/40"
                    >
                        <img
                            v-if="avatarSrc"
                            :src="avatarSrc"
                            class="w-full h-full object-cover"
                        />

                        <div
                            v-else
                            class="flex items-center justify-center w-full h-full text-sm font-semibold text-muted-foreground"
                        >
                            {{ initials }}
                        </div>

                        <div
                            class="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition"
                        >
                            <span class="text-white text-xs font-medium">
                                Change
                            </span>
                        </div>
                    </div>
                </label>

                <Input
                    id="picture"
                    type="file"
                    class="hidden"
                    accept="image/*"
                    @change="handleFileChange"
                />
            </div>
        </div>

        <CardFooter class="flex items-center justify-between border px-5 py-3">
            <p class="text-sm text-muted-foreground">Maximum file size: 5MB.</p>

            <Button
                :disabled="!preview || isUploading"
                @click="uploadAvatar"
                variant="emerald"
            >
                {{ isUploading ? "Saving..." : "Save Changes" }}
            </Button>
        </CardFooter>
    </Card>
</template>
