import React from 'react';

const LandingPage: React.FC = () => {
    return (
        <div>
            <header style={styles.header}>
                <h1 style={styles.title}> Header quemado para modificarlo luego </h1>
            </header>
            <div style={styles.body}>
                Aca puede ir contenido, o no, tambien podemos volverlo plantilla para el header y quitar esto
            </div>
        </div>
    );
};

const styles = {
    header: {
        backgroundColor: '#282c34',
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    },
    title: {
        fontSize: '24px',
        margin: 0,
    },
    body: {
        height: 'calc(100vh - 60px)',
        backgroundColor: '#f0f0f0',
    }
};

export default LandingPage;
