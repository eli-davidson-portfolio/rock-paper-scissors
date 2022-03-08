
var data = {
    menu: {
        title: 'Main Menu',
        prompt: '',
        options: [
            {
                name: 'Game Type',
                value: '&#128377;',
                onClick: `game.menu.show('gameType')`
            },
            {
                name: 'Charactor',
                value: '&#129489;',
                onClick: `game.menu.show('charactor')`
            },
            {
                name: 'Theme',
                value: '&#127912;',
                onClick: `game.menu.show('theme')`
            },

        ],
    },
    charactor: {
        title: 'Charactor',
        prompt: "",
        options: [
            {
                name: 'Name',
                value: '&#128227;',
                onClick: `game.menu.show('name')`
            },
            {
                name: 'Age',
                value: '&#129491;',
                onClick: `game.menu.show('age')`
            },
            {
                name: 'Gender',
                value: '&#9895;',
                onClick: `game.menu.show('gender')`
            },
            {
                name: 'Skin Tone',
                value: '&#129306;',
                onClick: `game.menu.show('skinTone')`
            },
            {
                name: 'Back',
                value: '&#9664;',
                onClick: `game.menu.show('menu')`
            },
        ],
    },
    name: {
        title: 'Name',
        prompt: 'Select game type',
        options: [
            {
                name: 'Submit',
                value: '&#9989;',
                onClick: `game.player1.setName()`
            },

        ]
    },
    gameType: {
        title: 'Game Menu',
        prompt: 'Select game type',
        options: [
        {
            name: 'Classic',
            value: '&#128074;',
            winConditions: ['Rock', 'Paper', 'Scissors'],
            onClick: `game.setNavType(0)`
        },
        {
            name: 'Advanced',
            value: '&#128406;',
            winConditions: ['Rock', 'Spock', 'Paper', 'Lizard', 'Scissors'],
            onClick: `game.setNavType(1)`
        },
        {
            name: 'Back',
            value: '&#9664;',
            onClick: `game.menu.show('menu')`
        },

    ]},
    gender: {
        title: 'Gender',
        prompt: "",
        options: [
        {
            name: 'Female',
            value: '&#128105;',
            onClick: `game.player1.setGender('female')`
        },
        {
            name: 'Non-Binary',
            value: '&#129489;',
            onClick: `game.player1.setGender('nonBinary')`
        },
        {
            name: 'Male',
            value: '&#128104;',
            onClick: `game.player1.setGender('male')`
        },
        {
            name: 'Back',
            value: '&#9664;',
            onClick: `game.menu.show('charactor')`
        },

    ]},
    age: {
        title: 'Age Menu',
        prompt: "",
        options: [
        {
            name: 'Young Person',
            value: '&#129490;',
            onClick: `game.player1.setAge('young')`
        },
        {
            name: 'Adult',
            value: '&#129489;',
            onClick: `game.player1.setAge('adult')`
        },
        {
            name: 'Older Person',
            value: '&#129491;',
            onClick: `game.player1.setAge('old')`
        },
        {
            name: 'Back',
            value: '&#9664;',
            onClick: `game.menu.show('charactor')`
        },

    ]},
    skinTone: {
        title: 'Skin Tone',
        prompt: ``,
        options: [

        {
            name: 'Light',
            value: '&#127995;',
            onClick: `game.player1.setSkinTone(0)`
        },
        {
            name: 'Medium-light',
            value: '&#127996;',
            onClick: `game.player1.setSkinTone(1)`
        },
        {
            name: 'Medium',
            value: '&#127997;',
            onClick: `game.player1.setSkinTone(2)`
        },
        {
            name: 'Medium-dark',
            value: '&#127998;',
            onClick: `game.player1.setSkinTone(3)`
        },
        {
            name: 'Dark',
            value: '&#127999;',
            onClick: `game.player1.setSkinTone(4)`
        },
        {
            name: 'Back',
            value: '&#9664;',
            onClick: `game.menu.show('charactor')`
        },

    ]},
    theme: {
        title: 'Theme',
        prompt: ``,
        options: [
            {
                name: 'Red',
                value: '&#128997;',
                light: '#d32f2f',
                dark: '#9a0007',
                onClick: `game.setTheme(0)`
            },
            {
                //Orange threw some contrast errors, so it's adjusted, rather than removed
                name: 'Orange',
                value: '&#128999;',
                light: '#BF360C',
                dark: '#FF3D00',
                onClick: `game.setTheme(1)`
            },
            {   //Yellow does not work with white font, or yellow emojis, so it's eleminated.
                name: 'Green',
                value: '&#129001;',
                light: '#388e3c',
                dark: '#1b5e20',
                onClick: `game.setTheme(2)`
            },
            {
                name: 'Blue',
                value: '&#128998;',
                light: '#1976d2',
                dark: '#0d47a1',
                onClick: `game.setTheme(3)`
            },
            {
                name: 'Purple',
                value: '&#129002',
                light: '#720d5d;',
                dark: '#4e0d3a;',
                onClick: `game.setTheme(4)`
            },
            {
                name: 'Back',
                value: '&#9664;',
                light: '#d32f2f',
                dark: '#b71c1c',
                onClick: `game.menu.show('menu')`
            },
        ]
    },
    fighters: {
        spock: {
            name: 'Spock',
            human: '&#128406;',
            creature: '&#128125;'
        },
        scissors: {
            name: 'Scissors',
            human: '&#9996;',
            creature: '&#9986;'
        },
        paper: {
            name: 'Paper',
            human: '&#129306;',
            creature: '&#128196;'
        },
        lizard: {
            name: 'Lizard',
            human: '&#129295;',
            creature: '&#129422;'
        },
        rock: {
            name: 'Rock',
            human: '&#128074;',
            creature: '&#129704;'
        }
    },
    token: {
        human: {
            male: {
                young:  {
                    name: 'Boy',
                    value: '&#128102;'
                },
                adult:  {
                    name: 'Man',
                    value: '&#128104;'
                },
                old:    {
                    name: 'Old Man',
                    value: '&#128116;'
                }
            },
            nonBinary: {
                young: {
                    name: 'Child',
                    value: '&#129490;'
                },
                adult: {
                    name: 'Person',
                    value: '&#129489;'
                },
                old:  {
                    name: 'Older person',
                    value: '&#129491;'
                }
            },
            female: {
                young: {
                    name: 'Girl',
                    value: '&#128103;'
                },
                adult: {
                    name: 'Woman',
                    value: '&#128105;'
                },
                old: {
                    name: 'Old Woman',
                    value: '&#128117;'
                },
            }
        },
        creature: [
            {
                name: 'Robot',
                value: '&#129302;'
            },
            {
                name: 'Fox',
                value: '&#129418;'
            },
            {
                name: 'Ghost',
                value: '&#128123;'
            },
            {
                name: 'Lion',
                value: '&#129409;'
            },
            {
                name: 'Panda',
                value: '&#128060;'
            },
            {
                name: 'Unicorn',
                value: '&#129412;'
            },
        ]
    }
}

