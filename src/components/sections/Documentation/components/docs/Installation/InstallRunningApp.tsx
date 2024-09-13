
const InstallRunningApp = () => {
  return (
    <article>

      <p>
        Now that you have set up your environment, you are ready to start developing your app.
      </p>
      <p>
        To run the app in development mode, use the following command in your terminal:
      </p>
      <pre>
        <code>yarn dev</code>
      </pre>
      
      <h3>Tinkering with the App</h3>
      <p>
        If you want to experiment and make changes, you can edit the <code>@src/tinker.ts</code> file. <br />
        This allows you to quickly test and iterate on your ideas without affecting the main application code.
        After making your changes, run the following command to see the results:
      </p>
      <pre>
        <code>yarn dev:tinker</code>
      </pre>
    
    </article>
  );
}

export default InstallRunningApp;