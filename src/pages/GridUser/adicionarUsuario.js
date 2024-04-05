import * as React from 'react';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Paper from '@mui/material/Paper';
import { Checkbox } from '@mui/material';
import { useState } from 'react';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../../firebase';

export default function AdicionarUsuario(value){
  const [UserName, setUserName] = useState('');
  const [photoURL, setphotoURL] = useState('');
  const [userCompany, setUserCompany] = useState('');
  const [userRole, setUserRole] = useState('');
  const [statusChecked, setStatusChecked] = useState(true);
  const [verificadoChecked, setVerificadoChecked] = useState(true);

  const handleChangeStatus = (event) => {
    setStatusChecked(event.target.checked);
  };
  const handleChangeVerificado = (event) => {
    setVerificadoChecked(event.target.checked);
  };
  const  AdiocionarDbFireBase = async (e)=>{
    try{
      const docRef = await addDoc(collection(db, "jr_usuarios"), {
        id:e[0].id,
        name: e[0].name,
        role: e[0].role,
        company: e[0].company,
        photoURL: e[0].photoURL,
        status:e[0].status ,
        isVerified: e[0].isVerified 
      });
      console.log("Document written with ID: ", docRef.id);
    }catch(error){
      console.log("erro adicionar usuario firebase  =>",error)
    }
    
  }

  if(value.value !== false){
    const NovoUsuario = [{
        id:value.index.length + 2,
        name: UserName,
        role: userRole,
        company: userCompany,
        photoURL: photoURL,
        status:statusChecked ? "active":"inative",
        isVerified: verificadoChecked 
      }]
    AdiocionarDbFireBase(NovoUsuario)

  }
    return(
        <>
        <Paper
              component="form"
              sx={{
               
                '& > :not(style)': { m: 1, width: window.innerWidth > 500 ? '25ch' : '100%' },
              }}
              noValidate
              autoComplete="off"

            >
        
              <TextField
                //helperText="Please enter your name"
               // fullWidth
                id="outlined-name"
                label="Name"
                onChange={e => setUserName(e.target.value)}
                value={UserName}
              />
              <TextField
                id="outlined-Role"
                label="Role"
                onChange={e => setUserRole(e.target.value)}
                value={userRole}
              />

            </Paper>
            <Paper
              component="form"
              sx={{
                
                '& > :not(style)': { m: 1, width: '100%' },
              }}
              noValidate
              autoComplete="off"

            >
              <TextField

                id="outlined-userCompany"
                label="Company"
                onChange={e => setUserCompany(e.target.value)}
                value={userCompany}
              />
              <TextField
                id="outlined-url"
                label="Url perfil"
                onChange={e => setphotoURL(e.target.value)}
                value={photoURL}
              />
            </Paper>
              <Paper
                component="form"
                sx={{
                 
                  '& > :not(style)': { m: 1, width:'9ch',  },
                }}
                noValidate
                autoComplete="off"
  
              >
                 <FormControlLabel control={
                <Checkbox
                  
                  checked={statusChecked}
              
                  onChange={handleChangeStatus}
                  inputProps={{ 'aria-label': 'controlled' }}
                  label="Url perfil"
                />
              }
                label={statusChecked ? "ativo" : "inativo"} />

                
                 <FormControlLabel control={
                <Checkbox
         
                  checked={verificadoChecked}
                  onChange={handleChangeVerificado}
                  inputProps={{ 'aria-label': 'controlled' }}
                  label="Url perfil"
                  
                />
              }
                label={verificadoChecked ? "verificado" : "Não verificado"} />
              </Paper>
        </>
    )
}