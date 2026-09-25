import dynamic from 'next/dynamic';
import { useRef } from 'react';

import { Quill } from 'quill';

const Editor = dynamic(() => import("@/components/editor"), {ssr: false})


const ChatInput = () => {

  const editorRef = useRef<Quill | null>(null)

  return (
    <div className="px-5 w-full">
        <Editor
          placeholder="Test placeholder"
          onSubmit={() => {}}
          disabled={false}
          innerRef={editorRef}
        />

    </div>
  )
}

export default ChatInput