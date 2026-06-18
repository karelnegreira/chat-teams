
interface WorkspaceSectonProps {
    children: React.ReactNode; 
    label: string;
    hint: string;
    onNew?: () => void;
};

export const WorkspaceSection = ({children, label, hint, onNew}: WorkspaceSectonProps) => {
    return (
        <div>
            {children}
        </div>
    )
}