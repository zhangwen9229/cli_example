const questions = [{
        type: 'text',
        name: 'dish',
        message: 'which dish?'
    },
    {
        type: 'number',
        name: 'age',
        message: 'How old are you?'
    }, {
        type: prev => prev > 3 ? 'confirm' : null,
        name: 'confirm',
        message: (prev, values) => `Please confirm that you eat ${values.dish} times ${prev} a day?`
    }
]


module.exports.questions = questions;