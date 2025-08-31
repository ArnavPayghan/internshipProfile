export default function ProjectSideBar({ projectName, children, ...props }) {
    return (
        <div>
            <button>{ projectName }</button>
        </div>
    )
}