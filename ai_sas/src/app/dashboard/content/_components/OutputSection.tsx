import dynamic from "next/dynamic";
import '@toast-ui/editor/dist/toastui-editor.css';

const Editor = dynamic(() => import('@toast-ui/react-editor').then(mod => mod.Editor), { ssr: false });

export default function OutputSection() {
  return (
    <>
      <Editor
        initialValue="hello react editor world!"
        previewStyle="vertical"
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
      />
    </>
  );
}
