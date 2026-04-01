<script setup lang="ts">
import { ref } from "vue";
import { DnDProvider } from "@vue-dnd-kit/core";
import Column from "@/components/tasks/Column.vue";
import TaskCard from "@/components/tasks/TaskCard.vue";
import type { IDragEvent } from "@vue-dnd-kit/core";

type ColumnId = "backlog" | "todo" | "progress" | "done";

interface Task {
    id: string;
    title: string;
}

const tasks: Task[] = [
    { id: "1", title: "Setup project" },
    { id: "2", title: "Design login UI" },
    { id: "3", title: "Build auth API" },
];

const taskColumn = ref<Record<string, ColumnId>>({
    "1": "backlog",
    "2": "todo",
    "3": "progress",
});

function tasksIn(column: ColumnId) {
    return tasks.filter((t) => taskColumn.value[t.id] === column);
}

function handleDrop(column: ColumnId, e: IDragEvent) {
    const id = e.draggedItems[0]?.data as string | undefined;

    if (id) {
        taskColumn.value[id] = column;
    }
}
</script>

<template>
    <h1 class="text-xl xl:text-2xl">Tasks</h1>

    <DnDProvider>
        <div class="flex gap-6 mt-6">
            <Column title="Backlog" @drop="handleDrop('backlog', $event)">
                <TaskCard
                    v-for="task in tasksIn('backlog')"
                    :key="task.id"
                    :id="task.id"
                    :title="task.title"
                />
            </Column>

            <Column title="Todo" @drop="handleDrop('todo', $event)">
                <TaskCard
                    v-for="task in tasksIn('todo')"
                    :key="task.id"
                    :id="task.id"
                    :title="task.title"
                />
            </Column>

            <Column title="In Progress" @drop="handleDrop('progress', $event)">
                <TaskCard
                    v-for="task in tasksIn('progress')"
                    :key="task.id"
                    :id="task.id"
                    :title="task.title"
                />
            </Column>

            <Column title="Done" @drop="handleDrop('done', $event)">
                <TaskCard
                    v-for="task in tasksIn('done')"
                    :key="task.id"
                    :id="task.id"
                    :title="task.title"
                />
            </Column>
        </div>
    </DnDProvider>
</template>
