import { Button } from "./ui/button";
import { Smile } from 'lucide-react';

interface ToolbarProps {
    isAuthor: boolean;
    isPending: boolean;
    handleEdit: () => void;
    handleThread: () => void;
    handleDelete: () => void;
    handleReaction: (value: string) => void;
    hideThreadButton?: boolean;
}

export const Toolbar = ({
    isAuthor, 
    isPending, 
    handleEdit, 
    handleThread, 
    handleDelete, 
    handleReaction, 
    hideThreadButton
}: ToolbarProps) => {

    return (
        <div className="absolute top-0 right-5">
            <div className="group-hover:opacity-100 opacity-0 transition-opacity border bg-white rounded-md shadow-sm">
                <Button>
                    <Smile />
                </Button>
            </div>
        </div>
    )
}