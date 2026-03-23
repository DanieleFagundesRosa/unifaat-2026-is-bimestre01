export default {

    name: 'app',
    description: 'app',
    arguments: {

    },

    handle: async function () {
        const now = new Date();
        console.log(`App command executed at ${now.toLocaleString()}`);
    }
}