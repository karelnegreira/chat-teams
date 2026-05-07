import {useState} from 'react';
import {TrashIcon} from 'lucide-react';

import {
    Dialog,
    DialogPortal,
    DialogOverlay,
    DialogClose,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
  } from '@/components/ui/dialog'; 
import { Button } from '@/components/ui/button';
import { useUpdateWorkspace } from '@/features/workspaces/api/use-update-workspace ';
import { useRemoveWorkspace } from '@/features/workspaces/api/use-remove-workspace';
import { Input } from '@/components/ui/input';

  interface PreferencesModalProps {
    open:  boolean;
    setOpen: (open: boolean) => void;
    initialValue: string;
  }


export const PreferencesModal = ({open, setOpen, initialValue}: PreferencesModalProps) => {
    const [value, setValue] = useState(initialValue)
    const [editOpen, setEditOpen] = useState(false);

    const {mutate: updateWorkspace, isPending: isUpdatingWorkspace} = useUpdateWorkspace();
    const {mutate: removeWorkspace, isPending: isRemovingWorkspace} = useRemoveWorkspace();


    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="p-0 bg-gray-50 overflow-hidden">
                <DialogHeader className="p-4 border-b bg-white">
                    <DialogTitle>
                        {value}
                    </DialogTitle>
                </DialogHeader>
                <div className='px-4 pb-4 flex flex-col gap-y-2'>
                    <Dialog onOpen={editOpen} onOpenChange={setEditOpen}>
                        <DialogTrigger asChild>
                            <div className="px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50">
                                <div className='flex items-center justify-between'>
                                    <p className="text-sm font-semibold">
                                        Workspace name
                                    </p>
                                    <p className="text-sm text-[#1264a3] hover:underline font-semibold">
                                        Edit
                                    </p>
                                </div>
                                <p className="text-sm">
                                    {value}
                                </p>
                            </div>
                        </DialogTrigger>
                        <DialogContent className="bg-white">
                            <DialogHeader>
                                <DialogTitle>Rename this workspace</DialogTitle>
                            </DialogHeader>
                            <form className="space-y-4" onSubmit={() => {}}>
                                <Input 
                                    value={value}
                                    disabled={isUpdatingWorkspace}
                                    onChange={(e) => setValue(e.target.value)}
                                    required
                                    autoFocus
                                    minLength={3}
                                    maxLength={50}
                                    placeholder="Workspace name e.g. 'Work', 'Personal'"
                                />
                            </form>
                        </DialogContent>
                    </Dialog>
                
                <button
                    disabled={false}
                    onClick={() => {}}
                    className="flex items-center justify-start gap-x-2 px-5 py-4 bg-white rounded-lg  border cursor-pointer hover:bg-gray-50 text-rose-600"
                >
                    <TrashIcon className="size-4"/>
                    <p className="text-sm font-extrabold">Delete this workspace</p>
                </button>
                </div>
            </DialogContent>
            
        </Dialog>
    )
}