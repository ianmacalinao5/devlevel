import { ref } from "vue";
import { useRouter } from "vue-router";
import * as authService from "@/services/auth";
import { toast } from "vue-sonner";
import { useAuthStore } from "@/stores/useAuthStore";

export function useLogin() {
    const email = ref("");
    const password = ref("");
    const emailError = ref("");
    const passwordError = ref("");
    const showPassword = ref(false);
    const loading = ref(false);

    const errorClass =
        "border-red-500 focus-visible:ring-red-500/50 focus-visible:ring-[3px] focus-visible:border-red-500";

    const router = useRouter();
    const authStore = useAuthStore();

    function togglePasswordVisibility() {
        showPassword.value = !showPassword.value;
    }

    function validate() {
        emailError.value = "";
        passwordError.value = "";

        let isValid = true;

        if (!email.value) {
            emailError.value = "Email is required.";
            isValid = false;
        } else if (!email.value.includes("@")) {
            emailError.value = "Please enter a valid email address.";
            isValid = false;
        }

        if (!password.value) {
            passwordError.value = "Password is required.";
            isValid = false;
        }

        return isValid;
    }

    async function login() {
        const isValid = validate();
        if (!isValid) return;

        loading.value = true;

        try {
            const data = await authService.login(email.value, password.value);
            console.log(data);
            authStore.setAuth(data);

            toast.success("Login successful");

            router.push("/dashboard");

            email.value = "";
            password.value = "";
        } catch (error: any) {
            const message =
                error.response?.data?.errors?.email?.[0] ||
                error.response?.data?.message ||
                "Login failed";

            toast.error(message);
        } finally {
            loading.value = false;
        }
    }

    return {
        email,
        password,
        emailError,
        passwordError,
        errorClass,
        showPassword,
        loading,
        togglePasswordVisibility,
        login,
    };
}
