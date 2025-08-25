import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data.js";

export default function CoreConcepts() {
    return (
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
            {/* here title, description and image are PROPS */}
            {CORE_CONCEPTS.map(conceptItem => (
                <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
            </ul>
        </section>
    );
}