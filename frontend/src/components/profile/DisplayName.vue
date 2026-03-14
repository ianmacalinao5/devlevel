<script setup lang="ts">
import Card from "../ui/card/Card.vue";
import CardFooter from "../ui/card/CardFooter.vue";
import Input from "../ui/input/Input.vue";
import Button from "../ui/button/Button.vue";
import { useUpdateName } from "@/composables/profile-settings/useUpdateName";

const { newName, newNameError, isSaving, errorClass, updateNewName } =
    useUpdateName();
</script>

<template>
    <Card class="p-0 overflow-hidden shadow-none rounded mt-5 gap-0">
        <div class="px-5 py-4">
            <div class="flex items-start flex-col justify-between gap-5">
                <div class="space-y-1 max-w-sm">
                    <h2 class="text-lg font-semibold">Display Name</h2>
                    <p class="text-sm text-muted-foreground">
                        Update your new name.
                    </p>
                </div>

                <div class="space-y-2 w-full">
                    <Input
                        id="name"
                        type="text"
                        v-model="newName"
                        class="py-5 max-w-sm"
                        :class="newNameError ? errorClass : 'outline'"
                    />
                    <p v-if="newNameError" class="text-red-500 text-sm">
                        {{ newNameError }}
                    </p>
                </div>
            </div>
        </div>

        <CardFooter
            class="flex items-center justify-between border-t px-5 py-3!"
        >
            <p class="text-sm text-muted-foreground">
                Name should not contain numbers.
            </p>

            <Button
                :disabled="isSaving"
                @click="updateNewName"
                variant="emerald"
            >
                {{ isSaving ? "Saving..." : "Save Changes" }}
            </Button>
        </CardFooter>
    </Card>
</template>
