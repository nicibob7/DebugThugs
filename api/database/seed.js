const client = require('./setup');

const seedDB = async () => {
    try {
    await client.connect()
    console.log('awaiting seed...')
    if(client.db('revision_app')){
        await client.db('revision_app').collection('users').drop()
    }
    await client.db('revision_app').collection('users').insertOne(
        { name: "Nicolas Sanschagrin", email: "nsanschagrin7@gmail.com", password: "pass" }
    )
    console.log("DB seeded !")
    await client.close()
    } catch(err) {
        console.log(err)
    }
}

seedDB();