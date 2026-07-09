
import {
    Dialog, 
    DialogClose, 
    DialogContent, 
    DialogDescription, 
    DialogHeader, 
    DialogTitle
} from '@/components/ui/dialog';

interface InviteModalProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    name: string;
    joinCode: string;
}

export const InviteModal = ({open, setOpen, name, joinCode}: InviteModalProps) => {
    return (
        <Dialog  open={open} onOpenChange={setOpen}>
            <DialogContent className="bg-white">
                <DialogHeader>
                    <DialogTitle>Invite members to {name}</DialogTitle>
                    <DialogDescription>
                        Use the code below to invite people to your workspace 
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}