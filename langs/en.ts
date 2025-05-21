export const $: LanguagePackage = {
    title: [
        {txt: 'Hi', mark: true},
        {txt: ', my name is '},
        {txt: 'Léon', mark: true},
    ],
    mywork: {
        title: [
            {txt: 'In my spare time I love to ...', mark: true},
        ],
        list: [
            {
                txt: [
                    {txt: 'code on projects', mark: false},
                ],
                img: require('@/icons/github.svg'),
            },
            {
                txt: [
                    {txt: 'discover new technologies', mark: false},
                ],
                img: require('@/icons/technology.svg'),
            },
            {
                txt: [
                    {txt: 'go snowboarding', mark: false},
                ],
                img: require('@/icons/winter_olympics.svg'),
            },
            {
                txt: [
                    {txt: 'eat food', mark: false},
                ],
                img: require('@/icons/eat.svg'),
            },
        ],
    },
    canCode: {
        title: [
            {txt: 'I can code in ...', mark: true},
        ],
        langs: [
            {
                name: 'PHP',
                experience: [
                    {txt: 'Since '},
                    {txt: '2014', mark: true},
                ],
                teaching: [
                    {txt: 'Self-taught '},
                ],
                icon: require('@/icons/php.svg'),
                color: '#777BB4'
            },
            {
                name: 'JavaScript',
                experience: [
                    {txt: 'Since '},
                    {txt: '2017', mark: true},
                ],
                teaching: [
                    {txt: 'Self-taught & School'},
                ],
                icon: require('@/icons/javascript.svg'),
                color: '#F7DF1E'
            },
            {
                name: 'Java',
                experience: [
                    {txt: 'Since '},
                    {txt: '2018', mark: true},
                ],
                teaching: [
                    {txt: 'School'},
                ],
                icon: null,
                color: '#F7DF1E'
            },
            {
                name: 'Dart',
                experience: [
                    {txt: 'In '},
                    {txt: '2015', mark: true},
                ],
                teaching: [
                    {txt: 'Self-taught'},
                ],
                icon: require('@/icons/dart.svg'),
                color: '#0175C2'
            },
            {
                name: 'Go',
                experience: [
                    {txt: 'In '},
                    {txt: '2018', mark: true},
                ],
                teaching: [
                    {txt: 'Self-taught'},
                ],
                icon: require('@/icons/go.svg'),
                color: '#00ADD8'
            },
        ]
    },
    canFramework: {
        title: [
            {txt: 'Frameworks I worked with are ...', mark: true},
        ],
        langs: [
            {
                name: 'Laravel',
                experience: [
                    {txt: 'Since '},
                    {txt: '2014', mark: true},
                ],
                teaching: [
                    {txt: 'Self-taught '},
                ],
                icon: require('@/icons/laravel.svg'),
                color: '#FF2D20'
            },
            {
                name: 'Vue.js',
                experience: [
                    {txt: 'Since '},
                    {txt: '2020', mark: true},
                ],
                teaching: [
                    {txt: 'Self-taught '},
                ],
                icon: require('@/icons/vuedotjs.svg'),
                color: '#4FC08D'
            },
            {
                name: 'Nuxt.js',
                experience: [
                    {txt: 'Since '},
                    {txt: '2021', mark: true},
                ],
                teaching: [
                    {txt: 'Self-taught '},
                ],
                icon: require('@/icons/nuxtdotjs.svg'),
                color: '#00DC82'
            },
            {
                name: 'React',
                experience: [
                    {txt: 'Since '},
                    {txt: '2018', mark: true},
                ],
                teaching: [
                    {txt: 'School '},
                ],
                icon: require('@/icons/react.svg'),
                color: '#61DAFB'
            },
            {
                name: 'Flutter',
                experience: [
                    {txt: 'Since '},
                    {txt: '2015', mark: true},
                ],
                teaching: [
                    {txt: 'Self-taught '},
                ],
                icon: require('@/icons/flutter.svg'),
                color: '#02569B'
            },
            {
                name: 'Express',
                experience: [
                    {txt: 'Since '},
                    {txt: '2018', mark: true},
                ],
                teaching: [
                    {txt: 'Self-taught '},
                ],
                icon: require('@/icons/express.svg'),
                color: '#000000'
            },
            {
                name: 'Spring',
                experience: [
                    {txt: 'Since '},
                    {txt: '2018', mark: true},
                ],
                teaching: [
                    {txt: 'School '},
                ],
                icon: require('@/icons/spring.svg'),
                color: '#6DB33F'
            },
        ]
    },
}
