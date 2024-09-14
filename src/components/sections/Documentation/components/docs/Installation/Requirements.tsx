
const Requirements = () => {
  return (
    <article>
      <h2>Project Requirements</h2>
      <p>Before you begin the installation process, please ensure you have the following software installed on your system:</p>
      
      <ul className="list-disc py-3">
        <li>
          <strong>Node.js:</strong> JavaScript runtime for executing code outside a web browser.<br />
          <a className="button button--primary" href="https://nodejs.org/">Download Node.js</a>
        </li>
        <li>
          <strong>Yarn Package Manager:</strong> Fast, reliable, and secure dependency management.<br />
          <a className="button button--primary" href="https://yarnpkg.com/getting-started/install">Install Yarn</a>
        </li>
        <li>
          <strong>Docker:</strong> Platform for developing, shipping, and running applications in containers.<br />
          <a className="button button--primary" href="https://www.docker.com/get-started">Get Docker</a>
        </li>
        <li>
          <strong>Docker Compose:</strong> Tool for defining and running multi-container Docker applications.<br />
          <a className="button button--primary" href="https://docs.docker.com/compose/install/">Install Docker Compose</a>
        </li>
      </ul>
      
      <p>Having these tools installed will ensure a smooth setup process for your project.</p>
    </article>
  );
}

export default Requirements;