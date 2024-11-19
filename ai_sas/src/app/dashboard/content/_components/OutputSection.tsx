/* eslint-disable */
"use client"
import '@toast-ui/editor/dist/toastui-editor.css';
import styles from "./main.module.scss";
import { Copy } from "lucide-react";
import { useEffect, useRef } from "react";
import { Editor } from '@toast-ui/react-editor';

// Dynamically import the Editor component from toast-ui/react-editor
// const Editor = dynamic(() => import('@toast-ui/react-editor').then(mod => mod.Editor), { ssr: false });
interface PROPS{
  aioutput:string;
}
export default function OutputSection({aioutput}:PROPS) {
  const editorRef:any = useRef();
  useEffect(()=>{
      const editorInstance = editorRef.current.getInstance();
      editorInstance.setMarkdown(aioutput);
  },[aioutput])

  return (
    <div className={styles.OutputSection}>
      <div className={styles.editArea}>
        <h2>Your Result</h2>
        <button onClick={()=>navigator.clipboard.writeText(aioutput)}><Copy /> Copy</button>
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
