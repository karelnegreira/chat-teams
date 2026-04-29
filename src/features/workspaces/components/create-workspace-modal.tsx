"use client";

import { useRouter } from 'next/navigation';

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
import React, { useState } from 'react';

export const CreateWorksSpaceModal = () => {

    const [open, setOpen] = useCreateWorkspaceModal();
    const [name, setName] = useState("");

    const { mutate, isPending, isError, isSuccess, data, error } = useCreateWorkspace();

    const { router } = useRouter();

    const handleClose = () => {
        setOpen(false);
        //TODO: clear form 
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutate({name}, {
            onSuccess(data) {
                console.log(data);
            }
        })
    }

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className="bg-slate-50">
                <DialogHeader>
                    <DialogTitle>Add a workspace</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className='space-y-4'>
                    <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={isPending}
                        required
                        autoFocus
                        minLength={3}
                        placeholder="Workspace name e.g 'Work', 'Personal', 'Home'"
                    />
                    <div className="flex justify-end">
                        <Button disabled={isPending} className="bg-black text-white text-wrap">
                            Create
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}