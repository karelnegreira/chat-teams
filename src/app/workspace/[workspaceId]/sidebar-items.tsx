
import { Button } from '@/components/ui/button';
import {LucideIcon} from 'lucide-react';
import {IconType} from 'react-icons/lib';
import Link from "next/link";
import {cva, type VariantProps} from 'class-variance-authority';
import { useWorkspaceId } from '@/hooks/use-workspace-id';
import { cn } from '@/lib/utils';

const sidebarItemVariants = cva(
    "flex items-center gap-1.5 justify-center font-normal h-7 px-[18px] text-sm overflow-hidden", 
    {
        variants: {
            variant: {
                default: "text-[#f9edffcc]", 
                active: "text-[#481349] bg-white/90 hover:bg-white/90"
            }, 
        }, 
    }, 
);

interface SidebarItemsProps {
    label: string; 
    id: string;
    icon: LucideIcon | IconType;
    variant?: VariantProps<typeof sidebarItemVariants>["variant"]
};



export const SidebarItems = ({label, id, icon: Icon, variant}: SidebarItemsProps) => {
    const workspaceId = useWorkspaceId();
    return (
        <Button
            variant="transparent"
            size="lg"
            className={cn(sidebarItemVariants({variant: variant }))}
            asChild
        >
            <Link href={`/workspace/${workspaceId}/channel/${id}`}>
                <Icon />
                <span>{label}</span>
            </Link>
        </Button>
    )
}

