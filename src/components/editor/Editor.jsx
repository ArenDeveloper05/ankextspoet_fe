import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import MyEditor from "ckeditor5-custom-build/build/ckeditor";

const Editor = ({ changeData, data }) => {
  return (
    <div>
      <CKEditor
        editor={MyEditor}
        data={data ? data : ""}
        onReady={(editor) => {
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          changeData(data);
          console.log(data);
        }}
      />
    </div>
  );
};

export default Editor;
