
import { Loader } from 'lucide-react';

import { Button } from '@/components/ui/button'
import {
    DropdownMenu, 
    DropdownMenuContent, 
    DropdownMenuItem, 
    DropdownMenuSeparator, 
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { useGetWorkspace } from '@/features/workspaces/api/user-get-workspace';
import { useGetWorkspaces } from '@/features/workspaces/api/user-get-workspaces';
import { useCreateWorkspaceModal } from '@/features/workspaces/store/use-create-workspace-modal';
import { useWorkspaceId } from '@/hooks/use-workspace-id'

export const WorkspaceSwitcher = () => {
    const workspaceId = useWorkspaceId();
    const [_open, setOpen] = useCreateWorkspaceModal();

    const {data: workspace, isLoading: workspaceLoading} = useGetWorkspace({id: workspaceId});
    const {data: workspaces, isLoading: workspacesLoading} = useGetWorkspaces();

    const filteredWorkspaces = workspaces?.filter((workspace) => workspace?._id !== workspaceId)

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button className="size-9 relative overflow-hidden bg-[#ABABAB] hover:bg-[#ABABAD]/80 text-slate-800  font-semibold text-xl">
                    {workspaceLoading ? 
                    (<Loader className="size-5 animate-spin shrink-0"/>) 
                    : (workspace?.name.charAt(0).toUpperCase()
                    )}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="bottom" align="start" className="w-64">
                <DropdownMenuItem className="cursor-pointer flex-col justify-start items-start capitalize">
                    {workspace?.name}
                    <span>
                        Active workspace 
                    </span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}