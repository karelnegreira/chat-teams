import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Id } from '../../../../convex/_generated/dataModel';
import {cva, type VariantProps} from 'class-variance-authority';
import { cn } from '@/lib/utils';
import Link from '../../../../node_modules/next/link';
import { useWorkspaceId } from '@/hooks/use-workspace-id';


const userItemVariants = cva(
    "flex items-center gap-1.5 justify-center font-bold h-8 px-5 text-sm overflow-hidden w-full",
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

interface UserItemProps {
    id: Id<"members">
    label?: string;
    image?: string;
    variant?: VariantProps<typeof userItemVariants["variant"]>;
}

export const UserItem = ({ id, label, image, variant }: UserItemProps) => {
    const workspaceId = useWorkspaceId();
    const avatarFallback = label?.charAt(0).toUpperCase();

    return (
        <Button
            variant="transparent"
            className={cn(userItemVariants({variant: variant}))}
        >
            <Link href={`/workspace/${workspaceId}/member/${id}`} className="flex items-center w-full">
                <Avatar className="size-5 rounded-md mr-1">
                    <AvatarImage className="rounded-md" src={image} />
                    <AvatarFallback className="rounded-md">
                        {avatarFallback}
                    </AvatarFallback>
                </Avatar>
                <span className="text-sm truncate ">{label}</span>
            </Link>
        </Button>
    )
}