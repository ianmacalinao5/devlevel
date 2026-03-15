import { ref } from "vue";
import * as AuthService from "@/services/profile";
import { toast } from "vue-sonner";
import { useAuthStore } from "@/stores/useAuthStore";

export function useUpdateName() {
    const authStore = useAuthStore();

    const newName = ref(authStore.user?.name ?? "");
    const newNameError = ref("");
    const isSaving = ref(false);

    const errorClass =
        "border-red-500 focus-visible:ring-red-500/50 focus-visible:ring-[3px] focus-visible:border-red-500";

    function validate() {
        newNameError.value = "";
        let isValid = true;

        if (!newName.value) {
            newNameError.value = "Name is required.";
            isValid = false;
        } else if (/\d/.test(newName.value)) {
            newNameError.value = "Name cannot contain numbers.";
            isValid = false;
        } else if (authStore.user?.name === newName.value) {
            newNameError.value = "Name should not be the same as old.";
            isValid = false;
        }

        return isValid;
    }

    async function updateNewName() {
        const isValid = validate();
        if (!isValid) return;

        isSaving.value = true;

        try {
            const res = await AuthService.updateName(newName.value);
            authStore.updateUser({
                name: res.user.name,
            });
            toast.success(res.message);
        } catch (error: any) {
            toast.error(
                error?.response?.data?.message ?? "Something went wrong",
            );
        } finally {
            isSaving.value = false;
        }
    }

    return {
        newName,
        newNameError,
        isSaving,
        errorClass,
        updateNewName,
    };
}
