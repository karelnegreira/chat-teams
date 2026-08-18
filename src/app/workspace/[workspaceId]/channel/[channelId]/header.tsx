
import {FaChevronDown} from 'react-icons/fa';

import { Button } from "@/components/ui/button";

interface HeaderProps {
    name: string;
}

export  const Header = ({ name }: HeaderProps) => {
  return (
    <div className="bg-white border-b h-[49px] flex items-center px-4 overflow-hidden">
      <Button
        variant="ghost"
        className="text-lg font-semibold px-2 overflow-hidden w-auto"
        size="sm"
      >
        <span className="truncate"># {name}</span>
        <FaChevronDown className="size-2.5 ml-2" />
      </Button>
    </div>
  )
}

