
const InstallingProduction = () => {
  return (
    <article>
    
      <p>Once you are happy with your developed API, you can optimize the API to run in production by running these commands:</p>
      
      <pre>
        <code>
        yarn db:up
        </code>
      </pre>
        

      <pre>
        <code>
        yarn api:up
        </code>
      </pre>
      
      <p>To run these containers down:</p>
      
      <pre>
        <code>
        yarn db:down
        </code>
      </pre>
      
      <pre>
        <code>
        yarn api:down
        </code>
      </pre>
      
      <h3>Important Notes:</h3>
      
      <p>In your .env file, you may need to change the database server to listen to the container name rather than localhost.</p>
      
      <p>For example:</p>
      
      <pre>
        <code>
        DATABASE_DEFAULT_URI=postgres://root:example@localhost:5432/app
        </code>
      </pre>
      
      <p>becomes:</p>
      
      <pre>
        <code>
        DATABASE_DEFAULT_URI=postgres://root:example@postgres:5432/app
        </code>
      </pre>

      <h3>Running migrations</h3>

      <p>To run migrations, use the following command to SSH into your container:</p>

      <pre>
        <code>
            yarn api:sh
        </code>
      </pre>

      <p>Navigate to your API, usually located in <code>/app</code>.</p>

      <p>Run the following command to run migrations:</p>

      <pre>
        <code>
            yarn dev migrate:up --no-express
        </code>
      </pre>

      <p>The --no-express flag has been added here to prevent the Express server from starting as it will already be running.</p>
    </article>
  );
}

export default InstallingProduction;