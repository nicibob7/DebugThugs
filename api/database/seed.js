const client = require('./setup');

const seedDB = async () => {
    try {
        await client.connect();
        console.log('awaiting seed...');
        await client.db('revision_app').collection('users').drop();
        await client.db('revision_app').collection('users').insertOne({
            _id: 0,
            name: 'Louis Theroux',
            email: 'example@gmail.com',
            password: 'pass',
        });
        await client.db('revision_app').collection('tokens').drop();
        await client
            .db('revision_app')
            .collection('tokens')
            .insertOne({ _id: 0, user_id: 0, token: 'example' });
        console.log('DB seeded !');
        await client.close();
    } catch (err) {
        console.log(err);
    }
};

seedDB();
