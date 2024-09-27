import CodeBlock from "../../../../../utils/CodeBlock";

export default function CreateRoutingFiles() {
    return (
      <section>
        <p>Larascript provides a convenient way to create new routing files, helping you keep your routes organized and manageable. You can use the following command to generate a new routing file:</p>
        
        <CodeBlock>
        yarn dev make:route --name=otherRoutes  
        </CodeBlock>
        
        <p>This command will create a new file named <code>otherRoutes.ts</code> in the <code>@src/app/routes/</code> directory.</p>
        
        <p>Using separate routing files is particularly useful for keeping complex routes organized and your main routing file clean. It allows you to logically group related routes together, making your application structure more intuitive and easier to navigate.</p>
      </section>
    );
  }