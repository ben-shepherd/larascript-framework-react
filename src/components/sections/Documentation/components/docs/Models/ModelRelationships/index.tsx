import Divider from "../../../../../../utils/Divider";
import BelongsTo from "./BelongsTo";
import HasMany from "./HasMany";
import HasOne from "./HasOne";

const ModelRelationships = () => {
    return (
        <article>

            <BelongsTo />

            <Divider />

            <HasOne />

            <Divider />

            <HasMany />

        </article>

    );
}

export default ModelRelationships;
