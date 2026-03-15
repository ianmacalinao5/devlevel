import { ref } from "vue";
import * as AuthService from "@/services/profile";
import { toast } from "vue-sonner";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/useAuthStore";

export function useDeleteAccount() {
    const isDeleting = ref(false);
    const router = useRouter();
    const authStore = useAuthStore();

    async function deleteAccount() {
        try {
            isDeleting.value = true;
            const res = await AuthService.deleteAccount();
            toast.success(res.data.message);
            await authStore.logout();
            await router.replace("/login");
        } catch (error: any) {
            toast.error(
                error?.response?.data?.message ?? "Something went wrong",
            );
        } finally {
            isDeleting.value = false;
        }
    }

    return { isDeleting, deleteAccount };
}
