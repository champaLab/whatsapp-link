import React, { useState } from 'react'
import ReactWhatsapp from 'react-whatsapp';
import ReactInputMask from 'react-input-mask';
import { Box, Button, TextField } from '@mui/material';
import { WhatsApp } from '@mui/icons-material';

interface Props {

}

const App: React.FC<Props> = () => {
    const [num, setNum] = useState('');
    return (
        <Box sx={{ display: "flex", gap: 2, alignItems: "center", justifyContent: "center" }}>
            <ReactInputMask
                mask="20 9999 9999"
                maskChar="_"
                value={num}
                //  @ts-ignore 
                onChange={(val: any) => { setNum(val.target.value.replace(/\s+/g, "").replace(/_/g, '')) }}
            >
                {/* @ts-ignore */}
                {() => (<TextField size='small' label="WhatsApp" name='whatsapp' fullWidth required />)}
            </ReactInputMask>

            {num.length === 10 &&
                <ReactWhatsapp element="webview" number={`${num}`} message="Hello" >
                    <Button variant='outlined' ><WhatsApp /> </Button>
                </ReactWhatsapp>
            }
        </Box>
    )
}

export default App
