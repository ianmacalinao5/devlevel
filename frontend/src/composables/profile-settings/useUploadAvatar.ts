import { ref } from "vue";
import { toast } from "vue-sonner";
import { useAuthStore } from "@/stores/useAuthStore";
import * as profileService from "@/services/profile";

export function useUploadAvatar() {
    const preview = ref<string | null>(null);
    const file = ref<File | null>(null);
    const isUploading = ref(false);

    const authStore = useAuthStore();

    function handleFileChange(event: Event) {
        const input = event.target as HTMLInputElement;
        const selected = input.files?.[0];

        if (!selected) return;

        const maxSize = 5 * 1024 * 1024;

        if (!selected.type.startsWith("image/")) {
            toast.error("Only image files are allowed.");
            return;
        }

        if (selected.size > maxSize) {
            toast.error("File must be less than 5MB.");
            return;
        }

        if (preview.value) {
            URL.revokeObjectURL(preview.value);
        }

        file.value = selected;
        preview.value = URL.createObjectURL(selected);
    }

    async function uploadAvatar() {
        if (!file.value) return;

        try {
            isUploading.value = true;

            const formData = new FormData();
            formData.append("avatar", file.value);

            const res = await profileService.updateAvatar(formData);

            // update global auth user
            authStore.updateUser({
                avatar: res.avatar,
            });

            toast.success("Avatar updated successfully");

            reset();
        } catch (error) {
            toast.error("Failed to update avatar");
        } finally {
            isUploading.value = false;
        }
    }

    function reset() {
        if (preview.value) {
            URL.revokeObjectURL(preview.value);
        }

        preview.value = null;
        file.value = null;
    }

    return {
        preview,
        file,
        isUploading,
        handleFileChange,
        uploadAvatar,
        reset,
    };
}
