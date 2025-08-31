import noProjectImage from '../assets/no-projects.png';

import Button from "./Button.jsx";

export default function NoProjectSelected({ onStartAddProject }) {
    return (
        <div className="mt-24 text-center w-2/3">
            <img src={noProjectImage} alt="No Projects" className="h-16 w-16 object-contain mx-auto" />
            <h2 className="text-xl font-bold my-4 text-gray-500">No Project Selected</h2>
            <p className="text-gray-400 mb-4">Please select or create a project to view its details.</p>
            <p clasName="mt-8">
                <Button onClick={onStartAddProject}>
                    Create New Project
                </Button>
            </p>
        </div>
    )
}