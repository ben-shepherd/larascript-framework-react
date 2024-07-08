
const ModelProperties = () => {
    return (
        <article>
            <h2>connection</h2>
            <p>The database connection defined in <code>@src/config/database/mongodb.ts</code></p>

            <h2>primaryKey</h2>
            <p>The primary key for your record. By default, this would be set to <code>_id</code>.</p>

            <h2>guarded</h2>
            <p>Guarded properties that are excluded when returning <code>getData</code> with <code>excludeGuarded</code> as true.</p>

            <h2>data</h2>
            <p>The data object contains the state for the data in your model.</p>

            <h2>dates</h2>
            <p>The <code>dates</code> property allows you to set which fields in your data are supposed to be a <code>Date</code> type.</p>

            <h2>timestamps</h2>
            <p>The <code>timestamps</code> boolean allows you to toggle on or off the automatic setting of <code>createdAt</code> and <code>updatedAt</code> fields.</p>
        </article>

    );
}

export default ModelProperties;
