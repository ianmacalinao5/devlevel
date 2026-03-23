import { ref } from "vue";
import * as authService from "@/services/auth";
import { toast } from "vue-sonner";

export function useForgotPassword() {
    const email = ref("");
    const emailError = ref("");
    const loading = ref(false);

    const errorClass =
        "border-red-500 focus-visible:ring-red-500/50 focus-visible:ring-[3px] focus-visible:border-red-500";

    function validate() {
        emailError.value = "";

        let isValid = true;

        if (!email.value) {
            emailError.value = "Email is required.";
            isValid = false;
        } else if (!email.value.includes("@")) {
            emailError.value = "Please enter a valid email address.";
            isValid = false;
        }

        return isValid;
    }

    async function sendResetLink() {
        const isValid = validate();
        if (!isValid) return;

        loading.value = true;

        try {
            await authService.forgotPassword(email.value);

            toast.success("Password reset link sent to your email.");

            email.value = "";
        } catch (error: any) {
            const message =
                error.response?.data?.errors?.email?.[0] ||
                error.response?.data?.message ||
                "Failed to send reset link";

            toast.error(message);
        } finally {
            loading.value = false;
        }
    }

    return {
        email,
        emailError,
        errorClass,
        loading,
        sendResetLink,
    };
}
