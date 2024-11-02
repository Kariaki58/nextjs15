import React, { useEffect, useRef } from 'react';
import 'quill/dist/quill.snow.css';
import Quill from 'quill';

const Editor = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      new Quill(editorRef.current, {
        theme: 'snow',
        modules: {
          toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'align': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['image', 'video', 'blockquote', 'code-block'],
            ['clean'],
          ],
        },
      });
    }
  }, []);

  return (
    <div>
      <div ref={editorRef} style={{ height: '300px', border: '1px solid #ccc' }} />
    </div>
  );
};

export default Editor;
