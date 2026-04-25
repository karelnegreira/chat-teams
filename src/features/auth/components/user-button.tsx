"use client";

import {
    Avatar, 
    AvatarFallback, 
    AvatarImage
} from '@/components/ui/avatar';

import {
    DropdownMenu, 
    DropdownMenuContent, 
    DropdownMenuItem, 
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

export const UserButton = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar className="size-10 hover:opacity-75 transition">
                    <AvatarImage />
                    <AvatarFallback>

                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" side="right" className="w-60">
                <DropdownMenuItem>
                    
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}