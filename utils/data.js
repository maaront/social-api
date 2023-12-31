const userSeed = [
    {  
        username: 'Bob Marley',
        email: 'bmarley@mail.com',
        thoughts: [
            "649ddb24ff9c4fef61629d26",
         ],
        friends: [
        ]
    },
    {
        username: 'Gloria Gaynor',
        email: 'ggaynor@mail.com',
        thoughts: [
            "649ddcafed9f191a39c0df52"
        ],
        friends: [
        ]
    },
    {
        username: 'Louis Armstrong',
        email: 'larmstrong@mail.com',
        thoughts: [
            "649ddcafed9f191a39c0df51"
        ],
        friends: [
        ]
    },
    {
        username: 'John Lennon',
        email: 'jlennon@mail.com',
        thoughts: [
            "649ddcafed9f191a39c0df53"
        ],
        friends: [
        ]
    }
];

const thoughtSeed = [
    {
        thoughtText: 'Every little thing is gonna be alright.',
        username: 'Bob Marley',
        reactions: [ {
            reactionBody: "Don't worry, be happy!",
            username: "Louis Armstrong",
        },
        {
            reactionBody: "Three little birds pitched by my doorstep too!",
            username: "Gloria Gaynor",
        }
    ]
},
{
    thoughtText: 'I think to myself, What a wonderful World',
    username: 'Louis Armstrong',
    reactions: [ {
        reactionBody: "I see tress of green!",
        username: "John Lennon",
    },
    {
        reactionBody: "I see clouds of white!",
        username: "Bob Marley",
    }
]
},  {
    thoughtText: 'As long as I know how to love I know I will stay alive',
    username: 'Gloria Gaynor',
    reactions: [ {
        reactionBody: "I've got all my life to live!",
        username: "John Lennon",
    },
    {
        reactionBody: "I've got all my love to give!",
        username: "Bob Marley",
    }
]
},  {
    thoughtText: "You may say Im a dreamer. But Im not the only one.",
    username: 'John Lennon',
    reactions: [ {
        reactionBody: "Imagine all the people sharing all the world!",
        username: "Louis Armstrong",
    },
    {
        reactionBody: "Imagine all the people living life in peace!",
        username: "Gloria Gaynor",
    }
]
},
    ];



    module.exports = {
        userSeed,
        thoughtSeed
      };





