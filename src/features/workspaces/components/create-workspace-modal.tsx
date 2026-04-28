"use client";

import {
    Dialog, 
    DialogContent, 
    DialogDescription, 
    DialogHeader, 
    DialogTitle
} from '@/components/ui/dialog';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { useCreateWorkspaceModal } from '../store/use-create-workspace-modal';
import { useCreateWorkspace } from '../api/use-create-workspace';

export const CreateWorksSpaceModal = () => {

    const [open, setOpen] = useCreateWorkspaceModal();

    const { mutate } = useCreateWorkspace();

    const handleClose = () => {
        setOpen(false);
        //TODO: clear form 
    };

    const handleSubmit = () => {
        mutate({
            name: "Workspace 1", 
        })
    }

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className="bg-slate-50">
                <DialogHeader>
                    <DialogTitle>Add a workspace</DialogTitle>
                </DialogHeader>
                <form className='space-y-4'>
                    <Input
                        value=""
                        disabled={false}
                        required
                        autoFocus
                        minLength={3}
                        placeholder="Workspace name e.g 'Work', 'Personal', 'Home'"
                    />
                    <div className="flex justify-end">
                        <Button disabled={false} className="bg-black text-white text-wrap">
                            Create
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}