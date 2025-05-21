
import { transform } from '@babel/core';

<template>
    <div class="screen_container">
        <div :class="`frame mywork ${hideClassBetween(windowPosition, mywork_start, mywork_end, 'hidden')}`">
            <h2 class="title">
                <TextItems :texts="lang.$.mywork.title" />
            </h2>
            <ul :style="{ transform: `translateY(${percentageTranslateFocus(windowPosition, mywork_start, mywork_end, step, 1, 70)}%)`, }">
                <li v-for="(mywork_item, i) in lang.$.mywork.list" :key="i"
                    :class="`${showClassBetween(windowPosition, (((1 + i) * step) + mywork_start), (((2 + i) * step) + mywork_start), 'mark')}`">
                    <TextItems :texts="mywork_item.txt" />
                </li>
            </ul>
            <div class="loadingBar"
                :style="{ width: `${percentageSteps(windowPosition, mywork_start, mywork_end, step)}%` }"></div>
            <div class="images">
                <img v-for="(mywork_item, i) in lang.$.mywork.list" :key="i" :src="mywork_item.img"
                    :alt="mywork_item.txt"
                    :class="`img ${hideClassBetween(windowPosition, (((1 + i) * step) + mywork_start), (((2 + i) * step) + mywork_start), 'hidden')}`">
            </div>
        </div>
        <div :class="`frame canCode ${hideClassBetween(windowPosition, canCode_start, canCode_end, 'hidden')}`">
            <h2 class="title">
                <TextItems :texts="lang.$.canCode.title" />
                <p></p>
            </h2>
            <ul
                :style="{ transform: `translateY(${percentageTranslateFocus(windowPosition, canCode_start, canCode_end, step, 1, 15)}%)`, }">
                <li v-for="(lang, i) in lang.$.canCode.langs" :key="i">
                    <!-- Icon -->
                    <img v-if="lang.icon"
                        :class="`image ${showClassBetween(windowPosition, (((i + 1) * step) + canCode_start), (((i + 2) * step) + canCode_start), 'mark')}`"
                        :src="lang.icon" :alt="lang.name" :style="{ background: lang.color, }">
                    <div v-if="!lang.icon"
                        :class="`iconBox ${showClassBetween(windowPosition, (((i + 1) * step) + canCode_start), (((i + 2) * step) + canCode_start), 'mark')}`"
                        :style="{ background: lang.color, }">
                        {{ lang.name }}
                    </div>
                    <!-- Description -->
                    <div
                        :class="`desc ${showClassBetween(windowPosition, (((i + 1) * step) + canCode_start), (((i + 2) * step) + canCode_start), 'mark')}`">
                        <p class="teaching">
                            <TextItems :texts="lang.teaching" />
                        </p>
                        <p class="experience">
                            <TextItems :texts="lang.experience" />
                        </p>
                    </div>
                </li>
            </ul>
            <div class="loadingBar"
                :style="{ width: `${percentageSteps(windowPosition, canCode_start, canCode_end, step)}%` }">
            </div>
            <div class="codeNames">
                <div :class="`codeName ${hideClassBetween(windowPosition, (((i + 1) * step) + canCode_start), (((i + 2) * step) + canCode_start), 'hidden')}`"
                    v-for="(lang, i) in lang.$.canCode.langs" :key="i">{{ lang.name }}</div>
            </div>
        </div>
        <div
            :class="`frame canFramework ${hideClassBetween(windowPosition, canFramework_start, canFramework_end, 'hidden')}`">
            <h2 class="title">
                <TextItems :texts="lang.$.canFramework.title" />
            </h2>
            <ul
                :style="{ transform: `translateY(${percentageTranslateFocus(windowPosition, canFramework_start, canFramework_end, step, 1, 0)}%)`, }">
                <li v-for="(lang, i) in lang.$.canFramework.langs" :key="i">
                    <!-- Icon -->
                    <img v-if="lang.icon"
                        :class="`image ${showClassBetween(windowPosition, (((i + 1) * step) + canFramework_start), (((i + 2) * step) + canFramework_start), 'mark')}`"
                        :src="lang.icon" :alt="lang.name" :style="{ background: lang.color, }">
                    <div v-if="!lang.icon"
                        :class="`iconBox ${showClassBetween(windowPosition, (((i + 1) * step) + canFramework_start), (((i + 2) * step) + canFramework_start), 'mark')}`"
                        :style="{ background: lang.color, }">
                        {{ lang.name }}
                    </div>
                    <!-- Description -->
                    <div
                        :class="`desc ${showClassBetween(windowPosition, (((i + 1) * step) + canFramework_start), (((i + 2) * step) + canFramework_start), 'mark')}`">
                        <p class="teaching">
                            <TextItems :texts="lang.teaching" />
                        </p>
                        <p class="experience">
                            <TextItems :texts="lang.experience" />
                        </p>
                    </div>
                </li>
            </ul>
            <div class="loadingBar"
                :style="{ width: `${percentageSteps(windowPosition, canFramework_start, canFramework_end, step)}%` }">
            </div>
            <div class="codeNames">
                <div :class="`codeName ${hideClassBetween(windowPosition, (((i + 1) * step) + canFramework_start), (((i + 2) * step) + canFramework_start), 'hidden')}`"
                    v-for="(lang, i) in lang.$.canFramework.langs" :key="i">{{ lang.name }}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '@/scss/var' as var;

