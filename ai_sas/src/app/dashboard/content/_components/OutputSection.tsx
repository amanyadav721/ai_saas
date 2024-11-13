import { Editor } from "@toast-ui/react-editor";

export default function OutputSection(){
return <>
<div>
<Editor
    initialValue="hello react editor world!"
    previewStyle="Horizontal"
    height="600px"
    initialEditType="markdown"
    useCommandShortcut={true}
  />
</div>
</>
}