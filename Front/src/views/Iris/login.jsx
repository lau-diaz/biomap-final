import React from 'react'
import * as Components from '../../components/Iris/loginComponents'
import '../../components/Iris/index.css'
import { useForm } from 'react-hook-form'
import { registerRequest } from '../../api/auth'


function Login() {
    const [signIn, toggle] = React.useState(true)
    const { register, handleSubmit } = useForm()

    return (
        <div className='login'>
            <Components.Container>
                <Components.SignUpContainer signinin={signIn}>
                    <Components.Form onSubmit={handleSubmit(async (values) => {
                        console.log(values)
                        const response = await registerRequest(values)
                        console.log(response)
                    })}>
                        <Components.Title>Crear cuenta</Components.Title>
                        <Components.Input type='text' placeholder='Nombre' {...register('username', { required: true })} />
                        <Components.Input type='email' placeholder='Email' {...register('email', { required: true })} />
                        <Components.Input type='password' placeholder='Contraseña' {...register('password', { required: true })} />
                        <Components.Button type='submit'>Registrar usuario</Components.Button>
                    </Components.Form>
                </Components.SignUpContainer>

                <Components.SignInContainer signinin={signIn}>
                    <Components.Form >
                        <Components.Title>Inicio de sesión</Components.Title>
                        <Components.Input type='email' placeholder='Email' />
                        <Components.Input type='password' placeholder='Contraseña' />
                        <Components.Anchor href='#'>No recuerdas tu contraseña?</Components.Anchor>
                        <Components.Button>Iniciar sesión</Components.Button>
                    </Components.Form>
                </Components.SignInContainer>

                <Components.OverlayContainer signinin={signIn}>
                    <Components.Overlay signinin={signIn}>

                        <Components.LeftOverlayPanel signinin={signIn}>
                            <Components.Title>Hola de nuevo Biomaper</Components.Title>
                            <Components.Paragraph>
                                Inicia sesión para seguir aprendiendo
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(true)}>
                                Ir a inicio sesión
                            </Components.GhostButton>
                        </Components.LeftOverlayPanel>

                        <Components.RightOverlayPanel signinin={signIn}>
                            <Components.Title>Bienvenido a Biomap</Components.Title>
                            <Components.Paragraph>
                                Quieres ser parte de esta comunidad?
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Quiero registrarme
                            </Components.GhostButton>
                        </Components.RightOverlayPanel>

                    </Components.Overlay>
                </Components.OverlayContainer>

            </Components.Container>
        </div>
    )
}

export default Login
