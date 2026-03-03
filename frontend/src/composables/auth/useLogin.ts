import { ref } from "vue";

export function useLogin() {
    const email = ref("");
    const password = ref("");
    const emailError = ref("");
    const passwordError = ref("");
    const showPassword = ref(false);
    const errorClass =
        "border-red-500 focus-visible:ring-red-500/50 focus-visible:ring-[3px] focus-visible:border-red-500";

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

    function login() {
        const isValid = validate();

        if (!isValid) return;

        if (
            email.value === "hello@example.com" &&
            password.value === "password"
        ) {
            alert("Login successful!");
            email.value = "";
            password.value = "";
        } else {
            alert("Invalid email or password.");
        }
    }

    return {
        email,
        password,
        emailError,
        passwordError,
        errorClass,
        showPassword,
        togglePasswordVisibility,
        login,
    };
}
