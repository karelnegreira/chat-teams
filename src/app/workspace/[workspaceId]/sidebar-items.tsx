
import { Button } from '@/components/ui/button';
import {LucideIcon} from 'lucide-react';
import {IconType} from 'react-icons/lib';
import Link from "next/link";
import {cva, type VariantProps} from 'class-variance-authority';
import { useWorkspaceId } from '@/hooks/use-workspace-id';
import { cn } from '@/lib/utils';

const sidebarItemVariants = cva(
    "flex items-center gap-1.5 justify-start font-bold h-7 px-[18px] text-sm overflow-hidden w-full",
    {
      variants: {
        variant: {
          default:
            "text-[#f9edffcc] hover:bg-white/10 hover:text-white",
  
          active:
            "bg-white/90 text-[#481349] hover:bg-white/90",
        },
      },
      defaultVariants: {
        variant: "default",
      },
    }
  )

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
            variant="ghost"
            size="lg"
            className={cn(sidebarItemVariants({variant: variant }))}
            asChild
        >
            <Link href={`/workspace/${workspaceId}/channels/${id}`}>
                <Icon className="size-4"/>
                <span className="text-sm truncate">{label}</span>
            </Link>
        </Button>
    )
}

