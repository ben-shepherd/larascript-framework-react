
const Installing = () => {
  return (
    <article>
      <p>Let's get you set up with your new project. Follow these simple steps to begin:</p>

      <h2>Create Your Own Repository</h2>
      <p>Start by creating a personalized repository using our base template:</p>
      <ul className="list-disc py-3">
        <li><a href="https://github.com/ben-shepherd/larascript-node" target="_blank" rel="noopener noreferrer">Visit the GitHub page for this project</a></li>
        <li>Look for the "Use this template" button near the top of the page</li>
        <li>Click the button to create a new repository based on our template</li>
      </ul>
      <img alt="Use this template button on GitHub" src="images/install/useThisTemplate.png" />

      <h2>Clone and Set Up Your Repository</h2>
      <p>After creating your repository, follow these steps to set it up locally:</p>
      <ul className="list-disc py-3">
        <li className="py-2">Open a terminal or command prompt on your system</li>
        <li>Navigate to the folder where you want to store your project:
          <code>cd path/to/your/desired/folder</code>
        </li>
        <li>Clone your newly created repository:
          <code>git clone https://github.com/yourusername/your-repo-name.git</code>
        </li>
        <li>Change into the project directory:
          <code>cd your-repo-name</code>
        </li>
        <li>Install all the project dependencies:
          <code>yarn install</code>
        </li>
      </ul>
      <p>After completing these steps, your project will be set up and ready for development!</p>
    </article>
  );
}

export default Installing;