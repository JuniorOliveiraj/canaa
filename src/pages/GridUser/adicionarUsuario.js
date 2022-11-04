import * as React from 'react';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Paper from '@mui/material/Paper';
import { Checkbox } from '@mui/material';
import { useState } from 'react';


export default function AdicionarUsuario(value){
  const [UserName, setUserName] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
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
  if(value.value != false){
    const USERLIST = value.index; 
    USERLIST.push({
        id:USERLIST.length ,
        name: UserName,
        role: userRole,
        company: userCompany,
        avatarUrl: avatarUrl,
        status:statusChecked ? "active":"inative",
        isVerified: verificadoChecked 
      })

    console.log(USERLIST)
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
                onChange={e => setAvatarUrl(e.target.value)}
                value={avatarUrl}
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