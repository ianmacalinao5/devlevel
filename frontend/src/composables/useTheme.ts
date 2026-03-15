import { ref, watch } from "vue";

const isDark = ref(false);

function applyTheme(value: boolean) {
    document.documentElement.classList.toggle("dark", value);
}

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    isDark.value = true;
} else if (savedTheme === "light") {
    isDark.value = false;
} else {
    isDark.value = window.matchMedia("(prefers-color-scheme: dark)").matches;
}
applyTheme(isDark.value);

watch(isDark, (value) => {
    applyTheme(value);
    localStorage.setItem("theme", value ? "dark" : "light");
});

export function useTheme() {
    return { isDark };
}