.screen_container {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    color: var.$white;

    >.frame {
        padding: var.$space calc(var.$space * 2);
        position: absolute;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        transition: var.$ani_slow ease;
        transform: translate(0%, 0%);

        &.hidden {
            transform: translate(0%, 50%);
        }

        >.loadingBar {
            position: absolute;
            bottom: 10px;
            left: 0px;
            width: 0%;
            height: 5px;
            background-color: var.$highlight_light;
            box-shadow: 0px 0px 15px 0px var.$highlight;
            transition: var.$ani ease;
        }
    }

    >.mywork {
        >.title {
            color: var.$highlight_light;
            font-size: var.$font_size;
            z-index: 3;
        }

        >ul {
            display: flex;
            flex-direction: column;
            list-style-type: none;
            z-index: 3;
            transition: var.$ani ease;

            >li {
                color: var.$blue_light;
                transition: var.$ani;

                &.mark {
                    color: var.$white;
                }
            }
        }

        >.images {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: -1;

            >img {
                filter: saturate(0);
                opacity: .4;
                position: absolute;
                right: 0;
                top: 50%;
                width: 50%;
                transform: translateY(-50%);
                transition: var.$ani;

                &.hidden {
                    opacity: 0;
                }
            }
        }
    }

    >.canCode,
    >.canFramework {
        height: 100%;

        >.title {
            color: var.$highlight_light;
            font-size: var.$font_size;
            position: relative;
            z-index: 2;
        }

        >ul {
            padding: var.$space 0;
            display: flex;
            flex-direction: column;
            list-style-type: none;
            z-index: 3;
            transition: var.$ani ease;

            >li {
                color: var.$blue_light;
                transition: var.$ani;
                display: flex;
                align-items: center;

                >.image {
                    box-sizing: content-box;
                    width: calc(var.$space / 1.5);
                    padding: calc(var.$space / 3);
                    border-radius: .5rem;
                    transition: var.$ani;
                    filter: brightness(.2);

                    &.mark {
                        filter: brightness(1);
                    }
                }

                >.iconBox {
                    display: flex;
                    justify-content: center;
                    box-sizing: content-box;
                    height: calc(var.$space / 1.5);
                    padding: calc(var.$space / 3);
                    border-radius: .5rem;
                    font-size: var.$font_size_small;
                    filter: brightness(.2);
                    color: #000;

                    &.mark {
                        filter: brightness(1);
                    }
                }

                >.desc {
                    padding: calc(var.$space / 2);
                    filter: brightness(.2);
                    transition: var.$ani;

                    &.mark {
                        filter: brightness(1);
                    }

                    >.teaching,
                    >.experience {
                        font-size: var.$font_size;
                    }
                }
            }
        }

        >.codeNames {
            z-index: 1;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;

            >.codeName {
                position: absolute;
                right: var.$space;
                bottom: var.$space;
                font-size: var.$font_size_baba;
            }
        }
    }
}

.hidden {
    opacity: 0;
}

@media only screen and (max-width: 1300px) {
    .screen_container {

        >.canCode,
        >.canFramework {
            >ul {
                flex-direction: row;
                flex-wrap: wrap;
            }
        }
    }
}
</style>

<script src="@/script/components/LaptopScreen.ts"></script>