// Import the required modules
const { Pool } = require('pg');

// Define the test
describe('Postgres DB Connection', () => {
  // Create a new connection pool
  const pool = new Pool({
    user: 'kakcbadn',
    password: '1FH_y5f7Cb7pv17DfC9AhXmA2MEGA_Si',
    host: 'mahmud.db.elephantsql.com',
    port: 5432,
    database: 'kakcbadn',
  });

  beforeAll(async () => {
    // Create the users table
    await pool.query('CREATE TABLE testUsers (firstname VARCHAR(50))');
  });

  afterAll(async () => {
    await pool.query('DROP TABLE IF EXISTS testusers');
    await pool.end();
  })

  it(`Should establish a successful database connection`, async () => {
    // Attempt to connect to the database
    const client = await pool.connect();
    // Verify the connection
    expect(client).toBeTruthy();
    // Release the client
    client.release();
  })

  it(`Should throw an error in case of an unsuccessful database connection`, async () => {
    const wrongdatabase = new Pool({
      user: 'PopeyesBonafideBigBox',
      password: 'SpicyTenders',
      host: 'mahmud.db.elephantsql.com',
      port: 5432,
      database: 'kakcbadn',
    });

    try {
      const client = await wrongdatabase.connect();
    }
    catch (error) {
      expect(error).toBeTruthy();
    }
  })

  it(`Should insert a user`, async () => {
    const firstname = 'Mayson';
    
    //insert and fetch the user
    await pool.query('INSERT INTO testUsers (firstname) VALUES ($1)', [firstname]);
    const res = await pool.query('SELECT * FROM testUsers WHERE firstname = $1', [firstname]);
    expect(res.rows[0].firstname).toBe(firstname);
  })

  it(`Should fetch all users`, async () => {
    //Attempt to query all users from users table
    const res = await pool.query('SELECT * FROM testUsers');
    expect(Array.isArray(res.rows)).toBeTruthy();
  })

  it(`Should delete a user`, async () => {
    const firstname = 'Mayson';
    //delete the user
    await pool.query('DELETE FROM testUsers WHERE firstname = $1', [firstname]);
    const res = await pool.query('SELECT * FROM testUsers WHERE firstName = $1', [firstname]);
    expect(res.rows.length).toBe(0);
  })
});