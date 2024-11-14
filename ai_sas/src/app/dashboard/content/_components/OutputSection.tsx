"use client"
 import dynamic from "next/dynamic";
import '@toast-ui/editor/dist/toastui-editor.css';
import styles from "./main.module.scss";
import { Copy } from "lucide-react";
import { useRef } from "react";
import { Editor } from '@toast-ui/react-editor';

// Dynamically import the Editor component from toast-ui/react-editor
// const Editor = dynamic(() => import('@toast-ui/react-editor').then(mod => mod.Editor), { ssr: false });

export default function OutputSection() {
  const editorRef:any = useRef();

  return (
    <div className={styles.OutputSection}>
      <div className={styles.editArea}>
        <h2>Your Result</h2>
        <button><Copy /> Copy</button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Magic Appears here"
        height="600px"
        initialEditType="wysiwyg"
        previewStyle="vertical"
        useCommandShortcut={true}
        onChange={() => 
          console.log (editorRef.current.getInstance().getMarkdown())} 
      />
    </div>
  );
}
