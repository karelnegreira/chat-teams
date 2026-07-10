import {CopyIcon, RefreshCcw} from 'lucide-react';
import {toast} from 'sonner';
import { Button } from '@/components/ui/button';
import {
    Dialog, 
    DialogClose, 
    DialogContent, 
    DialogDescription, 
    DialogHeader, 
    DialogTitle
} from '@/components/ui/dialog';
import { useWorkspaceId } from '@/hooks/use-workspace-id';
import { useNEwJoinCode } from '@/features/workspaces/api/use-new-join-code';

interface InviteModalProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    name: string;
    joinCode: string;
}



export const InviteModal = ({open, setOpen, name, joinCode}: InviteModalProps) => {

    const workspaceId = useWorkspaceId();

    const { mutate, isPending } = useNEwJoinCode();


    const handleCopy = () => {
        const invitelink = `${window.location.origin}/join/${workspaceId}`;

        window.navigator.clipboard
        .writeText(invitelink)
        .then(() => toast.success("Invite link copied to clipboard"));
    }

    return (
        <Dialog  open={open} onOpenChange={setOpen}>
            <DialogContent className="bg-white">
                <DialogHeader>
                    <DialogTitle>Invite members to {name}</DialogTitle>
                    <DialogDescription>
                        Use the code below to invite people to your workspace 
                    </DialogDescription>
                </DialogHeader>
                <div className='flex flex-col gap-y-4 items-center justify-center py-10'>
                    <p className="text-4xl font-bold tracking-widest uppercase">
                        {joinCode}
                    </p>
                    <Button
                        onClick={handleCopy}
                        variant='ghost'
                        size='sm'
                    >
                        Copy link
                        <CopyIcon className="size-4 ml-2"/>
                    </Button>
                </div>
                <div className="flex items-center justify-between w-full ">
                    <Button onClick={() => {}} variant="outline">
                        New code 
                        <RefreshCcw/>
                    </Button>
                    <DialogClose asChild>
                        <Button>Close</Button>
                    </DialogClose>
                </div>
            </DialogContent>
        </Dialog>
    )
}