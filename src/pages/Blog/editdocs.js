import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageResize from 'quill-image-resize-module-react';
import './styles.css';
import EditorToolbar, { formats, redoChange, undoChange } from '../../components/editor/quill/QuillEditorToolbar';
Quill.register('modules/imageResize', ImageResize);
const EditorBlog = ({ id, error, value, onChange, simple,setConteudo}) => {
  return (
    <>
      <EditorToolbar id='post-content' isSimple={1000} />
      <ReactQuill
        theme={'snow'}
        value={value}
        onChange={onChange}
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
