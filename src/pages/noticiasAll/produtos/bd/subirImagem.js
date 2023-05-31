import { storage } from '../../../../firebase';
import { ref, getDownloadURL, uploadBytesResumable, } from "firebase/storage";

export default function uploadImageToFirebase (caminho,file) {
    return new Promise((resolve, reject) => {
        // Crie uma referência para o local onde você deseja armazenar a imagem no Firebase Storage
        const storageRef = ref(storage, `${caminho}/${file.name}`);

        // Faça o upload do arquivo para o Firebase Storage usando uploadBytesResumable
        const uploadTask = uploadBytesResumable(storageRef, file);

        // Monitore o progresso do upload
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                console.log(`Progresso do upload: ${progress}%`);
            },
            (error) => {
                console.log("Erro ao fazer upload da imagem:", error);
                reject(error);
            },
            () => {
                // O upload foi concluído com sucesso
                console.log("Upload da imagem concluído com sucesso.");

                // Obtenha a URL da imagem recém-carregada
                getDownloadURL(uploadTask.snapshot.ref)
                    .then((downloadURL) => {
                        // Retorne a URL da imagem
                        resolve(downloadURL);
                    })
                    .catch((error) => {
                        console.log("Erro ao obter a URL da imagem:", error);
                        reject(error);
                    });
            }
        );
    });
};