<template>
    <span>
        <span v-if="!mark">{{text}}</span>
        <span v-if="mark" class="mark">{{text}}</span>
    </span>
</template>

<style lang="scss" scoped>
@use '@/scss/var' as var;

.mark{
    color: var.$highlight_light;
    $num: 3;
    $content: '';
    @for $i from 0 to $num {
        $content: $content + '0px 0px 20px ' + var.$highlight;
        @if $i != ($num - 1) {
            $content: $content + ', ';
        }
    }
    text-shadow: #{$content};
}
</style>

<script lang="ts" src="@/script/components/TextColor.ts"></script>