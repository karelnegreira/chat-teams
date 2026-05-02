"use client";

import { Sidebar } from "./sidebar";
import { Toolbar } from "./toolbar";

import  { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';

interface WorkspaceIdLayoutProps {
    children: React.ReactNode, 
}

const WorkspaceLayout = ({children}: WorkspaceIdLayoutProps) => {
  return (
    <div className="h-full">
      <Toolbar />
      
      <div className="flex h-[calc(100vh-40px)]"> 
        <Sidebar />
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel>
            <div>
              Channels Sidebar
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel>
            {children}
          </ResizablePanel> 
        </ResizablePanelGroup>
      </div>
    </div>
  )
}

export default WorkspaceLayout;
