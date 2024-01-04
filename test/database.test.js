// Import the required modules
const { Pool } = require('pg');

// Define the test
describe('Postgres DB Connection', () => {
  it('should establish a successful pg db connection', async () => {
    // Create a new connection pool
    const pool = new Pool({
      user: 'kakcbadn',
      password: '1FH_y5f7Cb7pv17DfC9AhXmA2MEGA_Si',
      host: 'localhost',
      port: 5432,
      database: 'kakcbadn',
    });

    // Attempt to connect to the database
    const client = await pool.connect();

    // Verify the connection
    expect(client).toBeTruthy();

    // Release the client
    client.release();
  });
});