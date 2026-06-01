
import { Button } from '@/components/ui/button';
import {LucideIcon} from 'lucide-react';
import {IconType} from 'react-icons/lib';
import Link from "next/link";
import { useWorkspaceId } from '@/hooks/use-workspace-id';

interface SidebarItemsProps {
    label: string; 
    id: string;
    icon: LucideIcon | IconType;
};

export const SidebarItems = ({label, id, icon: Icon}: SidebarItemsProps) => {
    const workspaceId = useWorkspaceId();
    return (
        <Button
            variant="transparent"
            size="sm"
            asChild
        >
            <Link href={`/workspace/${workspaceId}/channel/${id}`}>
                <Icon />
                <span>{label}</span>
            </Link>
        </Button>
    )
}

