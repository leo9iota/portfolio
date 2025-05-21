export { };

declare global {
    // Text Components
    interface TextColor {
        txt: String,
        mark?: boolean
    }

    // Language
    interface LanguageController {
        $: LanguagePackage;
        list: LanguagePackages;
    }
    interface LanguagePackages {
        en: LanguagePackage;
    }
    interface LanguagePackage {
        title: Array<TextColor>;
        mywork: {
            title: Array<TextColor>;
            list: Array<Hobby>;
        }
        canCode: {
            title: Array<TextColor>;
            langs: Array<ProgrammingLanguage>;
        }
        canFramework: {
            title: Array<TextColor>;
            langs: Array<ProgrammingLanguage>;
        }
    }
    interface Hobby {
        txt: Array<TextColor>
        img: File
    }

    // Others
    interface ProgrammingLanguage {
        name: String;
        icon: File;
        experience: Array<TextColor>;
        teaching: Array<TextColor>;
        color: String;
    }
}