import { Button } from '@/components/ui/button';
import {
    Dialog,    
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
  } from '@/components/ui/dialog'; 
import { Input } from '@/components/ui/input';

import { useCreateChannelModal } from '../store/use-create-channel-modal';

export const CreateChannelModal = () => {
    const [open, setOpen] = useCreateChannelModal();

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="bg-white">
                    <DialogHeader>
                        <DialogTitle>Add channel</DialogTitle>
                    </DialogHeader>
                    <form className="space-y-4">
                        <Input 
                            value=""
                            disabled={false}
                            onChange={() => {}}
                            required
                            autoFocus
                            minLength={3}
                            maxLength={80}
                            placeholder="e.g plan-budget"
                        />
                    </form>
                    <div className="flex justify-end">
                        <Button disabled={false}>
                            Create
                        </Button>
                    </div>
                </DialogContent>
        </Dialog>
    )
}