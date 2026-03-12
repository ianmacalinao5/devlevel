export const useAssetUrl = (path: string) => {
    return `${import.meta.env.VITE_PUBLIC_URL}/storage/${path}`;
};
