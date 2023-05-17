import * as React from 'react';
import './Carta.css'
// ****** material UI******
import { Box, Card, CardContent, Typography } from '@mui/material';
import CakeIcon from '@mui/icons-material/Cake';
// ****** material UI******

export const Carta = () => {

    return (
        <section className="Carta" id="Carta">
            <Card sx={{ minWidth: '50%', maxWidth: '50%', backgroundColor: '#f3cfed' }}>
                <CardContent>
                    <Typography variant="h5" component="div" className='title'>
                        Feliz cumple chemita  <CakeIcon sx={{ marginLeft: '1%' }} />
                    </Typography>
                    <Typography variant="body2" sx={{ marginLeft: '1%', textAlign: 'justify' }}>
                        <br />
                        Espero que te la pases muy bien con todos tus seres queridos, mis mejores deseos hoy y siempre, eres una de las mejores
                        personas que he conocido y que afortunadamente tengo en mi vida, gracias por darme oportunidad de celebrar otro de tus cumpleaños
                        contigo. Eres mi mejor amigo y he aprendido bastante de ti en estos años que llevamos de conocernos, sabes que siempre estaré
                        aqui en las buenas y las malas y lo más importante, sabes que siempre puedes contarme lo que sea y nunca serás juzgado.
                        <br />
                        <br />
                        Espero te haya gustado este pequeño website no tuve mucho tiempo para hacerlo sino hubiera quedado más chingón jajaja xd.
                        <br />
                        <br />
                        Te quiero un montón, gracias por existir y decidir ser mi amigo, mereces solo lo mejor en este mundo.
                        <br />
                        <br />
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Atentamente: Jocelyn Llamas
                    </Typography>
                </CardContent>
            </Card>
        </section>
    );
}