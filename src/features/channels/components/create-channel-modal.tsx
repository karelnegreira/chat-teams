import {
    Dialog,    
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
  } from '@/components/ui/dialog'; 

import { useCreateChannelModal } from '../store/use-create-channel-modal';

export const CreateChannelModal = () => {
    const [open, setOpen] = useCreateChannelModal();

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Add channel</DialogTitle>
                    </DialogHeader>
                </DialogContent>
            </DialogContent>
        </Dialog>
    )
}