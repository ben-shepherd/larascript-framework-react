
const ConsoleCommandsDoc = () => (
  <div>
    <p>You can run <code>yarn dev -- help</code> to see all available commands.</p>
    
    <h3>Code Generation Maker Commands</h3>
    <p>Here's a list of all available commands and their usage:</p>
    <ul className="list-disc py-3">
      <li><code>yarn dev -- make:command --name=MyCommand</code></li>
      <li><code>yarn dev -- make:listener --name=MyListener</code></li>
      <li><code>yarn dev -- make:model --name=MyModel --collection=myCollection</code></li>
      <li><code>yarn dev -- make:observer --name=MyObserver</code></li>
      <li><code>yarn dev -- make:repository --name=MyRepository --collection=myCollection</code></li>
      <li><code>yarn dev -- make:service --name=MyService</code></li>
      <li><code>yarn dev -- make:singleton --name=MySingleton</code></li>
      <li><code>yarn dev -- make:subscriber --name=MySubscriber</code></li>
      <li><code>yarn dev -- make:provider --name=MyProvider</code></li>
      <li><code>yarn dev -- make:routes --name=MyRoutes</code></li>
      <li><code>yarn dev -- make:middleware --name=MyMiddleware</code></li>
      <li><code>yarn dev -- make:action --name=MyAction</code></li>
      <li><code>yarn dev -- make:validator --name=MyValidator</code></li>
      <li><code>yarn dev -- make:migration --name=MyMigration</code></li>
    </ul>
    
    <h3>Command Usage Notes</h3>
    <ul className="list-disc py-3">
      <li>All <strong>make</strong> commands require the <code>--name</code> argument.</li>
    </ul>
    
    <h3>Example</h3>
    <p>To create a new model named "User" in the "users" collection:</p>
    <pre><code>yarn dev -- make:model --name=User --collection=users</code></pre>
  </div>
);

export default ConsoleCommandsDoc;