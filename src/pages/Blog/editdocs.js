import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageResize from 'quill-image-resize-module-react';
import './styles.css';
import EditorToolbar, { formats, redoChange, undoChange } from '../../components/editor/quill/QuillEditorToolbar';
import ImageUploader from "quill-image-uploader";
import uploadImageToFirebase from '../noticiasAll/produtos/bd/subirImagem';
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
        style={{  border:'none'}}
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
      return new  Promise((resolve, reject)  => {
        const formData = new FormData();  
        formData.append("image", file);
         uploadImageToFirebase('imagensBlog', file).then((response) => {
            console.log(response);
           
           
            resolve(response);
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

