const tasks = (arr) => arr.join(' && ')

module.exports = {
    hooks: {
        // 'pre-commit': tasks(['yarn run format', 'yarn run lint']),
        'pre-commit': tasks(['yarn run format']),
        // 'pre-push': tasks(['yarn run test:unit', 'yarn run test:integration']),
    },
}
