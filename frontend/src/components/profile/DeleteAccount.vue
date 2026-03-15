<script setup lang="ts">
import Card from "../ui/card/Card.vue";
import CardFooter from "../ui/card/CardFooter.vue";
import Button from "../ui/button/Button.vue";

import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogCancel,
    AlertDialogAction,
} from "@/components/ui/alert-dialog";

import { useDeleteAccount } from "@/composables/profile-settings/useDeleteAccount";

const { isDeleting, deleteAccount } = useDeleteAccount();
</script>

<template>
    <Card class="p-0 overflow-hidden shadow-none rounded mt-5 gap-0 border">
        <div class="px-5 py-4">
            <div class="flex items-start flex-col justify-between gap-5">
                <div class="space-y-1 max-w-lg">
                    <h2 class="text-lg font-semibold">Delete Account</h2>
                    <p class="text-sm text-muted-foreground">
                        Deleting your account will permanently erase all your
                        data from our server.
                    </p>
                </div>
            </div>
        </div>

        <CardFooter class="flex items-center justify-end border-t px-5 py-3!">
            <AlertDialog>
                <AlertDialogTrigger as-child>
                    <Button variant="destructive"> Delete Account </Button>
                </AlertDialogTrigger>

                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete your account and remove your data from our
                            servers.
                        </AlertDialogDescription>
                    </AlertDialogHeader>

                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>

                        <AlertDialogAction
                            :disabled="isDeleting"
                            @click="deleteAccount"
                            class="bg-destructive text-white hover:bg-destructive/90"
                        >
                            {{
                                isDeleting
                                    ? "Deleting..."
                                    : "Yes, delete account"
                            }}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </CardFooter>
    </Card>
</template>
