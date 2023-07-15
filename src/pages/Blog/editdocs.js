import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageResize from 'quill-image-resize-module-react';
import './styles.css';
import EditorToolbar, { formats, redoChange, undoChange } from '../../components/editor/quill/QuillEditorToolbar';
import ImageUploader from "quill-image-uploader";
import axios from 'axios';
Quill.register('modules/imageResize', ImageResize);
Quill.register("modules/imageUploader", ImageUploader);

const EditorBlog = ({ id, error, value, onChange, simple, setConteudo, user }) => {
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
    handlers: {
      undo: undoChange,
      redo: redoChange
    }
  },
  clipboard: {
    matchVisual: false
  },
  imageResize: {
    parchment: Quill.import('parchment'),
    modules: ['Resize', 'DisplaySize']
  },
  imageUploader: {
    upload: (file) => {
      return new Promise((resolve, reject) => {
        const formData = new FormData();  
        formData.append("image", file);
  
        axios.post( "http://localhost:3001/storage/upload", formData)
          .then((response) => {
            console.log(response.data);
            resolve(response.data.urls[0]);
          })
          .catch((error) => {
            reject("Upload failed");
            console.error("Error:", error);
          });
      });
    }
  }
  
};

export default EditorBlog;

