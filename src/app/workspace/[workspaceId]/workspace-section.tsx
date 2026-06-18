
import { FaCaretDown } from 'react-icons/fa';
import { Button } from "@/components/ui/button";

interface WorkspaceSectonProps {
    children: React.ReactNode; 
    label: string;
    hint: string;
    onNew?: () => void;
};

export const WorkspaceSection = ({children, label, hint, onNew}: WorkspaceSectonProps) => {
    return (
        <div className="flex flex-col mt-3 px-2">
            <div className="flex items-center px-3.5 group">
                <Button
                    variant="transparent"
                    className="p-0.5 text-sm text-[#f9edffcc] shink-0 size-6"
                >
                    <FaCaretDown className="size-4"/>
                </Button>
            </div>
            {children}
        </div>
    )
}