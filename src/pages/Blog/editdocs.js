import React, { useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageResize from 'quill-image-resize-module-react';
import './styles.css';
import EditorToolbar, { formats, redoChange, undoChange } from '../../components/editor/quill/QuillEditorToolbar';
Quill.register('modules/imageResize', ImageResize);
const EditorBlog = ({setConteudo}) => {
  const [EditorBlogHtml, setEditorBlogHtml] = useState('');
  const handleChange = (html) => {
    setEditorBlogHtml(html);
    setConteudo(html)
  };
  return (
    <>
      <EditorToolbar id='post-content' isSimple={1000} />
      <ReactQuill
        theme={'snow'}
        onChange={handleChange}
        value={EditorBlogHtml}
        modules={EditorBlog.modules}
        formats={formats}
        bounds={'#root'}
        
        placeholder="Write something awesome..."
      />
    </>
  );
};
EditorBlog.modules = {
  toolbar: {
    container: '#post-content',
    handlers:{
      undo: undoChange,
      redo: redoChange
    }
  },  
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false
  },
  imageResize: {
    parchment: Quill.import('parchment'),
    modules: ['Resize', 'DisplaySize']
  },

};
export default EditorBlog;
