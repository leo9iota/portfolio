<template>
    <div class="laptop">
        <div class="img">
            <img class="hidden" src="@/static/imgs/laptop.webp" alt="This is a Laptop" @load="laptopImageLoaded()"/>
            <div :class="`screen ${showClassBetween(windowPosition, -100, 600, 'hidden')}`">
                <LaptopScreen :windowPosition="windowPosition"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '@/scss/var' as var;

.laptop{
    position: relative;
    top: 0%;
    display: flex;
    justify-content: center;
    width: 100%;
    padding: var.$space;
    > .img{
        position: relative;
        width: 30vw;
        height: calc(30vw * calc(190 / 300));
        overflow: hidden;
        transition: var.$ani_slow ease;
        > img{
            position: relative;
            width: 100%;
            object-fit: contain;
            z-index: 2;
            pointer-events: none;
            transition: var.$ani_slow ease;
            &.hidden{
                opacity: 0;
                pointer-events: none;
            }
        }
        > .screen{
            background: var.$blue_dark;
            padding: 0 1rem 0 1rem;
            color: var.$white;
            position: absolute;
            left: 10%;
            top: 4%;
            width: 79%;
            height: 78%;
            font-size: 30pt;
            transition: var.$ani_slow ease;
            overflow: hidden;
            &.hidden{
                opacity: 0;
                pointer-events: none;
            }
        }
    }
    &.fix{
        position: fixed;
        > .img{
            width: 80vw;
            height: calc(80vw * calc(190 / 300));
        }
    }
    &.rel{
        position: relative;
    }
}
</style>

<script lang="ts" src="@/script/components/Laptop.ts"></script>