<template>
    <span>
        <span v-for="(text_item, i) in texts" :key="i">
            <TextColor :value="text_item" />
        </span>
    </span>
</template>

<script lang="ts" src="@/script/components/TextItems.ts"></script>
