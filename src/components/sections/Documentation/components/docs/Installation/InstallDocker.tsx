import CodeBlock from "../../../../../utils/CodeBlock";

const InstallDocker = () => {
    return (
        <article>
          <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 my-10" role="alert">
                <p className="font-bold">Incomplete Docker Configuration</p>
                <p>Running the app in docker is currently incomplete and is not gauranteed to work correctly.</p>
                <p>It's recommended to install Yarn on your local system and run with <code>yarn run dev</code></p>
            </div>

            <p>This project comes with Docker configurations.</p>
            <p>The following steps will help you get started.</p>

            <p><strong>This step can be ignored if your database is hosted externally.</strong></p>

            <p>Please download <a href="https://www.docker.com/products/docker-desktop" target="_blank" rel="noopener noreferrer">Docker Desktop</a> on your system.</p>

            <h2>Configuration</h2>
            <p>Edit your <code>docker-compose.yml</code> file with your desired MongoDB confiugration.</p>

            <p><strong>Dockerfile Example</strong></p>
            <CodeBlock>
                {`services:
  api:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    depends_on:
      - mongodb
    environment:
      - MONGODB_URI=mongodb://root:example@mongodb:27017/your_database_name?authSource=admin
    volumes:
      - .:/app
      - /app/node_modules
    working_dir: /app
    networks:
      - app-network

  mongodb:
    image: mongo:latest
    ports:
      - "27017:27017"
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: example
    volumes:
      - mongodb_data:/data/db
    networks:
      - app-network

networks:
  app-network:
    driver: bridge

volumes:
  mongodb_data:`}
            </CodeBlock>

            <h2>Running Docker Container</h2>
            <p>Navigate to your root project and run the following command:</p>
            <code>docker compose up --build -d</code>

            <h2>Environment Setup</h2>
            <p>Navigate to your root project and run the following command:</p>
            <p>This will allow you to quickly configure your Environment file.</p>
            <p><code>yarn run dev -- app:setup --no-db</code></p>

            <p>To run the app in development mode, you will need to install npm and yarn (or npm) on your local system in order to run the project in development mode.</p>
            
            <p><code>yarn run dev</code></p>
        </article>

    );
}

export default InstallDocker;
