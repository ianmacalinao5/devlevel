import { ref } from "vue";
import * as authService from "@/services/auth";
import { toast } from "vue-sonner";

export function useSignup() {
    const name = ref("");
    const email = ref("");
    const password = ref("");
    const confirmPassword = ref("");
    const nameError = ref("");
    const emailError = ref("");
    const passwordError = ref("");
    const confirmPasswordError = ref("");
    const showPassword = ref(false);
    const showConfirmPassword = ref(false);
    const loading = ref(false);
    const errorClass =
        "border-red-500 focus-visible:ring-red-500/50 focus-visible:ring-[3px] focus-visible:border-red-500";

    function togglePasswordVisibility(field: "password" | "confirm") {
        if (field === "password") {
            showPassword.value = !showPassword.value;
        } else {
            showConfirmPassword.value = !showConfirmPassword.value;
        }
    }

    function validate() {
        nameError.value = "";
        emailError.value = "";
        passwordError.value = "";
        confirmPasswordError.value = "";

        let isValid = true;

        if (!name.value) {
            nameError.value = "Name is required.";
            isValid = false;
        } else if (/\d/.test(name.value)) {
            nameError.value = "Name cannot contain numbers.";
            isValid = false;
        }

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
        } else if (password.value.length < 8) {
            passwordError.value =
                "Password must be at least 8 characters long.";
            isValid = false;
        }

        if (!confirmPassword.value) {
            confirmPasswordError.value = "Please confirm your password.";
            isValid = false;
        } else if (password.value !== confirmPassword.value) {
            confirmPasswordError.value = "Passwords do not match";
            isValid = false;
        }

        return isValid;
    }

    async function signup() {
        const isValid = validate();

        if (!isValid) return;

        loading.value = true;

        try {
            await authService.signup(
                name.value,
                email.value,
                password.value,
                confirmPassword.value,
            );

            toast.success("Signup successful!");

            name.value = "";
            email.value = "";
            password.value = "";
            confirmPassword.value = "";
        } catch (error) {
            toast.error("Signup failed. Please try again.");
        } finally {
            loading.value = false;
        }
    }

    return {
        name,
        email,
        password,
        confirmPassword,
        nameError,
        emailError,
        passwordError,
        confirmPasswordError,
        errorClass,
        showPassword,
        showConfirmPassword,
        loading,
        togglePasswordVisibility,
        signup,
    };
}
