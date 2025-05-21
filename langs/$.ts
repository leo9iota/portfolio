const langs: LanguagePackages = {
    en: require('@/langs/en').$
}

export const $: LanguageController = {
    $: langs.en,
    list: langs
};