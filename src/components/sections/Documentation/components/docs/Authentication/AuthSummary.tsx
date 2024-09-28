
const AuthSummary = () => {
  return (
    <article>
      <p>
        Larascript comes with a robust authentication system that's ready to use out of the box, yet flexible enough to be tailored to your specific needs. The system utilizes a role and group-based permission structure that can be easily fine-tuned in the configuration file located at '@src/config/auth.ts'.
      </p>
      
      <h2>Configuration</h2>
      <p>
        The auth configuration file '@src/config/auth.ts' allows you to:
      </p>
      <ul className="list-disc py-3">
        <li>Define roles and their associated permissions</li>
        <li>Set up user groups with specific access rights</li>
        <li>Customize token expiration times</li>
      </ul>

      <p>
        By adjusting these settings, you can create a tailored authentication system that perfectly fits your application's security requirements.
      </p>
    </article>
  );
};

export default AuthSummary;