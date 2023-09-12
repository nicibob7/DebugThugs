const client = require('./setup');

const seedDB = async () => {
    try {
    await client.connect()
    console.log('awaiting seed...')
    await client.db('revision_app').collection('users').drop()
    await client.db('revision_app').collection('users').insertOne(
        { _id:0, name: "Louis Theroux", email: "example@gmail.com", password: "pass" }
    )
    if(client.db('revision_app')){
        await client.db('revision_app').collection('tokens').drop()
    }
    await client.db('revision_app').createCollection('tokens')
    console.log("DB seeded !")
    await client.close()
    } catch(err) {
        console.log(err)
    }
}

seedDB();